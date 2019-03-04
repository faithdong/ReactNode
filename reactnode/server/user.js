/*
 * @Author: zhongxd 
 * @Date: 2019-02-28 11:48:00 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-03-04 23:57:22
 */


const express = require('express');
const utils = require('utility');
const Router = express.Router();
const modle = require('./model');
const User = modle.getModel('user');

const _filter = {'pwd':0,'__v':0};

/**
 * 获取所有用户列表
 */
Router.get('/list',function(req,res){
  //User.remove({},function(e,d){});//删除所有用户
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
    const userModel = new User({user,type,pwd:utils.md5(pwd)});
    userModel.save(function(e,d){
      if(e){
        return res.json({code:1,msg:'后端出错了'});
      }
      const {user , type , _id} = d;
      res.cookie('userid',_id); 
      return res.json({code:0,data:{user, type , _id}});
    });
  })
});

/**
 * 登录
 */
Router.post('/login',function(req,res){
  const { user , pwd  } = req.body;
  User.findOne({user , pwd:utils.md5(pwd)},_filter, function(err,doc){
    if(!doc){
      return res.json({code:1,msg:'用户名或者密码错误'});
    }
    res.cookie('userid',doc._id);
    return res.json({code:0,data:doc});
  })
});

/**
 * 用户信息
 */
Router.get('/info',function(req,res){
  const { userid } = req.cookies.userid;
  if(!userid){
    return res.json({code:1});
  }
	User.findOne({_id:userid},_filter,function(err,doc){
    if(err){
      return res.json({code:1,msg:'后端出错了'});
    }
    if(doc){
      return res.json({code:0,data:doc});
    }
  })
});

Router.post('/update',function(req,res){
  const { userid } = req.cookies; //获取cookie
  if(!userid){
    return res.json({code:1});
  }
  //const { avatar , company , desc , money , title } = req.body; 
  const body = req.body;
  User.findByIdAndUpdate(userid,body,function(err,doc){
    const data = Object.assign({},{
      user:doc.user,
      type:doc.type
    },body);
    return res.json({code:0,data});
  })
})

module.exports = Router;