require('babel-polyfill');
let pool = require('./pool');

module.exports = {
    findAll(sql){
      return new Promise(function(resolve,reject){
        var connection=0;
        pool.getConnection().then(function(conn){
          connection=conn;
          conn.query(sql,function(err,result){
            if(!err){
              resolve(result)
            }else {
              reject(err)
            }
          });
        }).catch(function(err){
          reject(err)
        }).finally(function(){
          if(connection){
            connection.release();
            console.log("释放完成");
          }
        });
      });    
    }
}