/*
 * @Author: zhongxd 
 * @Date: 2019-02-26 16:16:23 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-02-26 16:57:37
 */


import React from 'react';
import Logo from '../../component/logo/logo';
import { List , InputItem , Button , WingBlank , WhiteSpace , Radio} from 'antd-mobile';

class Register extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      type:'genius'
    };

    this.register = this.register.bind(this);
  }

  register(){
    console.log(this.props);
    this.props.history.push('/register');
  }

  render(){
    const RadioItem = Radio.RadioItem;
    return(
      <div>
        <Logo></Logo>
        <WingBlank>
          <List >
            <InputItem>手机号码</InputItem>
            <WhiteSpace />
            <InputItem>密码</InputItem>
            <WhiteSpace />
            <InputItem>确认密码</InputItem>
            <WhiteSpace />
            <RadioItem checked={this.state.type==='genius'}>牛人</RadioItem>
            <WhiteSpace />
            <RadioItem checked={this.state.type==='boss'}>BOSS</RadioItem>
          </List>
          <WhiteSpace />
          <Button type='primary' onClick={this.register}>注册</Button>
        </WingBlank>
      </div>
    )
  }

}

export default Register;