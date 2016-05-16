import React from 'react'
import { RadioGroup, Radio} from '../../../MTUI/index'

// 类
const SelectDom = React.createClass({
  getInitialState: function(){
    return {
      checkedVal : '女'
    }
  },
  handleClickRadio: function(e){ //获取radio的值
    console.log($(":radio:checked").val());
  },
  handleRadioChange: function(e) { //重新选择radio后执行
    //console.log("help里面的change");
    console.log(e.target.value);
    this.setState({
      checkedVal : e.target.value
    });
  },
  componentDidMount: function() { //ajax请求数据后，重新渲染页面
     setTimeout(function(){
      //console.log("重新设置了组的选项为中性~");
      if(this.isMounted()){
        this.setState({
          checkedVal : '中性'
        });
      }
     }.bind(this),2000); 
  },
  render: function() { 

    return (
    	<div className="mt-page-content">
          <h3 className="mt-padding">radio选择：</h3>
          <div className="mt-g">
            <div className="mt-g-12">
                <RadioGroup radioChange={this.handleRadioChange} defaultValue={this.state.checkedVal}>
                  <Radio name="sex" value="男" label="男"/>
                  <Radio name="sex" value="女" label="女"/>
                  <Radio name="sex" value="中性" label="中性" disabled/> 
                  <Radio name="sex" value="无" label="无" disabled/>
                  <a href="javascript:;" onClick={this.handleClickRadio}>获取radio值</a>
                </RadioGroup>
                <br/><br/>
                <div className="codes" id="code-Radio"></div>
            </div>
          </div>
        </div>
    );
  }
});
//帮助中心
export default SelectDom;