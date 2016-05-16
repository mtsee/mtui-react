import React from 'react'
import {Input, validate} from '../../../MTUI/index'

// 类
const ValidateDom = React.createClass({
  handleSubmit(e){
    //获取焦点，再失去焦点
    $(this.refs.formbox).find("input").trigger('focus').trigger('blur');
  },
  render() {
    var v1 = {data : {}};
    v1.data[validate.notempty] = '不能为空！';
    v1.data[validate.email] = '请输入正确的邮箱！';

    var v2 = {data : {}};
    v2.data[validate.notempty] = '不能为空！';
    v2.data[validate.mobile] = '请输入正确的手机号码！';

    return (
        <div className="mt-page-content">
          <h3 className="mt-padding">表单验证：</h3>
          <div className="mt-g">
            <div className="mt-g-12">
              
              <div ref="formbox">
                
                <Input type="text" placeholder="邮箱" validate={v1}/>

                <br/><br/>

                <Input type="text" placeholder="电话" validate={v2}/>

                <br/><br/>

                <a className="mt-btn-green" onClick={this.handleSubmit}>提交</a>

              </div>

              <br/><br/>
              <div id="code-Validate"></div>

            </div> 
          </div>
        </div>
    );
  }
});
//帮助中心
export default ValidateDom;