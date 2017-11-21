import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Login from './containers/Login';
import store from './store';
import '../scss/styles.scss';

const mount = document.getElementById('mount');
const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Login/>
    </Provider>,
    mount
  );
}

render();
store.subscribe(render);
