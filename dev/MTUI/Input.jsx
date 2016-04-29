/**
* 自定义内容的弹窗插件
* @author : Mantou
* @date : 2016-03-01
*/
import React from 'react'
import { render } from 'react-dom'

//onChange , onFocus, onBlur
const Input = React.createClass({
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
       align:false
     };
    },
    handleClick(e){
        this.props.onClick(e);
    }, 
    handleFocus(e){
        this.props.onFocus(e);
    }, 
    handleBlur(e){
        this.props.onBlur(e);
    }, 
    handleChange(e){
        this.props.onChange(e);
    }, 
    render() {
        var props = {};
        props['type'] = this.props.type;
        if(this.props.onClick){
            props['onClick'] = this.props.onClick;
        }
        if(this.props.onChange){
            props['onChange'] = this.props.onChange;
        }
        if(this.props.onFocus){
            props['onFocus'] = this.props.onFocus;
        }
        if(this.props.width || this.props.height){
            props['style'] = {
              width:this.props.width,
              height:this.props.height,

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

        //对齐方式
        var outDivStyle = {};
        if(this.props.align){
          outDivStyle['verticalAlign'] = this.props.align;
        }

        //如果是textarea
        if(this.props.type == 'textarea'){
          var diyName = this.props.className?(this.props.className+' '):'';
          return (
              <div style={outDivStyle} className={diyName+"mt-textarea"}>
                <textarea  {...props}/>
              </div>
          );
        }

        //如果是input 或者 password
        var diyName = this.props.className?(this.props.className+' '):'';
        var iconNamePlace = this.props.icon?(" mt-icon-input"+(this.props.iconplace=='left'?'r':'')):"";
        var blockName = this.props.block?' mt-input-block':'';
        var cName = diyName+"mt-input"+blockName+iconNamePlace;
        return (
          <div style={outDivStyle} className={cName}>
            <input {...props}/>
            {this.props.icon?<a href="javascript:;" className="mt-iconbtn"><i className={"iconfont "+this.props.icon}></i></a>:""}
          </div>
        );
    }
});

//配置信息
export default Input;