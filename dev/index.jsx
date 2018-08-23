'use strict';
import './style.scss';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; // 中间键，diapatch异步实现
import { browserHistory} from 'react-router'; // 路由
import { syncHistoryWithStore } from 'react-router-redux'; // 路由使用redux管理

import Routers from './Routers';

// 获取合并后的 reducer
import rootReducer from './reducers/index';

// 注册store
const store = createStore(
  rootReducer, 
  applyMiddleware(thunk)
);

// 保持历史同步
const history = syncHistoryWithStore(browserHistory, store);

// 路由
render(
    <Provider store={store}>
      <Routers history={history}/>
    </Provider>, 
    document.getElementById('App')
);