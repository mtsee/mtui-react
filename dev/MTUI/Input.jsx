/**
* 自定义内容的弹窗插件
* @author : Mantou
* @date : 2016-03-01
*/
import React from 'react'
import { render } from 'react-dom'

//onChange , onFocus, onBlur
const Input = React.createClass({
    getInitialState() {
        return {
            showValidate : false,
            validateInfo : ''
        };
    },
    getDefaultProps() {
     return {
       type: "text",
       onClick: false,
       onChange: false,
       onFocus: false,
       onBlur: false,
       width:false,
       height:false,
       placeholder:false,
       value:false,
       defaultValue:false,
       block:false,
       round:false,
       icon:false,
       iconplace:false,
       className:false,
       id:false,
       disabled:false,
       align:false,
       validate:false
     };
    },
    handleFocus(e){ //获取焦点
        this.setState({
          showValidate : false
        })
    }, 
    handleBlur(e){ //失去焦点
        var exg = this.props.validate.data;
        //遍历数组
        for(var key in exg){
          if(!RegExp(key).test(e.target.value)){
            this.setState({
              validateInfo : exg[key],
              showValidate : true
            })
            return;
          }
        }
    }, 
    render() {
        var props = {};
        props['type'] = this.props.type;

        //事件处理
        if(this.props.onClick){
            props['onClick'] = this.props.onClick;
        }
        if(this.props.onChange){
            props['onChange'] = this.props.onChange;
        }
        if(this.props.onFocus){
            props['onFocus'] = this.props.onFocus;
        }
        if(this.props.onBlur){
            props['onBlur'] = this.props.onBlur;
        }

        //参数处理
        if(this.props.width || this.props.height){
            props['style'] = {
              width:this.props.width,
              height:this.props.height
            };
        }
        if(this.props.placeholder){
            props['placeholder'] = this.props.placeholder;
        }
        if(this.props.value){
            props['value'] = this.props.value;
        }
        if(this.props.defaultValue){
            props['defaultValue'] = this.props.defaultValue;
        }
        if(this.props.id){
            props['id'] = this.props.id;
        }
        if(this.props.round){
            props['className'] = 'mt-round';
        }
        if(this.props.disabled){
            props['disabled']='disabled';
        }

        //验证
        if(this.props.validate){
          props['onFocus'] = this.handleFocus;
          props['onBlur'] = this.handleBlur;
        }

        //验证DOM
        var validateDom = <div className="mt-validate-error animated fadeInRight">{this.state.validateInfo}</div>;

        //对齐方式
        var outDivStyle = {};
        if(this.props.align){
          outDivStyle['verticalAlign'] = this.props.align;
        }

        //如果是textarea
        if(this.props.type == 'textarea'){
          var diyName = this.props.className?(this.props.className+' '):'';
          return (
              <div style={outDivStyle} className={diyName+"mt-textarea"+(this.state.showValidate?' mt-input-error':'')}>
                <textarea  {...props}/>
                {this.state.showValidate?validateDom:""}
              </div>
          );
        }

        //如果是input 或者 password
        var diyName = this.props.className?(this.props.className+' '):'';
        var iconNamePlace = this.props.icon?(" mt-icon-input"+(this.props.iconplace=='left'?'r':'')):"";
        var blockName = this.props.block?' mt-input-block':'';
        var cName = diyName+"mt-input"+blockName+iconNamePlace;
        return (
          <div style={outDivStyle} className={cName+(this.state.showValidate?' mt-input-error':'')}>
            <input {...props}/>
            {this.props.icon?<a href="javascript:;" className="mt-iconbtn"><i className={"iconfont "+this.props.icon}></i></a>:""}
            {this.state.showValidate?validateDom:""}
          </div>
        );
    }
});

//配置信息
export default Input;