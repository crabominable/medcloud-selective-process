#!/usr/bin/env bash

# echo 'Checking up MySQL...'
# until mysql -u$MYSQL_USER -p$MYSQL_PASSWORD -h $MYSQL_HOST -e ";" ; do
#    echo 'Waiting MySQL...'
#     sleep 5
# done

# DIR="/app/www/api/dist"
# if [[ ! -e $DIR ]]; then
#   cd /app/www/api/ && npm run rebuild
# fi

cd /app/medcloud-selective-process/backend && npx prisma migrate

if [ "$NODE_ENV" == "development" ]
then
  pm2 start /app/medcloud-selective-process/pm2/pm2-development.json
else
  pm2 start /app/medcloud-selective-process/pm2/pm2-production.json
fi

# Keep Container Running
tail -f /dev/null