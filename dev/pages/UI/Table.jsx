'use strict';

import './style.scss';
import React, { Component } from 'react';
import { Grid, Panel, Limit } from '../../mtui/index';

class Table extends Component {
    render() {
        return (
            <table className={this.props.className}>
                        <thead>
							<tr>
								<th>id</th>
								<th>name</th>
								<th>age</th>
								<th>six</th>
								<th>date</th> 
								<th>option</th>
							</tr>
						</thead>
                        <tbody>
							<tr>
								<td>1</td>
								<td>乱"七八糟的东西"~</td>
								<td>25</td>
								<td>男</td>
								<td>1990.07.20</td>
								<td>更多</td>
							</tr>
							<tr>
								<td>2</td>
								<td><Limit size="10">乱"七八糟的东西七八糟的东西七八糟的东西七八糟的东西"~</Limit></td>
								<td>23</td>
								<td>女</td>
								<td>1991.02.22</td>
								<td>更多</td>
							</tr>
							<tr>
								<td>3</td>
								<td>饺子</td>
								<td>22</td>
								<td>男</td>
								<td>1992.12.22</td>
								<td>更多</td>
							</tr>
							<tr>
								<td>4</td>
								<td>花卷</td>
								<td>18</td>
								<td>男</td>
								<td>1992.12.22</td>
								<td>更多</td>
							</tr>
						</tbody>
                    </table>
        )
    }
}

class UI extends Component {
    // 构造函数
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Panel header="Table">
                <Grid width="1/2">
                    <Table className="mt-table" />
                </Grid>
                <Grid width="1/2">
                    <Table className="mt-table mt-table-border" />
                </Grid>
                <Grid width="1/2">
                    <Table className="mt-table mt-table-bordered" />
                </Grid>
                <Grid width="1/2">
                    <Table className="mt-table mt-table-striped" />
                </Grid>
                <Grid width="1/2">
                    <Table className="mt-table mt-table-center mt-table-striped" />
                </Grid>
                <Grid width="1/2">
                    <Table className="mt-table mt-table-hover mt-table-striped" />
                </Grid>
                <pre><code>
                    {`
'use strict';

import './style.scss';
import React, { Component } from 'react';
import { Grid, Panel, Limit } from '../../mtui/index';

class Table extends Component {
    render() {
        return (
            <table className={this.props.className}>
                        <thead>
							<tr>
								<th>id</th>
								<th>name</th>
								<th>age</th>
								<th>six</th>
								<th>date</th> 
								<th>option</th>
							</tr>
						</thead>
                        <tbody>
							<tr>
								<td>1</td>
								<td>乱"七八糟的东西"~</td>
								<td>25</td>
								<td>男</td>
								<td>1990.07.20</td>
								<td>更多</td>
							</tr>
							<tr>
								<td>2</td>
								<td><Limit size="10">乱"七八糟的东西七八糟的东西七八糟的东西七八糟的东西"~</Limit></td>
								<td>23</td>
								<td>女</td>
								<td>1991.02.22</td>
								<td>更多</td>
							</tr>
							<tr>
								<td>3</td>
								<td>饺子</td>
								<td>22</td>
								<td>男</td>
								<td>1992.12.22</td>
								<td>更多</td>
							</tr>
							<tr>
								<td>4</td>
								<td>花卷</td>
								<td>18</td>
								<td>男</td>
								<td>1992.12.22</td>
								<td>更多</td>
							</tr>
						</tbody>
                    </table>
        )
    }
}

class UI extends Component {
    // 构造函数
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Panel header="Table">
                <Grid width="1/2">
                    <Table className="mt-table" />
                </Grid>
                <Grid width="1/2">
                    <Table className="mt-table mt-table-border" />
                </Grid>
                <Grid width="1/2">
                    <Table className="mt-table mt-table-bordered" />
                </Grid>
                <Grid width="1/2">
                    <Table className="mt-table mt-table-striped" />
                </Grid>
                <Grid width="1/2">
                    <Table className="mt-table mt-table-center mt-table-striped" />
                </Grid>
                <Grid width="1/2">
                    <Table className="mt-table mt-table-hover mt-table-striped" />
                </Grid>
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