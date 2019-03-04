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
import { BrowserRouter , Route , Switch} from 'react-router-dom';
import reducers from './reducer';
import './config';
import Login from './container/login/login';
import Register from './container/register/register';
import BossInfo from './container/bossinfo/bossinfo';
import GeniusInfo from './container/geniusinfo/geniusinfo';
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
import  AuthRoute from './component/authroute/authroute';
import './index.css';


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
          <AuthRoute></AuthRoute>
          <Switch>
          <Route path='/geniusinfo' exact component={GeniusInfo}></Route>
          <Route path='/bossinfo' exact component={BossInfo}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/register'  exact component={Register}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root')
);



//render();

//store.subscribe(render);