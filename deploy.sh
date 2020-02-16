#!/bin/bash

ssh cloud_user@avnishkumarkaushik3c.mylabserver.com
hostname
cd /devops/webgit/
git pull origin master
npm install - production
npm start