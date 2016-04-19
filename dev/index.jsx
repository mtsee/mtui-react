import './style.css';
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk' //中间键，diapatch异步实现
import { Router, Route, IndexRoute,browserHistory} from 'react-router' // 路由
import { syncHistoryWithStore } from 'react-router-redux' //路由使用redux管理

//redux 调试工具
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
const DevTools = createDevTools(
  //redux在线调试工具的快捷键控制 toggleVisibilityKey：是否显示 changePositionKey：显示位置
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
) 

//首页
import Index from './Pages/Index/Index';

//开始
import Start from './Pages/Start/Index';

//redux案例展示
import ReduxDom   from './Pages/ReduxDom/ReduxDom'; 

//组件
import Components from './Pages/Components/Index';
import Htmls      from './Pages/Components/Htmls';
import HtmlsBtn   from './Pages/Components/HtmlsBtn';
import HtmlsTable from './Pages/Components/HtmlsTable';
import Forms      from './Pages/Components/Forms';
import Plus       from './Pages/Components/Plus'; 

//帮助
import Help from './Pages/Help/Index';

//App为入口
import App from './Pages/App';

//获取合并后的 reducer
import rootReducer from './reducers/index'

//注册store
const store = createStore(
  rootReducer, 
  DevTools.instrument(), //注册调试工具
  applyMiddleware(thunk)
)

//保持历史同步
const history = syncHistoryWithStore(browserHistory, store)

//路由
render(
	<Provider store={store}>
	  <div>
	  <Router history={history}>
	    <Route path={HOME_PATH+"/"} component={App}>
	      <IndexRoute component={Index} />
	      <Route path="index" component={Index}/>
	      <Route path="start" component={Start}/>
	      <Route path="components" component={Components}>
	        <Route path="htmls" component={Htmls}>
	        	<Route path="btn" component={HtmlsBtn}/>
	        	<Route path="table" component={HtmlsTable}/>
	        </Route>
	        <Route path="forms" component={Forms}/>
	        <Route path="plus" component={Plus}/>
	      </Route>
	      <Route path="help" component={Help}/> 
	      <Route path="reduxdom" component={ReduxDom}/>
	    </Route>
	  </Router>
	  {/* <DevTools />调试工具*/}<DevTools />
      </div>
	</Provider>
, document.getElementById('App')
);