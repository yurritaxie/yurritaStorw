import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/common.scss'
import App from './App';
//引入仓库
import store from './store/index'
import { Provider } from 'react-redux';
//引入路由模式
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Provider store={store}>
    <App />
   </Provider>
  </BrowserRouter>
);


