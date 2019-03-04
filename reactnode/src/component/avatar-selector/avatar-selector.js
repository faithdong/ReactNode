/*
 * @Author: zhongxd 
 * @Date: 2019-03-04 22:39:09 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-03-04 23:31:35
 */

import React from 'react';
import { Grid , List  } from 'antd-mobile'

class AvatarSelector extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		const avatarList = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'
			.split(',')
			.map(v => ({
				icon: require(`../img/${v}.png`),
				text: v
			}));
		const gridHeader = this.state.icon ? (<div><span>已选择图像</span><img style={{ width: 20 }} src={this.state.icon} alt="" /></div>) : <div>请选择头像</div>;
		return (
			<div>
				<List renderHeader={()=>gridHeader}>
					<Grid data={avatarList} columnNum={5} onClick={_el => { console.log(_el); this.setState(_el); this.props.selectAvatar(_el.text) }}></Grid>
				</List>
			</div>
		)
	}
}

export default AvatarSelector;