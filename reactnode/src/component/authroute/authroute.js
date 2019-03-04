/*
 * @Author: zhongxd 
 * @Date: 2019-02-27 20:44:40 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-03-04 18:13:11
 */


import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { loadData } from '../../redux/user.redux';
import { connect } from 'react-redux';


@withRouter
@connect(
  state=>state,
  {loadData}
)
class AuthRoute extends React.Component {
	componentDidMount() {
		const publicList = ['/login','/register'];
		const pathname = this.props.location.pathname;
		if(publicList.indexOf(pathname)>-1){
			return null;
		}
		axios.get('/user/info').then( res=>{
			console.log(res);
			if(res.status === 200){
				if(res.data.code === 0){
          this.props.loadData(res.data.data);
				}else{
					//console.log(this.props.history);
					this.props.history.push('/login');
				}
			}
		})
	}

	render(){
		return null;
	}

}

export default AuthRoute 