/**
* 分页插件
* @author : Mantou
* @date : 2016-03-01
*/
import React from 'react'
import {Selected} from './index'

//pagelist插件
var liWid = 40;
var speed = 300; 
var eachPageCount = null;
var nowpage = null;
var showPage = null;
const PageList = React.createClass({
	getInitialState() {
		eachPageCount = (this.props.eachPageCount==undefined?10:this.props.eachPageCount);//初始化每页多少条
		nowpage = (this.props.nowpage==undefined?1:this.props.nowpage);//初始化默认加载第几页
		showPage = (this.props.showPage==undefined?5:this.props.showPage);//初始化默认加载第几页
	    return {
	        pages : null, // li page列表
            pagecount: 0,//共有多少页
            inputVal : nowpage//
	    };
	},

	//执行回调函数
	callback(){
		if(this.props.callback){
			this.props.callback(nowpage,eachPageCount);
		}else{
			console.log("pagelist必须设置回调函数！");
		}
	},

	//页面跳转
	gotoPage(this_nowpage){
		console.log(this_nowpage);
		this.iniLiDom(this_nowpage, this.props.count , eachPageCount);
		this.runTo(this_nowpage);
		this.callback();
	},

	//可控组件
	handleChangeVal(e){
		var val = e.target.value;
		if(/^[0-9]*$/.test(val) && val <= this.state.pagecount){ 
			this.setState({
				inputVal : val
			})
		}
	},

	//跳转
	handleClickGoto(e){ 
		if(this.state.inputVal != ""){
			this.gotoPage(this.state.inputVal);
		}
	},

	//点击页码
	handleClickPage(e){
		this.gotoPage(e.target.text);
	},

	//跳转到首页
	handleClickToFirst(e){
		this.gotoPage(1);
	},

	//跳转到尾页
	handleClickToLast(e){
		this.gotoPage(this.state.pagecount);
	},

	//上一页
	handleClickPrev(e){
		//console.log(this.state.nowpage);
		if(nowpage > 1){
			this.gotoPage(parseInt(nowpage) - 1);
		}
	},

	//下一页
	handleClickNext(e){
		//console.log(this.state.nowpage); 
		if(nowpage < this.state.pagecount){
			this.gotoPage(parseInt(nowpage) + 1);
		}
	},

	//获取当前中点的num数
	getCenterNum(this_showPage){
		
		// //如果showPage是奇数
		if(this_showPage%2 == 1){
			//计算每次移动的偏移量
			var num = parseInt((parseInt(this_showPage)+1)/2); 
		}else{
			var num = parseInt(this_showPage)/2;
		}

		return parseInt(num);
	},

	//下一段
	handleClickNextDuan(e){
		var $ul = $(this.refs.pagesUl);
		if($ul.is(':animated'))return;
        var pix = -parseInt($ul.position().left/liWid);//偏移量
        var num = this.getCenterNum(showPage);
        this.runTo(pix+parseInt(showPage)+num); 
	},

	//上一段
	handleClickPrevDuan(e){
		var $ul = $(this.refs.pagesUl);
		if($ul.is(':animated'))return;
        var pix = -parseInt($ul.position().left/liWid);//偏移量
        var num = this.getCenterNum(showPage);
        //console.log(num);
        if(showPage%2==0){
        	this.runTo(pix-num); 
        }else{
        	this.runTo(pix-num+1); 
        }
	},

	//重新渲染li标签
	iniLiDom(this_nowpage, count){
		var pagecount = Math.ceil(count/eachPageCount);//计算有多少页
		var arr = [];

		//渲染数据
		for(var i=0; i < pagecount; i++){
			if(this_nowpage == (i+1)){
				arr.push(<li className="on" key={i}><a className="ink-reaction" href="javascript:;">{i+1}</a></li>);
			}else{
				arr.push(<li onClick={this.handleClickPage} key={i}><a className="ink-reaction" href="javascript:;">{i+1}</a></li>);
			}
		} 

		//设置pagecount,pages
		this.setState({
			pagecount : pagecount,
			pages : arr
		});

		nowpage = this_nowpage;

	},

	//滚动动画
	runTo(this_nowpage){
		var $ul = $(this.refs.pagesUl);
		var {pagecount} = this.state;
		var num = this.getCenterNum(showPage);
		var pix = -parseInt($ul.position().left/liWid);//偏移量,当前偏移多少个

		if(pagecount <= showPage) return; 
        //如果点击的是中点，保持
        if(this_nowpage == pix+num){
            return
        }else if(this_nowpage > pix+num){
            //console.log("nowpage >　pix+num"); 
            if(this_nowpage >= pagecount-num){
                pix = pagecount-showPage;
            }else{
                pix = this_nowpage - num;
            }
        }else{
            //console.log("nowpage <　pix+num"); 
            if(this_nowpage <= num){
                pix = 0;
            }else{
                pix = this_nowpage - num;
            }
        }
        $ul.stop();
        $ul.css({
            transform: 'translateX('+-pix*liWid+'px)' //
        });
	},

	//每次渲染后执行
	componentWillReceiveProps(nextProps){
	 	//返回true 执行动画，如果count没变，不用重新渲染pages
		if(nextProps.count != this.props.count){
			this.iniLiDom(nowpage, nextProps.count , this.props.eachPageCount);
		}
	},

	//第一次渲染后执行
	componentDidMount() {
	    this.callback();
	},

	//渲染数据
	render(){

		var selectProp = {
	        width : '90px',
	        value : eachPageCount,
	        data : [
		        {value: 10, label: '10条/页'},
		        {value: 20, label: '20条/页'},
		        {value: 50, label: '50条/页'}
	        ], 
	        onChange: function(value,label) {
		        //console.log('当前值为：', value);
		        eachPageCount = value;
		        this.gotoPage(1);
	        }.bind(this)
	     }

		if(this.props.count == 0){
			return <div className="mt-pagelist"></div>
		}else{
			return (
				<div className="mt-pagelist" id={this.props.id==undefined?'':this.props.id}>
					<div className="mt-pagelist-left">
						<span style={{display:this.props.selectShow?'inline-block':'none'}}><Selected {...selectProp}/>&nbsp;</span>
		                <span style={{display:this.props.totalShow?'inline-block':'none'}}>共 {this.state.pagecount} 页 / {this.props.count} 条</span>
		            </div>
		            <div className="mt-pagelist-right">
		                <a style={{display:this.props.firstAndEndShow?'inline-block':'none'}} href="javascript:;" onClick={this.handleClickToFirst} className="mt-btn-grey ink-reaction mt-pagelist-first">首页</a>&nbsp;
		                <a style={{display:this.props.nextAndPrevShow?'inline-block':'none'}} href="javascript:;" onClick={this.handleClickPrev} className="mt-btn-grey ink-reaction mt-pagelist-prev">上一页</a> &nbsp;
		                {showPage<this.state.pagecount?<a href="javascript:;" onClick={this.handleClickPrevDuan} className="mt-btn-grey ink-reaction mt-pagelist-btn mt-pagelist-runprev"><i className="iconfont icon-left"></i></a>:""}&nbsp;
		                <div className="mt-pagelist-content" style={{maxWidth:40*showPage}}>
		                    <ul ref="pagesUl" style={{width:this.state.pagecount*40,transform:'translateX(0)'}} className="mt-pagelist-page">{this.state.pages}</ul>
		                </div>&nbsp;
		                {showPage<this.state.pagecount?<a href="javascript:;" onClick={this.handleClickNextDuan} className="mt-btn-grey ink-reaction mt-pagelist-btn mt-pagelist-runnext"><i className="iconfont icon-right"></i></a>:""}&nbsp;
		                <a style={{display:this.props.nextAndPrevShow?'inline-block':'none'}} href="javascript:;" onClick={this.handleClickNext} className="mt-btn-grey ink-reaction mt-pagelist-next">下一页</a>&nbsp;
		                <a style={{display:this.props.firstAndEndShow?'inline-block':'none'}} href="javascript:;" onClick={this.handleClickToLast} className="mt-btn-grey ink-reaction mt-pagelist-end">尾页</a> 
		                <span style={{display:this.props.jumpShow?'inline-block':'none'}} className="mt-pagelist-input">
		                    第<input className="mt-input" value={this.state.inputVal} onChange={this.handleChangeVal} type="text"/>页
		                </span>
		                <a style={{display:this.props.jumpShow?'inline-block':'none'}} href="javascript:;" onClick={this.handleClickGoto} className="mt-btn-grey ink-reaction mt-pagelist-btn">跳转</a>
		            </div>
	            </div> 
			);
		}
	}
});

PageList.defaultProps = {
	jumpShow:true,
	nextAndPrevShow:true,
	firstAndEndShow:true,
	totalShow:true,
	selectShow:true
}

//配置信息
export default PageList;