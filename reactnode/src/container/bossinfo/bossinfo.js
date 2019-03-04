/*
 * @Author: zhongxd 
 * @Date: 2019-03-04 15:11:16 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-03-04 23:34:44
 * 
 * boss 信息
 */


import React from 'react';
import { NavBar , InputItem , TextareaItem , Button } from 'antd-mobile';
import AvatarSelector from '../../component/avatar-selector/avatar-selector'
import { connect } from 'react-redux';
import { update } from '../../redux/user.redux';


@connect(
  state=>state.user,
  { update }
)
class BossInfo extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title:''
    }
    
  }


  onChange(key,val){
    this.setState({
      [key]:val
    })
  }

  render() {
    return (
      <div>
        <NavBar
          mode="dark">Boss 信息页面</NavBar>
          <AvatarSelector selectAvatar={(imgname)=>{this.setState({avatar:imgname})}}></AvatarSelector>
          <InputItem onChange={(v)=>this.onChange('title',v)}>招聘职位</InputItem>
          <InputItem onChange={(v)=>this.onChange('company',v)}>公司名称</InputItem>
          <InputItem onChange={(v)=>this.onChange('money',v)}>职位名称</InputItem>
          <TextareaItem rows={3} title='职位要求' onChange={(v)=>this.onChange('desc',v)}></TextareaItem>
          <Button type='primary' onClick={()=>{this.props.update(this.state)}}>保存</Button>
      </div>
    )
  }
}

export default BossInfo;
