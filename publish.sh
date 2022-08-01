#!/bin/sh
# 一键发布提交，并拿到生成的文档地址

date=$(date "+%Y%m%d" )

type git
if [ $? -eq 0 ]; then
    git add .
    git commit -m "chore: 添加${date}问题"
    if [ $? -eq 0 ]; then
        git push
    fi
fi

if [ $? -eq 0 ]; then
    echo '推送成功'
fi