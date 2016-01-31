echo "Suppréssion des bases de données existantes"
echo "..."
./app/console doctrine:database:drop --force

echo "Création des bases de données"
echo "..."
./app/console doctrine:database:create

echo "Mise à jours des tables"
echo "..."
./app/console doctrine:schema:update --force

echo "Lancement des fixtures"
echo "..."
./app/console doctrine:fixtures:load --append
