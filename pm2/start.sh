cd /app/medcloud-selective-process/backend && npx prisma migrate

if [ "$NODE_ENV" == "development" ]
then
  pm2 start /app/medcloud-selective-process/pm2/pm2-development.json
else
  pm2 start /app/medcloud-selective-process/pm2/pm2-production.json
fi

tail -f /dev/null