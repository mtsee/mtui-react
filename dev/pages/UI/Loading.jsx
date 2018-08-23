'use strict';

import './style.scss';
import React, { Component } from 'react';
import { Grid, Panel, LoadingBox, LoadingModal, Button } from '../../mtui/index';

class UI extends Component {
    // 构造函数
    constructor (props) {
        super(props);
    }

    onClickLoading(mark){
        if(mark){
            LoadingModal.show('loading');
        }else{
            LoadingModal.hide();
        }

        setTimeout( () => {
            LoadingModal.hide();
        }, 2000);
    }

    render(){
        return (
            <Panel header="Loading">

                <Grid style={{background:'rgba(0,0,0,.1)', height:100}} width="1/7">
                    <LoadingBox show={true} info='loading...' type="loading1"/>
                </Grid>
                &nbsp;
                <Grid style={{background:'rgba(0,0,0,.1)', height:100}} width="2/7">
                    <LoadingBox info='数据载入中' type="loading2"/>
                </Grid>
                &nbsp;
                <Grid style={{background:'rgba(0,0,0,.1)', height:100}} width="1/7">
                    <LoadingBox info='数据载入中' type="loading3"/>
                </Grid>
                &nbsp;
                <Grid style={{background:'rgba(0,0,0,.1)', height:100}} width="1/7">
                    <LoadingBox info='数据载入中' type="loading4"/>
                </Grid>
                &nbsp;
                <Grid style={{background:'rgba(0,0,0,.1)', height:100}} width="1/7">
                    <LoadingBox info='数据载入中' type="loading5"/>
                </Grid>

                <br/><br/>
                <Button onClick={this.onClickLoading.bind(this,true)} type="success">Loading弹出</Button>
                &nbsp;
                <Button onClick={this.onClickLoading.bind(this,false)} type="warning">Loading销毁</Button>
<div className="api">
    <p className="tips">
        <span className="apispan">API</span>
        <span className="tipspan">tips</span>
        LoadingBox: className, style 等默认属性继承DIV标签默认, LoadingModal是一个对象。下面有 show(), hide() 方法。
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
                <td>info</td>
                <td>加载提示内容，默认参数：loading...</td>
                <td>string</td>
                <td>loading...</td>
            </tr>
            <tr>
                <td>show</td>
                <td>loading显示状态</td>
                <td>bool</td>
                <td>true</td>
            </tr>
            <tr>
                <td>type</td>
                <td>loading的样式，有五种。 loading1 ~ loading5</td>
                <td>string</td>
                <td>loading3</td>
            </tr>
        </tbody>
    </table>
</div>
                <pre><code>
                {`
'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Panel,LoadingBox,LoadingModal,Button} from '../../mtui/index'

class UI extends Component {
    //构造函数
    constructor (props) {
        super(props);
    }

    onClickLoading(mark){
        if(mark){
            LoadingModal.show('loading')
        }else{
            LoadingModal.hide()
        }
    }

    render(){
        return (
            <Panel header="Loading">

                <Grid style={{background:'rgba(0,0,0,.1)', height:100}} width="1/7">
                    <LoadingBox show={true} info='loading...' type="loading1"/>
                </Grid>
                &nbsp;
                <Grid style={{background:'rgba(0,0,0,.1)', height:100}} width="2/7">
                    <LoadingBox info='数据载入中' type="loading2"/>
                </Grid>
                &nbsp;
                <Grid style={{background:'rgba(0,0,0,.1)', height:100}} width="1/7">
                    <LoadingBox info='数据载入中' type="loading3"/>
                </Grid>
                &nbsp;
                <Grid style={{background:'rgba(0,0,0,.1)', height:100}} width="1/7">
                    <LoadingBox info='数据载入中' type="loading4"/>
                </Grid>
                &nbsp;
                <Grid style={{background:'rgba(0,0,0,.1)', height:100}} width="1/7">
                    <LoadingBox info='数据载入中' type="loading5"/>
                </Grid>

                <br/><br/>
                <Button onClick={this.onClickLoading.bind(this,true)} type="success">Loading弹出</Button>
                &nbsp;
                <Button onClick={this.onClickLoading.bind(this,false)} type="warning">Loading销毁</Button>
            </Panel>    
        );
    }
}
                `}
                </code></pre>
            </Panel>    
        );
    }
}

//主页
export default UI;