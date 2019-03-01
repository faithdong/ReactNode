/*
 * @Author: zhongxd 
 * @Date: 2019-02-28 11:48:00 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-02-28 15:43:24
 */


const express = require('express');
const utils = require('utility');
const Router = express.Router();
const modle = require('./model');
const User = modle.getModel('user');

/**
 * 获取所有用户列表
 */
Router.get('/list',function(req,res){
  User.find({},function(err,doc){
    return res.json(doc);
  })
});

/**
 * 注册
 */
Router.post('/register',function(req,res){
  //console.log(`注册接口 ${req.body}`);
  const { user , pwd , type } = req.body;
  User.findOne({user},function(err,doc){
    if(doc){
      return res.json({code:1,msg:'用户名重复'});
    }
    User.create({user,type,pwd:utils.md5(pwd)},function(e,d){
      if(e){
        return res.json({code:1,msg:'后端出错了'});
      }
      return res.json({code:0});
    })
  })
});

Router.get('/info',function(req,res){
	return res.json({code:1});
});

module.exports = Router;