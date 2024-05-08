# ops-install() {
#     if [[ $1 == "wordpress" ]]; then
#         cd wordpress
#         echo "Installing back-end dependencies..."

#         composer update 1> /dev/null
#         composer install 1> /dev/null

#         npm i > /dev/null
#         cd - > /dev/null
#         echo "Done."
#     elif [[ $1 == 'next' ]]; then
#         cd next
#         echo "Installing front-end dependencies..."
#         npm i > /dev/null
#         cd - > /dev/null
#         echo "Done."
#     elif [[ ! -n "$1" ]]; then
#         ops install wordpress
#         ops install next
#     else
#         echo "Not recognized: '$1'"
#     fi
# }

ops-build-next() {
    ops install > /dev/null
    cd next
    npm run build
    cd -
}

ops-build-wp() {
    ops install > /dev/null
    cd wordpress
    npm run build
    cd -
}

ops-dev () {
    cd ./next
    ops npm run dev
    cd -
}


ops-sync-db() {
    if [[ ! "$(which curl)" ]]; then
        echo "You need curl to install."
        exit
    fi

    if [[ ! "$(which terminus)" ]]; then
        echo "You need terminus to continue. Please install terminus, and authenticate your machine." 
        echo ""
        echo "Mac OSX Install (Homebrew)"
        echo "brew install pantheon-systems/external/terminus"
        echo ""
        echo "Linux Install"
        echo "mkdir -p ~/terminus && cd ~/terminus"
        echo "curl -L https://github.com/pantheon-systems/terminus/releases/download/3.4.0/terminus.phar --output terminus"
        echo "chmod +x terminus"
        echo "./terminus self:update"
        echo "sudo ln -s ~/terminus/terminus /usr/local/bin/terminus"
        echo ""
        echo "Windows does not have a terminus package. Please us WSL, and follow linux instructions for use on Windows."
        echo ""
        echo "After installing, please create a machine token and authenticate here:"
        echo "https://dashboard.pantheon.io/personal-settings/machine-tokens/create/?client=terminus"
        echo ""
        exit
    fi

    if [ ! -d ".backup" ]; then
        mkdir .backup
        echo "Directory .backup created."
    else
        echo "Directory .backup already exists."
    fi

    echo "Creating a new backup for rentaly.dev..."
    terminus backup:create rentaly.dev --element=db

    if [ $? -eq 0 ]; then
        echo "Backup creation succeeded."
        TIMESTAMP=$(date +%Y-%m-%d-%H%M%S)  # Save the current timestamp
        BACKUP_FILE="$TIMESTAMP-db-backup.gz"  # Create the backup file name

        terminus backup:get rentaly.dev --element=db --to=".backup/$BACKUP_FILE"

        # Move to the .backup directory and decompress the backup
        cd .backup
        gunzip "$BACKUP_FILE"

        # Rename the uncompressed file for clarity and add .sql suffix
        SQL_FILE="${BACKUP_FILE%.gz}.sql"
        mv "${BACKUP_FILE%.gz}" "$SQL_FILE"

        # Determine OS and prepare sed command accordingly
        if [[ "$OSTYPE" == "darwin"* ]]; then
            # macOS system
            SED_CMD=(sed -i '')
        else
            # Assume Linux
            SED_CMD=(sed -i)
        fi

        # Replace URLs in the SQL file
        "${SED_CMD[@]}" 's/dev-rentaly.pantheonsite.io/headless-wp.imarc.io/g' "$SQL_FILE"
        "${SED_CMD[@]}" 's/nextjs.rentaly.imarc.com/localhost:3000/g' "$SQL_FILE"

        echo "URLs in $SQL_FILE have been updated."

        ops mariadb import headless_wp $SQL_FILE

        if [ $? -eq 0 ]; then
            echo "Database import successful."
            cd ..
        else
            echo "Failed to import database."
            exit 1
        fi
    else
        echo "Failed to create backup."
        exit 1
    fi

    echo "Syncing Files from Pantheon"

    # Remove the existing uploads directory
    unlink wordpress/wp-content/uploads 2> /dev/null || true
    mkdir -p wordpress/wp-content/uploads

    terminus backup:get rentaly.dev --element=files --to=.backup/backup.tar.gz
    tar xvzf .backup/backup.tar.gz --strip-components=1 -C wordpress/wp-content/uploads


    echo "Cleaning up .gz files in the .backup directory..."
    find .backup -type f -name '*.gz' -exec rm {} +

    echo "All operations completed successfully."

}
