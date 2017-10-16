require('babel-polyfill');
let mysql = require('mysql');

let pool = global.pool;
if(!pool){
  //创建连接池
  pool = mysql.createPool({
    database:'exam',
    user:'root',
    password:'root'
  });
  //将连接挂载到global
  global.pool = pool;
}
//获取链接
function getConnection(){
  return new Promise(function(resolve,reject){
    pool.getConnection(function(err,conn){
      if(!err){
        resolve(conn);
      }else {
        reject(err);
      }
    });
  })
}
module.exports = {
  getConnection,
  // execute
};


