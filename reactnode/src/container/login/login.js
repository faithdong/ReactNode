/*
 * @Author: zhongxd 
 * @Date: 2019-02-26 16:16:23 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-03-04 19:16:15
 */


 import React from 'react';
 import Logo from '../../component/logo/logo';
 import { List , InputItem , Button , WingBlank , WhiteSpace} from 'antd-mobile';
 import { login } from '../../redux/user.redux';
 import { connect } from 'react-redux';
 import { Redirect } from 'react-router-dom';

 @connect(
   state=>state.user,
   { login }
 )
 class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user:'',
      pwd:''
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.register = this.register.bind(this);
  }

  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }

  register(){
    console.log('登录页的注册按钮',this.props);
    this.props.history.push('/register');
  }

  handleLogin(){
    console.log('登录信息', this.props);
    this.props.login(this.state);
  }
  render(){
    return(
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo></Logo>
        <WingBlank>
          <List >
            {this.props.msg ? <p className='error-msg'>用户名密码必须输入</p> : null}
            <InputItem onChange={(v) => this.handleChange('user', v)}>手机号码</InputItem>
            <InputItem onChange={(v) => this.handleChange('pwd', v)}>密码</InputItem>
          </List>
          <Button type='primary' onClick={this.handleLogin}>登录</Button>
          <WhiteSpace />
          <Button type='primary' onClick={this.register}>注册</Button>
        </WingBlank>
      </div>
    )
  }

 }

 export default Login;