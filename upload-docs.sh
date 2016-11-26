#!/bin/bash          

VERSION=$(node -pe 'JSON.parse(process.argv[1]).version' "$(cat package.json)")

rm -rf ./docs

jsdoc -c jsdoc.json

cd docs/WARG-Human-Vision/$VERSION

git init

git remote add origin git@github.com:UWARG/WARG-Human-Vision.git

git add .

git commit -m "Updated documentation for version $VERSION"

git push origin master:gh-pages --force
