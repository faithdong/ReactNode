/*
 * @Author: zhongxd 
 * @Date: 2019-02-26 16:16:23 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-02-28 18:29:21
 */


import React from 'react';
import Logo from '../../component/logo/logo';
import { List , InputItem , Button , WingBlank , WhiteSpace , Radio} from 'antd-mobile';
import { connect } from 'react-redux';
import { register } from '../../redux/user.redux';
import {Redirect} from 'react-router-dom';


@connect(
  state=>state.user,
  {register}
)
class Register extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user:'',
      pwd:'',
      repeatpwd:'',
      type:'genius'
    };

    this.handleRegister = this.handleRegister.bind(this);
  }

  handleRegister(){
    console.log(this.state);
    this.props.register(this.state);
    //this.props.history.push('/register');
  }

  handleChange(key,val){
    this.setState({
      [key]:val
    })
  }

  render(){
    const RadioItem = Radio.RadioItem;
    return(
      <div>
        {this.props.redirectTo?<Redirect to={this.props.redirectTo} /> : null }
        <Logo></Logo>
        <WingBlank>
          <List >
            {this.props.msg? <p className='error-msg'>用户名密码必须输入</p> : null}
            <InputItem onChange={(v)=>this.handleChange('user',v)}>手机号码</InputItem>
            <WhiteSpace />
            <InputItem type='password'
              onChange={(v)=>this.handleChange('pwd',v)}>密码</InputItem>
            <WhiteSpace />
            <InputItem type='password' 
              onChange={(v)=>this.handleChange('repeatpwd',v)}>确认密码</InputItem>
            <WhiteSpace />
            <RadioItem 
              checked={this.state.type==='genius'}
              onChange={(v)=>this.handleChange('type','genius')}>牛人</RadioItem>
            <WhiteSpace />
            <RadioItem 
              checked={this.state.type==='boss'}
              onChange={(v)=>this.handleChange('type','boss')}
            >BOSS</RadioItem>
          </List>
          <WhiteSpace />
          <Button type='primary' onClick={this.handleRegister}>注册</Button>
        </WingBlank>
      </div>
    )
  }

}

export default Register;