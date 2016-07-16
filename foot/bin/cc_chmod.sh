echo "Réinitialisation des droits sur le projet"
echo "..."
chmod 755 -R ./*

echo "Suppression du cache de l'environnement courant"
echo "..."
./app/console cache:clear --no-warmup

echo "..."
echo "Réinitialisation des droits sur les dossiers de cache et de logs"
echo "..."
chmod 777 -R ./app/cache ./app/logs

echo ""
echo "Cache réinitialisé ! ^____^"

