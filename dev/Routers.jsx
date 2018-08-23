'use strict';
import React, { Component } from 'react';
import { Router, Route, IndexRoute,IndexRedirect} from 'react-router'; // 路由
import { browserHistory } from 'react-router';

//首页
import Index from './pages/Index/Index';

//帮助中心
import Help from './pages/Help/Index';
import Update from './pages/Update/Index';

//redux案例展示
import NotFound from './pages/Common/NotFound'; 
import ReduxDom from './pages/ReduxDom/ReduxDom'; 
import UI from './pages/UI/Index'; 

//UI DEMO
import InputDom from './pages/UI/Input'
import ButtonDom from './pages/UI/Button'
import SwitchDom from './pages/UI/Switch'
import SliderDom from './pages/UI/Slider'
import SliderBarDom from './pages/UI/SliderBar'
import SelectDom from './pages/UI/Select'
import RadioDom from './pages/UI/Radio'
import TimePickerDom from './pages/UI/TimePicker'
import DatePickerDom from './pages/UI/DatePicker'
import CheckboxDom from './pages/UI/Checkbox'
import GridDom from './pages/UI/Grid'
import PanelDom from './pages/UI/Panel'
import PageListDom from './pages/UI/Pagelist'
import TipDom from './pages/UI/Tip'
import ModalDom from './pages/UI/Modal'
import DropdownDom from './pages/UI/Dropdown'
import BacktopDom from './pages/UI/Backtop'
import TabsDom from './pages/UI/Tabs'
import Page404Dom from './pages/UI/Page404'

import TagDom from './pages/UI/Tag'
import PopoverDom from './pages/UI/Popover'
import LoadingDom from './pages/UI/Loading'
import ProgressDom from './pages/UI/Progress'
import TreeDom from './pages/UI/Tree'
import UploadDom from './pages/UI/Upload'
import TableDom from './pages/UI/Table'
import CollapseDom from './pages/UI/Collapse'
import PopconfirmDom from './pages/UI/Popconfirm'
import ValidateDom from './pages/UI/Validate'
import SwiperDom from './pages/UI/Swiper'
import IconsDom from './pages/UI/Icons'
import LimitDom from './pages/UI/Limit'

//App为入口
import App from './pages/App';

class Routers extends Component{
	leavePath(){
		
	}
	enterPath(){
		document.body.scrollTop = 0;
	}
    render() {
        return (
            <Router history={this.props.history}>
			    <Route onEnter={this.enterPath} onLeave={this.leavePath} path={HOME} component={App}>
			      <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"/"} component={Index} />
			      <IndexRoute onEnter={this.enterPath} onLeave={this.leavePath} component={Index} />
			      <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"ui"} component={UI}>
			          <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"input"} component={InputDom}/>
			          <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"button"} component={ButtonDom}/>
			          <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"switch"} component={SwitchDom}/>
			          <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"slider"} component={SliderDom}/>
			          <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"sliderbar"} component={SliderBarDom}/>
			          <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"select"} component={SelectDom}/>
			          <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"radio"} component={RadioDom}/>
			          <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"checkbox"} component={CheckboxDom}/>
			          <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"datepicker"} component={DatePickerDom}/>
			          <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"timepicker"} component={TimePickerDom}/>
			          <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"grid"} component={GridDom}/>
			          <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"panel"} component={PanelDom}/>
			          <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"pagelist"} component={PageListDom}/>
			          <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"tip"} component={TipDom}/>
			          <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"modal"} component={ModalDom}/>
			          <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"dropdown"} component={DropdownDom}/>
			          <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"backtop"} component={BacktopDom}/>
			          <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"tabs"} component={TabsDom}/>
			          <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"tag"} component={TagDom}/>
			          <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"popover"} component={PopoverDom}/>
			          <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"loading"} component={LoadingDom}/>
			          <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"progress"} component={ProgressDom}/>
			          <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"tree"} component={TreeDom}/>
			          <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"upload"} component={UploadDom}/>
			          <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"table"} component={TableDom}/>
			          <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"collapse"} component={CollapseDom}/>
			          <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"popconfirm"} component={PopconfirmDom}/>
			          <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"validate"} component={ValidateDom}/>
			          <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"swiper"} component={SwiperDom}/>
			          <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"icons"} component={IconsDom}/>
			          <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"limit"} component={LimitDom}/>
			          <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"404"} component={Page404Dom}/>
			          <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"redux"} component={ReduxDom}/>
			      </Route>
			      <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"help"} component={Help}/>
			      <Route onEnter={this.enterPath} onLeave={this.leavePath} path={"update"} component={Update}/>
			      <Route onEnter={this.enterPath} onLeave={this.leavePath} path="*" component={NotFound}/>
			    </Route>
		  	</Router>
        );
    }
};

export default Routers;