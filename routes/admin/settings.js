const express=require('express');
const pool=require('../../pool');
var router=express.Router();
module.exports=router;


/**
 * GET /admin/setting
 * 获取所有的全局设置信息
 * 返回数据：
 * {appName:xx,adminURL:'xx'}
 */
router.get('/',(req,res)=>{
   pool.query('SELECT * FROM xfn_settings LIMIT 1',(err,result)=>{
       if(err)throw err;
       res.send(result[0]);
   })
})




router.put('/', (req, res)=>{
    pool.query('UPDATE xfn_settings SET ?',req.body,(err, result)=>{
      if(err)throw err;
      res.send({code:200,msg:'settings updated succ'})
    })
  })