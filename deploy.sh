#!/bin/bash

ssh -tt cloud_user@avnishkumarkaushik3c.mylabserver.com <<EOF
hostname
cd /devops/webgit/
git pull
npm install -y
BUILD_ID=dontKillMe forever start index.js
exit
EOF