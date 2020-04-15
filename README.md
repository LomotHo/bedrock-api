[Minecraft服务端下载]:https://minecraft.net/en-us/download/server/bedrock/

# bedrock-api

## 注意
本项目的所有功能已经包含在[bedrock-console](https://github.com/LomotHo/bedrock-console)项目中了，因此本项目将不再维护。

## 运行
### 直接运行
```
// 1. clone项目
git clone https://github.com/LomotHo/bedrock-api.git && cd bedrock-api

// 2. 在bedrock-api内创建bedrock文件夹，解压服务端程序到bedrock文件夹，或者直接把旧的数据复制过来
mkdir bedrock && unzip bedrock-server-1.xx.xx.xx.zip

// 3.运行（要先安装nodejs）
npm i
node app.js
```
### docker
```
docker run -d --restart=always --name=mcpe-api --net=host \
  -v /opt/mcpe-data:/server/bedrock \
  lomot/minecraft-bedrock:base-api
```

注意: 服务端数据文件夹/opt/mcpe-data需要包括完整的服务器文件才能运行, 第一次配置建议从官方网站下载并解压[Minecraft服务端下载]


## 配置
#### 配置文件是config/index.js，当前可用项目：
 - localPort: http api端口
 - apiPrefix: api前缀

## api列表

#### GET /api/v1/sendcmd
 - 用法: ```GET www.xx.xx:3000/api/v1/sendcmd?cmd=xxxx```
 - 示例: 
  - list: ```GET www.xx.xx:3000/api/v1/sendcmd?cmd=list```, (暂时不能返回数据)
  - op: ```GET www.xx.xx:3000/api/v1/sendcmd?cmd=op%20"lomot%20coyote"``` cmd后面的参数需要编码，原命令为```op "lomot coyote"```


## 关联项目
### [LomotHo/minecraft-bedrock](https://github.com/LomotHo/minecraft-bedrock)
使用docker包装的bsd服务器，快速部署

### [LomotHo/bedrock-console](https://github.com/LomotHo/bedrock-console)
使用Nodejs实现的Minecraft Bedrock服务器的web控制台，同时支持使用http接口向后台发送命令。

### [LomotHo/bedrock-webconsole-ui](https://github.com/LomotHo/bedrock-webconsole-ui)
bedrock-console项目的web界面
