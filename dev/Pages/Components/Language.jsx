import './style.css';
import React from 'react'
import conf from '../Conf/Conf' 
import {Link} from 'react-router' 
import {Language, languageData , setLanguage, langProvider} from '../../MTUI/language/Language' 

const Icons = React.createClass({
  componentWillMount() {
    langProvider('en_US');
  },
  changeLanguage(str,e){
  	setLanguage(str)
  },
  render() {
  	if(this.props.children){
  		return (
	    	<div className={conf.pageAnimate+" contents"}>
	    		{this.props.children}
	    	</div>
	    );
  	}else{
  		return (
	    	<div className={conf.pageAnimate+" contents"}>
	    		<h1>国际化解决方案</h1>
	    		<div className="mt-page-content">
			    	<h3 className="mt-padding">国际化支持多语言</h3>
			    	<div className="mt-g">
			    		<div className="mt-g-12">
			    			<a href="javascript:;" onClick={this.changeLanguage.bind(this,'en_US')}>EN</a> /  
			    			<a href="javascript:;" onClick={this.changeLanguage.bind(this,'zh_CN')}> 中文</a> <br/><br/><br/><br/>

		    				<div title={languageData({
					    					id:'name',
					    					tips:'我的名字叫：{name}，年龄：{age}',
					    					value:{
					    						name:"馒头",
					    						age:26
					    					}
		    							}) }>
		    					<Language id="name" tips="我的名字叫：{name}，年龄：{age} ok~" value={{name:"馒头",age:26}}/>
		    				</div>

			    		</div>
			    		<div className="mt-g-12">
			    		Language 国际化组件位子：MTUI/language<br/><br/>
			    		对外暴露4个方法：Language, languageData , langProvider , setLanguage<br/><br/><br/>
			    		langProvider：需要做国际化处理的模块 eg: 
			    		<p>{"import {LangProvider} from './MTUI/language/Language';"}</p>
			    		<p>{"langProvider('zh_CN')"}</p>
			    		<p>在模块最初始位子调用一次即可，设置默认语言</p><br/><br/>

			    		Language：翻译标签 id:对应 MTUI/language/zh_CN.jsx（MTUI/language/en_US.jsx） 里面的键值；tips：备注说明；value：动态的值
			    		<p>{"import {Language} from './MTUI/language/Language';"}</p>
			    		<p>{'<Language id="name" tips="我的名字叫：{name}，年龄：{age}" value={name:"馒头",age:26}/>'}</p>
			    		<p>{"设置了value后可在对应的翻译文件里面使用{xx}来填写变量"}</p><br/><br/>

			    		languageData：js代码里面用到的翻译标签 id:对应 MTUI/language/zh_CN.jsx（MTUI/language/en_US.jsx） 里面的键值；tips：备注说明；value：动态的值
			    		<p>{"import {LanguageData} from './MTUI/language/Language';"}</p>
			    		<p>{"LanguageData：js代码里面用到的翻译标签({id:'indexSearchInfo',tips:'请输入要查询的公司名称',value:{name:'馒头',age:26}})"}</p>
			    		<p>{"设置了value后可在对应的翻译文件里面使用{xx}来填写变量"}</p><br/><br/>

			    		setLanguage：重置页面语言 str：'en_US' or 'zh_CN'
			    		<p>{"import {setLanguage} from './MTUI/language/Language';"}</p>
			    		<p>{"在点击按钮之后，交互切换语言"}</p>
			    		</div>
			    	</div>
			    </div>
	    	</div>
	    );
  	}
  }
});
//联系信息
module.exports = Icons;