#!/bin/bash

ssh -tt cloud_user@avnishkumarkaushik3c.mylabserver.com
hostname
cd /devops/webgit/
git pull origin master
npm install - y
npm start
exit