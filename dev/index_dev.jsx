'use strict';
import './style.scss';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; // 中间键，diapatch异步实现
import { browserHistory} from 'react-router'; //  路由
import { syncHistoryWithStore } from 'react-router-redux'; // 路由使用redux管理

// redux 调试工具
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
const DevTools = createDevTools(
  // redux在线调试工具的快捷键控制 toggleVisibilityKey：是否显示 changePositionKey：显示位置
  <DockMonitor defaultIsVisible={false} toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} bottom="0" />
  </DockMonitor>
);

//  /路由
import Routers from './Routers';

// 获取合并后的 reducer
import rootReducer from './reducers/index';

// 注册store
const store = createStore(
  rootReducer, 
  DevTools.instrument(), // 注册调试工具
  applyMiddleware(thunk)
);

// 保持历史同步
const history = syncHistoryWithStore(browserHistory, store);

// 路由
render(
	<Provider store={store}>
	  <div>
	      <Routers history={history} />
	      <DevTools />
    </div>
	</Provider>, 
  document.getElementById('App')
);