/*
 * @Author: zhongxd 
 * @Date: 2019-02-26 16:16:23 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-02-26 16:48:19
 */


 import React from 'react';
 import Logo from '../../component/logo/logo';
 import { List , InputItem , Button , WingBlank , WhiteSpace} from 'antd-mobile';

 class Login extends React.Component{
  constructor(props){
    super(props);

    this.register = this.register.bind(this);
  }

  register(){
    console.log(this.props);
    this.props.history.push('/register');
  }
  render(){
    return(
      <div>
        <Logo></Logo>
        <h2>登录页面</h2>
        <WingBlank>
          <List >
            <InputItem>手机号码</InputItem>
            <InputItem>密码</InputItem>
          </List>
          <Button type='primary'>登录</Button>
          <WhiteSpace />
          <Button type='primary' onClick={this.register}>注册</Button>
        </WingBlank>
      </div>
    )
  }

 }

 export default Login;