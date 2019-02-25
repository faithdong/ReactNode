/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister(); */




import React from 'react';
import ReactDom from 'react-dom';
import App1 from './App1';
import { createStore , applyMiddleware , compose }  from 'redux';
import thunk  from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter , Route , Link , Redirect , Switch } from 'react-router-dom';
import {counter} from './Index.redux';
//import { addGun , removeGun , addGunAsync } from './Index.redux'; 


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
// const store = createStore(counter, /* preloadedState, */ composeEnhancers(
//   applyMiddleware(thunk),
// ));
//const reduxDevTools = window.devToolsExtension? window.devToolsExtension() : f=>f;

const store = createStore(
  counter,
  composeEnhancers(applyMiddleware(thunk))
);
function Erying(){
  return <h2>二营</h2>
}
function Qibinglian(){
  return <h2>骑兵连</h2>
}
class Test extends React.Component{
  render(){
    console.log(this.props);
    return(
      <h1>测试组件{this.props.match.params.location}</h1>
    )
  }
}
ReactDom.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to='/'>一营</Link>
            </li>
            <li>
              <Link to='/erying'>二营</Link>
            </li>
            <li>
              <Link to='/qibinglian'>骑兵连</Link>
            </li>
          </ul>
          <Switch>
            <Route path='/' exact component={App1}></Route>
            <Route path='/erying' component={Erying}></Route>
            <Route path='/qibinglian' component={Qibinglian}></Route>
            <Route path='/:location'  component={Test}></Route>
            {/* <App1 /> */}
          </Switch>
          </div>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root')
);



//render();

//store.subscribe(render);