echo "Déclaration des routes javascripts"
echo "..."
#./app/console fos:js-routing:dump

echo "Installation des assets"
echo "..."
./app/console assets:install web/ --symlink --env=dev

bash bin/cc_chmod.sh

