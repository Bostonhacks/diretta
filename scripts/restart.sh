#!/bin/bash
cd /var/www/live
npm install
pm2 restart bostonhacks-live
logout
