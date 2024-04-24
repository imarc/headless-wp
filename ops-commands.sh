ops-install() {
    if [[ $1 == "wordpress" ]]; then
        cd wordpress
        echo "Installing back-end dependencies..."

        composer update 1> /dev/null
        composer install 1> /dev/null

        npm i > /dev/null
        cd - > /dev/null
        echo "Done."
    elif [[ $1 == 'next' ]]; then
        cd next
        echo "Installing front-end dependencies..."
        npm i > /dev/null
        cd - > /dev/null
        echo "Done."
    elif [[ ! -n "$1" ]]; then
        ops install wordpress
        ops install next
    else
        echo "Not recognized: '$1'"
    fi
}

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