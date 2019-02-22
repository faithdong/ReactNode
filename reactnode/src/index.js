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

import {counter} from './Index.redux';
import { addGun , removeGun , addGunAsync } from './Index.redux';


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(counter, /* preloadedState, */ composeEnhancers(
//   applyMiddleware(thunk),
// ));
const reduxDevTools = window.devToolsExtension? window.devToolsExtension() : f=>f;

const store = createStore(
  counter,
  compose(
    applyMiddleware(thunk),
    reduxDevTools
    //window.devToolsExtension? window.devToolsExtension() : f=>f
  )
);

ReactDom.render(
  (
    <Provider store={store}>
      <App1 />,
    </Provider>
  ),
  document.getElementById('root')
);



//render();

//store.subscribe(render);