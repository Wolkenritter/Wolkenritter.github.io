# 当发生错误时中止脚本
set -e

cd wk

# 构建
npm run build

# cd 到构建输出的目录下
cd dist

git init
git add -A
git commit -m 'deploy add'

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/Wolkenritter/Wolkenritter.github.io.git master:gh-pages

cd ../