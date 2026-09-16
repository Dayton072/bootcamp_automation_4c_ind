
echo "🚀 Running Playwright tests inside Docker..."

if ENV == STAGING
 cp /data/staging/user.json /data/user.json
elif ENV == PRODUCTION
 cp /data/production/user.json /data/user.json
else
 cp /data/development/user.json /data/user.json
fi

npx playwright test