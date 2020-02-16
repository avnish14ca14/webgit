#!/bin/bash

ssh cloud_user@avnishkumarkaushik3c.mylabserver.com
cd /devops/webgit/
git pull origin master
npm install - production
npm start