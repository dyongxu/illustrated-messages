#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://cstallone.github.io/illustrated-messages
git push -f git@github.com:cstallone/illustrated-messages.git main:gh-pages

# if you are deploying to https://cstallone.github.io/illustrated-messages
git push -f git@github.com:cstallone/illustrated-messages.git main:gh-pages

cd -
