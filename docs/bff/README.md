# 轻舟 BFF 服务说明

## 开发指引
### 安装依赖
```bash
yarn install
```
### 配置环境变量
```bash
cp .env.example .env
```
### 服务启动和停止
```bash
# start server on production mode
yarn start
# start server on development mode
yarn dev

# stop server
# if run server in production mode an open daemon
yarn stop
```

## 目录说明
```shell
├── Dockerfile                     # Docker 配置
├── Jenkinsfile                    # Jenkins 配置
├── README.md                      # 说明文档
├── app
│   ├── constant                   # 常量
│   ├── controller                 # 控制器
│   ├── extend                     # 扩展
│   ├── grpc                       # rpc
│   ├── grpc-pb                    # rpc
│   ├── lib
│   ├── middleware                 # 中间件
│   ├── parameter                  # 公共请求参数
│   ├── service                    # 服务层，请求后端接口
│   └── util                       # 工具函数
├── app.ts                         # 入口文件
├── commitlint.config.js           # commit 格式校验
├── config                         # 项目配置
├── dind.cicd.config.js            # 钉钉配置
├── docker-entrypoint.sh           # Docker
├── env.ts                         # 环境变量
├── market-types                   # 类型文件
├── nodemon.json
├── package.json
├── plop                           # 文件自动生成模板和规则
├── plopfile.js                    # 文件生成配置
├── service-entrypoint
├── tsconfig.json                  # ts 配置
├── typings                        # 类型自动生成
└── yarn.lock
```
