/*
 * @Author: zhongxd 
 * @Date: 2019-02-26 16:24:12 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2019-02-26 16:32:27
 */


 
import React from 'react';
import logoImg from '../../job.png';
import './logo.css';

class Logo extends React.Component{

 render(){
   return(
     <div className='logo-container'>
       <img src={logoImg} alt='' />
     </div>
   )
 }

}

export default Logo;