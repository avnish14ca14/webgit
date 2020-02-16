#!/bin/bash

ssh -tt cloud_user@avnishkumarkaushik3c.mylabserver.com <<EOF
hostname
cd /devops/webgit/
git pull
npm install - production
pm2 restart all
exit
EOF