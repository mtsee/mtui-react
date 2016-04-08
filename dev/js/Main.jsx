import './style.css';
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute,browserHistory} from 'react-router' 

//首页
import Index from './Pages/Index/Index';

//开始
import Start from './Pages/Start/Index';

//组件
import Components    from './Pages/Components/Index';
import Htmls    from './Pages/Components/Htmls';
import HtmlsBtn    from './Pages/Components/HtmlsBtn';
import HtmlsTable    from './Pages/Components/HtmlsTable';
import Forms    from './Pages/Components/Forms';
import Plus  from './Pages/Components/Plus'; 

//帮助
import Help    from './Pages/Help/Index';

//App为入口
import App from './Pages/App';

//路由
render(
	  <Router history={browserHistory}>
	    <Route path="/" component={App}>
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
	    </Route>
	  </Router>
, $("#App")[0]);