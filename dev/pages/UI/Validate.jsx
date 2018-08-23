'use strict';

import './style.scss';
import React, { Component } from 'react';
import { Grid, Panel, Validate, DatePicker, Input, Button, Select } from '../../mtui/index';

const ValidateGroup = Validate.ValidateGroup;

class UI extends Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            type: 'danger'
        }
    }

    setType(e) {
        this.setState({
            type: e.target.value
        });
    }

    onChange(e) {
        console.log('>>', e.target.value)
    }

    onEnd(data) {
        console.log("submit=>", data)
    }

    render() {
        return (
            <Panel header="Validate">
                <ValidateGroup submit={this.onEnd}>
                    <div>
                        <Validate exgs={[
                            { regs: 'notempty', type: 'warning', info: '不能为空！' },
                            { regs: 'email', type: 'danger', info: '邮箱错误！' }
                        ]}><Input onChange={this.onChange.bind(this)} placeholder="邮箱" /></Validate>
                    </div>
                    <br />
                    <div>
                        <Validate exgs={[
                            { regx: '^[2-6]+$', type: 'danger', info: '请输入2~6的数字' }
                        ]}><Input onChange={this.onChange.bind(this)} placeholder="请输入2~6的数字" /></Validate>
                    </div>
                    <br />
                    <div>
                        <Validate exgs={[{ regx: '^[1-2]+$', type: 'danger', info: '请输入1,2的数字' }]}>
                            <Select defaultValue=""
                                modalStyle={{ width: 180, height: 100 }}
                                onChange={this.onChange.bind(this)}
                                trigger="click">
                                <Option value="1" >选项1</Option>
                                <Option value="2" >选项2</Option>
                                <Option value="3" >选项3</Option>
                                <Option value="4" >选项4</Option>
                                <Option value="5" >选项5</Option>
                                <Option value="6" >选项6</Option>
                                <Option value="7" >选项7</Option>
                                <Option value="8" >选项8</Option>
                                <Option value="9" >选项9</Option>
                                <Option value="10" >选项10</Option>
                            </Select>
                        </Validate>
                    </div>
                    <br />
                    <div>
                        <Validate exgs={[
                            { regs: 'notempty', type: 'warning', info: '不能为空！' },
                            { regx: '(2017-03-)((0[1-9])|([1-2][0-9]|31))', type: 'danger', info: '只能輸入2017年3月的日期' }
                        ]}>
                            <DatePicker style={{ width: 152 }} size="xs" defaultValue="" mid="dateId2" format="yyyy-mm-dd" />
                        </Validate>
                    </div>
                    <br />
                    <br />
                    <Button style={{ width: 181 }} dom="button" htmlType="submit" type="primary" className="login-form-button">submit</Button>
                </ValidateGroup>
                <div>
                    表单验证案例
                        <br />regs 可用参数请参考 mtui/Validate/regex
                        <br />regx: 自定义验证规则
                    </div>
                <br />
                <br />
                <br />
                <Validate type={this.state.type}>
                    <Input style={{ width: 200 }} onChange={this.setType.bind(this)} defaultValue="" placeholder="danger/success/warning" />
                </Validate>
<div className="api">
    <p className="tips">
        <span className="apispan">API</span>
        <span className="tipspan">tips</span>
        className, style 继承原来的标签默认
    </p>
    <table className="mt-table mt-table-hover mt-table-striped mt-table-bordered">
        <thead>
            <tr>
                <th>属性</th>
                <th>说明</th>
                <th>类型</th>
                <th>默认值</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>exgs</td>
                <td>验证规则参数<br/>
                    固定规则： {`[{regs:'notempty',type:'warning',info:'不能为空！'}]`} <br/>
                    自定义规则： {`{regx:'^[2-6]+$',type:'danger',info:'请输入2~6的数字'}`} <br/>
                    regs: 固定的参数<br/>
                    regx: 自定义正则规则<br/>
                    type: danger, warning, success. <br/>
                    info: 出错提示 <br/>
                    regs: 
<div className="max-pre-code">
 <pre><code>
{
`
decmal: "^([+-]?)\\d*\\.\\d+$",// 浮点数
decmal1: "^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*$",// 正浮点数
decmal2: "^-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*)$",// 负浮点数
decmal3: "^-?([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0)$",// 浮点数
decmal4: "^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0$",// 非负浮点数（正浮点数 + 0）
decmal5: "^(-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*))|0?.0+|0$",// 非正浮点数（负浮点数 +0
intege: "^-?[1-9]\\d*$",// 整数
intege1: "^[1-9]\\d*$", // 正整数
intege2: "^-[1-9]\\d*$",// 负整数
num: "^([+-]?)\\d*\\.?\\d+$",// 数字
num1: "^[1-9]\\d*|0$",// 正数（正整数 + 0）
num2: "^-[1-9]\\d*|0$",// 负数（负整数 + 0）
ascii: "^[\\x00-\\xFF]+$",// 仅ACSII字符
chinese: "^[\\u4e00-\\u9fa5]+$",// 仅中文
color: "^[a-fA-F0-9]{6}$",// 颜色
date: "^\\d{4}(\\-|\\/|\.)\\d{1,2}\\1\\d{1,2}$",// 日期
email: "^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$",// 邮件
idcard: "^[1-9]([0-9]{14}|[0-9]{17})$",// 身份证
ip4: "^(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)$",// ip地址
letter: "^[A-Za-z]+$",// 字母
letter_l: "^[a-z]+$",// 小写字母
letter_u: "^[A-Z]+$",// 大写字母
mobile: "^0?(13|15|18|14|17)[0-9]{9}$",// 手机
notempty: "^\\S",// 非空
password: "^.*[A-Za-z0-9\\w_-]+.*$",// 密码
fullNumber: "^[0-9]+$",// 数字
picture: "(.*)\\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$",// 图片
qq: "^[1-9]*[1-9][0-9]*$",// QQ号码
rar: "(.*)\\.(rar|zip|7zip|tgz)$",// 压缩文件
tel: "^[0-9\-()（）]{7,18}$",// 电话号码的函数(包括验证国内区号,国际区号,分机号)
url: "^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&=]*)?$",// url
username: "^[A-Za-z0-9_\\-\\u4e00-\\u9fa5]+$",// 户名
deptname: "^[A-Za-z0-9_()（）\\-\\u4e00-\\u9fa5]+$",// 单位名
zipcode: "^\\d{6}$",// 邮编
realname: "^[A-Za-z\\u4e00-\\u9fa5]+$",// 真实姓名
companyname: "^[A-Za-z0-9_()（）\\-\\u4e00-\\u9fa5]+$",
companyaddr: "^[A-Za-z0-9_()（）\\#\\-\\u4e00-\\u9fa5]+$",
companysite: "^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&#=]*)?$"
`
}
 </code></pre>
</div>
                </td>
                <td>array</td>
                <td>null</td>
            </tr>
            <tr>
                <td>type</td>
                <td>提示样式 success,warning,danger</td>
                <td>string</td>
                <td>null</td>
            </tr>
        </tbody>
    </table>
</div>
                <pre><code>
                    {`
'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Panel,Validate,DatePicker,Input,Button,Select} from '../../mtui/index'

const ValidateGroup = Validate.ValidateGroup;

class UI extends Component {
    //构造函数
    constructor (props) {
        super(props);
        this.state = {
            type: 'danger'
        }
    }

    setType(e){
        this.setState({
            type: e.target.value
        });
    }

    onChange(e){
        console.log('>>',e.target.value)
    }

    onEnd(data){
        console.log("submit=>",data)
    }

    render(){
        return (
            <Panel header="Validate">
                <ValidateGroup submit={this.onEnd}>
                    <div>
                        <Validate exgs={[
                            {regs:'notempty',type:'warning',info:'不能为空！'},
                            {regs:'email',type:'danger',info:'邮箱错误！'}
                        ]}><Input onChange={this.onChange.bind(this)} placeholder="邮箱"/></Validate>
                    </div>
                    <br/>
                    <div>
                        <Validate exgs={[
                            {regx:'^[2-6]+$',type:'danger',info:'请输入2~6的数字'}
                        ]}><Input onChange={this.onChange.bind(this)} placeholder="请输入2~6的数字"/></Validate>
                    </div>
                    <br/>
                    <div>
                        <Validate exgs={[{regx:'^[1-2]+$',type:'danger',info:'请输入1,2的数字'} ]}>
                            <Select defaultValue=""
                                    modalStyle={{width:180, height:100}} 
                                    onChange={this.onChange.bind(this)} 
                                    trigger="click">
                                <Option value="1" >选项1</Option>
                                <Option value="2" >选项2</Option>
                                <Option value="3" >选项3</Option>
                                <Option value="4" >选项4</Option>
                                <Option value="5" >选项5</Option>
                                <Option value="6" >选项6</Option>
                                <Option value="7" >选项7</Option>
                                <Option value="8" >选项8</Option>
                                <Option value="9" >选项9</Option>
                                <Option value="10" >选项10</Option>
                            </Select>
                        </Validate>
                    </div>
                    <br/>
                    <div>
                        <Validate exgs={[
                            {regs:'notempty',type:'warning',info:'不能为空！'},
                            {regx:'(2017-03-)((0[1-9])|([1-2][0-9]|31))',type:'danger',info:'只能輸入2017年3月的日期'}
                        ]}>
                            <DatePicker style={{width:152}} size="xs" defaultValue="" mid="dateId2" format="yyyy-mm-dd"/>
                        </Validate>
                    </div>
                    <br/>
                    <br/>
                    <Button style={{width:181}} dom="button" htmlType="submit" type="primary" className="login-form-button">submit</Button>
                </ValidateGroup>
                <div>
                        表单验证案例
                        <br/>regs 可用参数请参考 mtui/Validate/regex   
                        <br/>regx: 自定义验证规则
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <Validate type={this.state.type}>
                        <Input onChange={this.setType.bind(this)} defaultValue="" placeholder="danger/success/warning"/>
                    </Validate>
            </Panel>	
        );
    }
}

//主页
export default UI;
                `}
                </code></pre>
            </Panel>
        );
    }
}

//主页
export default UI;