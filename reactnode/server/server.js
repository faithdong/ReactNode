const express = require('express');

const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', ()=>{
  console.log('mongodb connect success!');
})

const User = mongoose.model('user', new mongoose.Schema({
  name:{type:String,require:true},
  age:{type:Number,require:true}
}));

/* User.create({
  name:'imooc',
  age:5
},function(err , doc){
  if(!err){
    console.log(doc);
  }else{
    console.log(err);
  }
}) */

const app = express();

app.get('/',function(req,res){
  res.send('<h1>Hello World</h1>');
})

app.get('/data',function(req,res){
  User.find({},function(err,doc){
    //return res.json(doc);
    res.json(doc);
  })
  //res.json({name:'zhongxd',type:'IT'})
})


app.listen(9093,function(){
  console.log('Node app start at port 9093');
})