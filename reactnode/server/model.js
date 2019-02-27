/*
 * @Author: zhongxd 
 * @Date: 2019-02-27 21:15:04 
 * @Last Modified by:   zhongxd 
 * @Last Modified time: 2019-02-27 21:15:04 
 */



const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017';
mongoose.connect(DB_URL);