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
    # Check required tools: curl and terminus
    if [[ ! "$(which curl)" ]]; then
        echo "You need curl to install."
        exit
    fi

    if [[ ! "$(which terminus)" ]]; then
        echo "You need terminus to continue. Please install terminus, and authenticate your machine."
        exit
    fi

    # Ensure the backup directory exists
    if [ ! -d ".backup" ]; then
        mkdir .backup
        echo "Directory .backup created."
    else
        echo "Directory .backup already exists."
    fi

    echo "Creating a new backup for database and files for rentaly.dev..."
    terminus backup:create rentaly.dev --element=db
    terminus backup:create rentaly.dev --element=files

    TIMESTAMP=$(date +%Y-%m-%d-%H%M%S)
    DB_BACKUP_FILE="$TIMESTAMP-db-backup.gz"
    FILES_BACKUP_FILE="$TIMESTAMP-files-backup.tar.gz"

    # Process database backup
    if terminus backup:get rentaly.dev --element=db --to=".backup/$DB_BACKUP_FILE"; then
        echo "Database backup retrieval succeeded."
        # Database processing steps (decompression, URL replacement, etc.)
    else
        echo "Failed to retrieve database backup."
        exit 1
    fi

    # Process files backup
    if terminus backup:get rentaly.dev --element=files --to=".backup/$FILES_BACKUP_FILE"; then
        echo "Files backup retrieval succeeded."
        tar xvzf ".backup/$FILES_BACKUP_FILE" --strip-components=1 -C wordpress/wp-content/uploads
    else
        echo "Failed to retrieve files backup."
        exit 1
    fi

    echo "Cleaning up .gz files in the .backup directory..."
    find .backup -type f -name '*.gz' -exec rm {} +

    echo "All operations completed successfully."
}

