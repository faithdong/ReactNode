import React from 'react';
import {connect} from 'react-redux';
import { addGun , removeGun , addGunAsync } from './Index.redux';

// const mapStatetoProps = (state)=>{
//   return {num:state}
// }
// const actionCreators = {addGun , removeGun , addGunAsync};
//App1 = connect(mapStatetoProps,actionCreators)(App1);
@connect(
  state=>({num:state}),
  {addGun , removeGun , addGunAsync}
)
class App1 extends React.Component{

  render(){
    return(
      <div>
        <h1>现在有机关枪{this.props.num}把</h1>

        <button onClick={this.props.addGun}>申请武器</button>
        <button onClick={this.props.removeGun}>归还武器</button>
        <button onClick={this.props.addGunAsync}>拖两天</button>
      </div>
    )
  }

}

export default App1;