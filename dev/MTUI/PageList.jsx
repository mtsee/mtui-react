/**
* 分页插件
* @author : Mantou
* @date : 2016-03-01
*/
import React from 'react'
import {Selected} from './index'

//pagelist插件
var selectProp = null;
var liWid = 40;
var speed = 300; 

const PageList = React.createClass({
	getInitialState() {
	    return {
	        pages : null, // li page列表
	        nowpage : 1, //当前第几页 
            count : this.props.count, //总共多少条数据
            eachPageCount : this.props.eachPageCount, //每页多少条
            pagecount: 0,//共有多少页
            showPage : this.props.showPage , //最多显示几个页码
            inputVal : 1
	    };
	},

	//执行回调函数
	callback(){
		if(this.props.callback){
			this.props.callback(this.state.nowpage,this.state.eachPageCount);
		}else{
			console.log("pagelist必须设置回调函数！");
		}
	},

	//页面跳转
	gotoPage(nowpage){
		var {count , eachPageCount} = this.state;
		this.iniLiDom(nowpage, count , eachPageCount);
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
		//console.log(this.state.inputVal);
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
		var nowpage = this.state.nowpage;
		if(nowpage > 1){
			this.gotoPage(parseInt(nowpage) - 1);
		}
	},

	//下一页
	handleClickNext(e){
		//console.log(this.state.nowpage); 
		var nowpage = this.state.nowpage;
		if(nowpage < this.state.pagecount){
			this.gotoPage(parseInt(nowpage) + 1);
		}
	},

	//获取当前中点的num数
	getCenterNum(showPage){
		
		// //如果showPage是奇数
		if(showPage%2 == 1){
			//计算每次移动的偏移量
			var num = parseInt((parseInt(showPage)+1)/2); 
		}else{
			var num = parseInt(showPage)/2;
		}

		return parseInt(num);
	},

	//下一段
	handleClickNextDuan(e){
		var $ul = $(this.refs.pagesUl);
		if($ul.is(':animated'))return;

		var {showPage} = this.state;
        var pix = -parseInt($ul.position().left/liWid);//偏移量
        var num = this.getCenterNum(showPage);
        this.runTo(pix+parseInt(showPage)+num); 
	},

	//上一段
	handleClickPrevDuan(e){
		var $ul = $(this.refs.pagesUl);
		if($ul.is(':animated'))return;

		var {showPage} = this.state;
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
	iniLiDom(nowpage, count , eachPageCount){
		var pagecount = Math.ceil(count/eachPageCount);//计算有多少页
		var arr = [];

		//渲染数据
		for(var i=0; i < pagecount; i++){
			if(nowpage == (i+1)){
				arr.push(<li className="on" key={i}><a className="ink-reaction" href="javascript:;">{i+1}</a></li>);
			}else{
				arr.push(<li onClick={this.handleClickPage} key={i}><a className="ink-reaction" href="javascript:;">{i+1}</a></li>);
			}
		} 

		//设置pagecount,pages
		this.setState({
			pagecount : pagecount,
			pages : arr,
			eachPageCount: eachPageCount,
			nowpage : nowpage
		});

	},
	
	//页面渲染之前执行
	componentWillMount() {
		var {count , eachPageCount} = this.state;

		//下拉选择
	    selectProp = {
	        width : '90px',
	        value : this.state.eachPageCount,
	        data : [
		        {value: 10, label: '10条/页'},
		        {value: 20, label: '20条/页'},
		        {value: 50, label: '50条/页'}
	        ], 
	        onChange: function(value,label) {
		        //console.log('当前值为：', value);
		        $(this.refs.pagesUl).css({left : 0 });
		        this.iniLiDom(1, count , value);
	        }.bind(this)
	     }

	     //渲染li标签
	     this.iniLiDom(this.state.nowpage, count , eachPageCount);
	},

	//渲染后执行
	componentDidMount() {
	  //console.log(this.refs.pagesUl); 
	  //执行回调
       this.callback();
	},

	//滚动动画
	runTo(nowpage){
		var $ul = $(this.refs.pagesUl);
		var {pagecount, showPage} = this.state;
		var num = this.getCenterNum(showPage);
		var pix = -parseInt($ul.position().left/liWid);//偏移量,当前偏移多少个

		if(pagecount <= showPage) return; 
        //如果点击的是中点，保持
        if(nowpage == pix+num){
            return
        }else if(nowpage > pix+num){
            //console.log("nowpage >　pix+num"); 
            if(nowpage >= pagecount-num){
                pix = pagecount-showPage;
            }else{
                pix = nowpage - num;
            }
        }else{
            //console.log("nowpage <　pix+num"); 
            if(nowpage <= num){
                pix = 0;
            }else{
                pix = nowpage - num;
            }
        }
        $ul.stop();
        $ul.animate({
            left: -pix*liWid
        },speed);
	},

	//每次渲染后执行
	componentDidUpdate(nextProps, nextState){
		//执行回调 
        this.callback();
        //滚动
		this.runTo(this.state.nowpage);
        //返回true 执行动画
		return true;
	},

	//渲染数据
	render(){

	    //渲染
		return (
			<div className="mt-pagelist" id={this.props.id}>
				<div className="mt-pagelist-left">
					<Selected {...selectProp}/>&nbsp;
	                <span>共 {this.state.pagecount} 页 / {this.state.count} 条</span>
	            </div>
	            <div className="mt-pagelist-right">
	                <a href="javascript:;" onClick={this.handleClickToFirst} className="mt-btn-grey ink-reaction mt-pagelist-first">首页</a>&nbsp;
	                <a href="javascript:;" onClick={this.handleClickPrev} className="mt-btn-grey ink-reaction mt-pagelist-prev">上一页</a> &nbsp;
	                {this.state.showPage<this.state.pagecount?<a href="javascript:;" onClick={this.handleClickPrevDuan} className="mt-btn-grey ink-reaction mt-pagelist-btn mt-pagelist-runprev"><i className="iconfont icon-left"></i></a>:""}&nbsp;
	                <div className="mt-pagelist-content" style={{maxWidth:40*this.state.showPage}}>
	                    <ul ref="pagesUl" style={{width:this.state.pagecount*40}} className="mt-pagelist-page">{this.state.pages}</ul>
	                </div>&nbsp;
	                {this.state.showPage<this.state.pagecount?<a href="javascript:;" onClick={this.handleClickNextDuan} className="mt-btn-grey ink-reaction mt-pagelist-btn mt-pagelist-runnext"><i className="iconfont icon-right"></i></a>:""}&nbsp;
	                <a href="javascript:;" onClick={this.handleClickNext} className="mt-btn-grey ink-reaction mt-pagelist-next">下一页</a>&nbsp;
	                <a href="javascript:;" onClick={this.handleClickToLast} className="mt-btn-grey ink-reaction mt-pagelist-end">尾页</a> 
	                <span className="mt-pagelist-input">
	                    第<input className="mt-input" value={this.state.inputVal} onChange={this.handleChangeVal} type="text"/>页
	                </span>
	                <a href="javascript:;" onClick={this.handleClickGoto} className="mt-btn-grey ink-reaction mt-pagelist-btn">跳转</a>
	            </div>
            </div>
		);
	}
});

//配置信息
export default PageList;