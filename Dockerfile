# 使用官方的 Node.js 镜像作为基础镜像
FROM node:14 as builder

# 设置工作目录
WORKDIR /app

# 拷贝 package.json 和 package-lock.json 到工作目录
COPY package*.json ./

# 安装依赖
RUN npm install

# 拷贝所有源代码到工作目录
COPY dist ./dist

# 使用 Nginx 作为生产环境的 Web 服务器
FROM nginx:latest

# 将构建好的 Vue.js 应用静态文件复制到 Nginx 的默认静态文件目录
COPY --from=builder /app/dist /usr/share/nginx/html

# Nginx 默认监听的端口是 80，无需显式声明 EXPOSE
# 如果需要修改端口，可以在这里添加 EXPOSE 指令

# 容器启动时自动启动 Nginx 服务
CMD ["nginx", "-g", "daemon off;"]
