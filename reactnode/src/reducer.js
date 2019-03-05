/*
 * @Author: zhongxd 
 * @Date: 2019-02-26 11:05:43 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-03-05 18:05:54
 * 
 * 合并所有 reducer ，并且返回
 */

 import { combineReducers } from 'redux';
 import { user } from './redux/user.redux'
 import { chatuser } from './redux/chatuser.redux';


 export default combineReducers({user , chatuser})
