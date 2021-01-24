#!/usr/bin/env sh
set -e
yarn run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push git@github.com:thiagoschreck/vuecalc.git master:master
cd -

