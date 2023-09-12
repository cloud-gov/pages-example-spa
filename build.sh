# creates .env file for env var into the site / see .env file
#!/bin/bash script to create 3 env vars
# run 3 seperate scripts at build time

echo "BUILD_PATH=_site" >> .env
echo "PUBLIC_URL=$BASEURL" >> .env
echo "REACT_APP_PUBLIC_URL=$BASEURL" >> .env