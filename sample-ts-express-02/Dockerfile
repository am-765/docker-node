# syntax=docker/dockerfile:1

# ベースイメージ
FROM node:16.16.0-buster-slim

# 環境変数
ENV NODE_ENV=production

# ワーキングディレクトリ
WORKDIR /app

# Add Tini（PID1問題対策）
ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "--"]

# ファイルの所有者を変更
COPY --chown=node:node . .

# ユーザー名の指定
USER node
