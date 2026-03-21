# 情感人格测试 - Docker镜像
# 使用轻量级Nginx Alpine镜像
FROM nginx:alpine

# 设置维护者信息
LABEL maintainer="jackhe183"
LABEL description="情感人格测试网页 - 静态HTML部署"

# 复制静态文件到Nginx默认目录
COPY index.html /usr/share/nginx/html/index.html
COPY v2_themes /usr/share/nginx/html/themes

# 复制Nginx配置（可选，使用默认配置）
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露80端口
EXPOSE 80

# Nginx默认以daemon mode运行，Alpine镜像已配置前台运行
CMD ["nginx", "-g", "daemon off;"]
