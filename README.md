# Deno

**安装deno**

**使用PowerShell（Windows）：**

`iwr https://deno.land/x/install/install.ps1 -useb | iex`

**版本**

`deno --version` 或者 `deno -V`

**更新：**

`deno upgrade`

**查看依赖关系树**

`deno info main.ts`

**运行**

`deno run main.ts`

**读取本地文件**

`deno run --allow-read http://localhost/deno/hello.ts i.txt`

> 解决中文：`chcp 65001`

**安装文件服务器**

`deno install --allow-net --allow-read https://deno.land/std/http/file_server.ts`

运行 `file_server .`