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
import { createStore , applyMiddleware , compose }  from 'redux';
import thunk  from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter , Route , Link , Redirect , Switch } from 'react-router-dom';
import reducers from './reducer';
import './config';
import Login from './container/login/login';
import Register from './container/register/register';
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;


const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDom.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route path='/login' component={Login}></Route>
          <Route path='/register' component={Register}></Route>
        </div>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root')
);



//render();

//store.subscribe(render);