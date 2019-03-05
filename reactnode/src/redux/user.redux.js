/*
 * @Author: zhongxd 
 * @Date: 2019-02-28 10:53:03 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-03-04 23:43:25
 */

import axios from 'axios';
import { getRedirectPath } from '../util';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';
const LOAD_DATA = 'LOAD_DATA';
const AUTH_SUCCESS = 'AUTH_SUCCESS';

const initState = {
  redirectTo: '',
  isAuth: false,
  msg: '',
  user: '',
  type: ''
}

//reducer
export function user(state = initState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return { ...state, msg: '', redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload };
    case LOGIN_SUCCESS:
      return { ...state, msg: '', redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload };
    case AUTH_SUCCESS:
      return { ...state, msg: '', redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload }
    case LOAD_DATA:
      return { ...state, ...action.payload };
    case ERROR_MSG:
      return { ...state, isAuth: false, msg: action.msg };
    default:
      return state;
  }
}


function loginSuccess(data) {
  return { type: 'LOGIN_SUCCESS', payload: data };
}

function errorMsg(msg) {
  return { msg, type: 'ERROR_MSG' };
}

function registerSuccess(data) {
  return { type: 'REGISTER_SUCCESS', payload: data };
}

function authSuccess(obj) {
  const { pwd, ...data } = obj; //只保留除了 pwd 字段以外的其他字段数据
  return { type: 'AUTH_SUCCESS', payload: data };
}

export function login({ user, pwd }) {
  if (!user || !pwd) {
    errorMsg('用户名密码必须输入');
  }
  return dispatch => {
    axios.post('/user/login', { user, pwd }).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        dispatch(loginSuccess(res.data.data));
      } else {
        dispatch(errorMsg(res.data.msg));
      }
    })
  }
}


export function register({ user, pwd, repeatpwd, type }) {
  if (!user || !pwd || !type) {
    return errorMsg('用户名密码必须输入');
  }
  if (pwd !== repeatpwd) {
    return errorMsg('两次密码不相等');
  }
  return dispatch => {
    axios.post('/user/register', { user, pwd, type }).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        dispatch(registerSuccess({ user, pwd, type }));
      } else {
        dispatch(errorMsg(res.data.msg));
      }
    })
  }
}

export function userinfo() {
  axios.get('/user/info').then(res => {
    //console.log(res);
    if (res.status === 200) {
      if (res.data.code === 0) {
        this.props.loadData(res.data.data)
      } else {
        //console.log(this.props.history);
        this.props.history.push('/login');
      }
    }
  })
}

export function loadData(userinfo) {
  return { type: LOAD_DATA, payload: userinfo };
}

export function update(data) {
  return dispatch => {
    axios.post('/user/update', data).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        dispatch(authSuccess(res.data.data));
      } else {
        dispatch(errorMsg(res.data.msg));
      }
    })
  }
}