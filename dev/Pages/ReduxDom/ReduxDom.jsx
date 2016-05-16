import './style.css' 
import React from 'react'
import { connect} from 'react-redux'
import setMinHeight from '../../Mixins/setMinHeight'
import { setUserInfo } from '../../actions/user'

const ReduxDom = React.createClass({
  mixins:[setMinHeight],

  //点击
  handleClickRead(e){
    this.props.setUserInfo({
      tips : 0
    });
  },

  //点击
  handleClickAdd(e){
    var tips = this.props.tips;
    tips++;
    this.props.setUserInfo({
      tips : tips
    });
  },

  //渲染
  render() {
    var html = 'var a=124;'
    return (
          <div className="start" style={{ minHeight: this.state.height+"px"}}>
            <div className="contents reduxdom">
              <h1>Redux Dom</h1>
              <div className="tipsbox">
              当前有 <em>{this.props.tips}</em> 条未读通知 
              &nbsp; <a href="javascript:;" className="mt-btn-green" onClick={this.handleClickRead}>清零</a>
              &nbsp; <a href="javascript:;" className="mt-btn-yellow" onClick={this.handleClickAdd}>添加一条</a>
              </div>
            </div>
          </div>
      );
  }
});
//植入redux数据
export default connect(
  state => ({ 
    tips: state.user.tips
  }),
  {setUserInfo}
)(ReduxDom)