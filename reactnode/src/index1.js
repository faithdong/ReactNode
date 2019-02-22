import React from 'react ';
import ReactDom from 'react-dom';
import App1 from './App1';
import { createStore }  from 'redux';
import {counter} from './Index.redux';
const store = createStore(counter);

function render(){
  ReactDom.render(<App1 store={store}/>, document.getElementById('root'));
}

render();
