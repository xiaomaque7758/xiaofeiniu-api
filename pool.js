// MySQL数据库连接池
const mysql=require('mysql');

var pool=mysql.createPool({
   host:'127.0.0.1',
   user:'root',
   port:3306,
   password:'',
   database:'xiaofeiniu',
   connectionLimit:10
});
module.exports=pool;