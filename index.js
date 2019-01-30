/**
 * 小肥牛扫码点餐系统API子系统
 */
const PORT=8090;
const express=require("express");
const cors=require("cors");
const bodyParser=require("body-parser");
const categoryRouter=require('./routes/admin/category');
const adminRouter = require('./routes/admin/admin');
const dishRouter = require('./routes/admin/dish');

//启动主服务器
var app=express();
app.listen(PORT,()=>{
    console.log('Server Listening:'+PORT+'...');
    console.log(new Date().toLocaleString())
})

// 运用cors解决跨域问题
app.use(cors());
//把json格式的请求主体数据解析出来放入req.body属性
//不使用下面这种
// app.use(bodyParser.urlencoded({}))
app.use(bodyParser.json());
// 挂载路由器
app.use('/admin/category',categoryRouter);
app.use('/admin', adminRouter);
app.use('/admin/dish', dishRouter);