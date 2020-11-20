const http=require('http');
const app=require("./app");
const mongoose=require('mongoose');

//连接数据库
mongoose.connect(
  "mongodb://localhost:27017/db",
  {
      useNewUrlParser:true,
      useUnifiedTopology:true,
  },
  (error)=>{
    if(error){
        console.log("数据库连接失败");
    }else{
        //启动服务
        const server=http.createServer(app.callback());
        server.on("error",(error)=>{
            console.log("服务出错了...");
            console.log(error);
        });

        server.listen(8000,"10.36.150.44",()=>{
            console.log("服务启动成功...");
        })
    }
  }
)