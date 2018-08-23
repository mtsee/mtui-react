'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Panel,Collapse} from '../../mtui/index'

const CollapseItem = Collapse.CollapseItem;

class UI extends Component {
	//构造函数
	constructor (props) {
		super(props);
	}

	render(){
		return (
			<Panel header="Collapse">
				<Grid width="1/2">
					<Collapse className="collapse" only={true}>
						<CollapseItem header="我小的时候">
							我小的时候，盼望着过年。从农历的腊月二十三开始，接下来的每一天似乎都是色彩斑斓的，都散发着温馨绵厚的香味儿。村里的老婆婆坐在厚厚的蒲团上教我们唱着童谣：“二十三，祭灶官；二十四，扫房子；二十五，磨豆腐；二十六，蒸馒头；二十七，杀只鸡；二十八，贴画画；二十九，去买酒；年三十，包饺子；大初一，撅着屁股乱作揖。”这首童谣像是我们村里人的过年指南，农历二十三的时候就吃灶糖、祭灶神，二十四的时候就忙着用笤帚打扫屋子，二十五的时候就准备过年吃的豆腐，二十六的时候家家户户蒸枣花馒头、蒸萝卜缨包子……千百年来，太阳沿着亘古不变的轨迹东升西落；冬去春来，人们世世代代遵循着这样的过年流程过年。
						</CollapseItem>
						<CollapseItem show={true} header="到了农历的年末">
							到了农历的年末，城市的超市里挂满了玲珑华美的红灯笼，玻璃橱窗上也贴上了各式花样的剪纸，这些都是年的符号，也是年的名片。我内心深藏的年味儿犹如一只脆弱不堪的老酒坛被这些符号与名片猛然击碎，老酒倾泻满地，浓郁醇厚的味道漫然飘散。  
						</CollapseItem>
						<CollapseItem header="还要点我？">
							我已经编不下去了~
						</CollapseItem>
					</Collapse>
				</Grid>
<div className="api">
    <p className="tips">
        <span className="apispan">API</span>
        <span className="tipspan">tips</span>
        className, style 等默认属性继承DIV标签默认
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
                <td>Collapse: only</td>
                <td>是否每次只展示一个选项卡，点击的时候，其他关闭</td>
                <td>bool</td>
                <td>false</td>
            </tr>
            <tr>
                <td>CollapseItem: header</td>
                <td>item的标题</td>
                <td>Component</td>
                <td>''</td>
            </tr>
			<tr>
                <td>CollapseItem: show</td>
                <td>是否默认显示</td>
                <td>bool</td>
                <td>false</td>
            </tr>
        </tbody>
    </table>
</div>
				<pre><code>
				{`
'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Panel,Collapse} from '../../mtui/index'

const CollapseItem = Collapse.CollapseItem;

class UI extends Component {
	//构造函数
	constructor (props) {
		super(props);
	}

	render(){
		return (
			<Panel header="Collapse">
				<Grid width="1/2">
					<Collapse className="collapse" only={true}>
						<CollapseItem header="我小的时候">
							我小的时候，盼望着过年。从农历的腊月二十三开始，接下来的每一天似乎都是色彩斑斓的，都散发着温馨绵厚的香味儿。村里的老婆婆坐在厚厚的蒲团上教我们唱着童谣：“二十三，祭灶官；二十四，扫房子；二十五，磨豆腐；二十六，蒸馒头；二十七，杀只鸡；二十八，贴画画；二十九，去买酒；年三十，包饺子；大初一，撅着屁股乱作揖。”这首童谣像是我们村里人的过年指南，农历二十三的时候就吃灶糖、祭灶神，二十四的时候就忙着用笤帚打扫屋子，二十五的时候就准备过年吃的豆腐，二十六的时候家家户户蒸枣花馒头、蒸萝卜缨包子……千百年来，太阳沿着亘古不变的轨迹东升西落；冬去春来，人们世世代代遵循着这样的过年流程过年。
						</CollapseItem>
						<CollapseItem show={true} header="到了农历的年末">
							到了农历的年末，城市的超市里挂满了玲珑华美的红灯笼，玻璃橱窗上也贴上了各式花样的剪纸，这些都是年的符号，也是年的名片。我内心深藏的年味儿犹如一只脆弱不堪的老酒坛被这些符号与名片猛然击碎，老酒倾泻满地，浓郁醇厚的味道漫然飘散。  
						</CollapseItem>
						<CollapseItem header="还要点我？">
							我已经编不下去了~
						</CollapseItem>
					</Collapse>
				</Grid>
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