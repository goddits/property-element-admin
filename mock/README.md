一、创建一个文件夹

1、mkdir mock
2、cd mock

二、安装依赖模块

pm install json-server --S

三、初始化一个 package.json 配置文件

npm init -y

四、创建一个 data.json 文件，并写入 json 数据：

```
{
"users": [
  {
    "name": "charlse",
    "phone": "18888888888",
    "email": "admin@gmail.com",
    "age": "23",
    "id": 1,
    "companyId": 1
  }
]
}
```
五、package.json中配置启动命令

"mock":"json-server --watch data.json --port 8888",   //--port 8888  默认是3000  指向8888

** json 文件中的每一个对象都类似于一个API接口响应的数据，访问 Resources 下的这些接口就能得相应数据了 **