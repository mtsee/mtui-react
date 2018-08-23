import './style.scss' 
import React, { Component } from 'react';
import { Link } from 'react-router' 
import { connect} from 'react-redux'
import { setUserInfo } from '../../actions/user'
import {Grid,Panel} from '../../mtui/index'

class ReduxDom extends Component {

  //构造函数
  constructor(props) {
    super(props);
    this.state = {
      value:'good'
    };
  }

  //点击
  handleClickRead(){
    this.props.setUserInfo({
      tips : 0
    });
  }

  //点击
  handleClickAdd(){
    var tips = this.props.tips;
    tips++;
    this.props.setUserInfo({
      tips : tips
    });
  }

  //渲染
  render() {
    return (
        <Panel className="reduxdom" header="Redux Dom">
          <div className="tipsbox">
          当前有 <em>{this.props.tips}</em> 条未读通知 
          &nbsp; <a href="javascript:;" className="mt-btn-green" onClick={this.handleClickRead.bind(this)}>清零</a>
          &nbsp; <a href="javascript:;" className="mt-btn-yellow" onClick={this.handleClickAdd.bind(this)}>添加一条</a>
<pre>
<code>
{`
import './style.scss' 
import React, { Component } from 'react';
import { Link } from 'react-router' 
import { connect} from 'react-redux'
import { setUserInfo } from '../../actions/user'
import {Grid,Panel} from '../../mtui/index'

class ReduxDom extends Component {

  //构造函数
  constructor(props) {
    super(props);
    this.state = {
      value:'good'
    };
  }

  //点击
  handleClickRead(){
    this.props.setUserInfo({
      tips : 0
    });
  }

  //点击
  handleClickAdd(){
    var tips = this.props.tips;
    tips++;
    this.props.setUserInfo({
      tips : tips
    });
  }

  //渲染
  render() {
    return (
        <Panel className="reduxdom" header="Redux Dom">
          <div className="tipsbox">
          当前有 <em>{this.props.tips}</em> 条未读通知 
          &nbsp; <a href="javascript:;" className="mt-btn-green" onClick={this.handleClickRead.bind(this)}>清零</a>
          &nbsp; <a href="javascript:;" className="mt-btn-yellow" onClick={this.handleClickAdd.bind(this)}>添加一条</a>
          <Link to={HOME+"/index"}>首页</Link>
          </div>
        </Panel>
      );
  }
}

//植入redux数据
export default connect(
  state => ({ 
    tips: state.user.tips
  }),
  {setUserInfo}
)(ReduxDom)
`}
</code>
</pre>
          </div>
        </Panel>
      );
  }
}

//植入redux数据
export default connect(
  state => ({ 
    tips: state.user.tips
  }),
  {setUserInfo}
)(ReduxDom)