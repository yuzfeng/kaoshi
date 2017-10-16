require('babel-polyfill');
let express =require('express');
//let route = express.Router();
let paperDB = require('../db/paperDB');
let paper=express.Router();
//查询所有
paper.get('/getAllSubjectType',(req,resp)=>{
    var sql="select * from tbl_exam_subjecttype";
    findAllInfo(sql,resp);
});
paper.get('/getAlldepartment',(req,resp)=>{
    var sql="select * from tbl_exam_department";
    findAllInfo(sql,resp);
});
paper.get('/getAllSubjectLevel',(req,resp)=>{
   var sql="select * from tbl_exam_subjectlevel";
    findAllInfo(sql,resp);
});
paper.get('/getAllTopic',(req,resp)=>{
    var sql="select * from tbl_exam_topic";
    findAllInfo(sql,resp);
});
paper.post('/getAllSubject',(req,resp)=>{
    // console.log(req.body);
    var queryInfo=req.body;
    var dep=queryInfo['subject.department.id'];    
    var topic=queryInfo['subject.topic.id'];
    var types=queryInfo['subject.subjectType.id'];
    var level=queryInfo['subject.subjectLevel.id'];    
    var sql ="select * from tbl_exam_subject where department_id='"
    +dep+"'and subjectLevel_id='"
    +level+"'and subjectType_id='"
    +types+"'and topic_id='"
    +topic+"'";
    findAllInfo(sql,resp);
})
//审核通过&不通过
paper.post('/checkSubject',(req,resp)=>{
	var sql = "update tbl_exam_subject set checkState='"+req.body['subject.checkState']+"' where id="+req.body['subject.id'];
	findAllInfo(sql,resp);
})
//级联删除
paper.post('/delete',(req,resp)=>{
	var sql = "delete from tbl_exam_subject where id="+req.body['subject.id'];
	findAllInfo(sql,resp);
})
//查询题目所有可选信息
var findAllInfo=(sql,resp)=>{
    paperDB.findAll(sql).then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
};


module.exports=paper;