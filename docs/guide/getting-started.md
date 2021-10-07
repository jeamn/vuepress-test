# 快速上手

## 依赖环境

- [Node.js v12+](https://nodejs.org/)
- [Yarn v1 classic](https://classic.yarnpkg.com/zh-Hans/) （可选）

## 拉取项目

```bash
git clone https://git.gaoding.com/operations-market/market-docs.git
```

## 安装依赖

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
yarn install
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
npm install
```

  </CodeGroupItem>
</CodeGroup>

## 启动

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
yarn docs:dev
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
npm run docs:dev
```

  </CodeGroupItem>
</CodeGroup>

VuePress 会在 [http://localhost:8080](http://localhost:8080) 启动一个热重载的开发服务器。当你修改你的 Markdown 文件时，浏览器中的内容也会自动更新。

## 编写文档
#### 创建文件
根据文档类型，在 `docs` 文件夹下创建 `.md` 结尾的文件即可。
#### 设置导航
在 `docs/.vuepress/configs/navbar/index.ts` 文件中设置导航。
#### 设置侧边栏
如果文档有侧边栏展示的需求，则在 `docs/.vuepress/configs/sidebar/index.ts` 中设置侧边栏。


## 部署

