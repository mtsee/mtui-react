
import React, { Component } from 'react';
import setGridName from '../utils/setGridName';

class PageList extends React.Component {

    //  size : 中间预留个数
    static defaultProps = {size: 3, pageSize: 10, total: 0, current: 1, callback: null}

    constructor(props) {
        super(props);
        this.total = props.total;
        this.current = props.current;
        this.state = {
            list: []
        };
    }

    componentWillUpdate(nextProps, nextState) {
        if(nextProps.total !== this.props.total){
            if(nextProps.total){
                this.total = nextProps.total;
                this.setHtml(true);
            }else{
                this.setState({
                    list: []
                });
            }
        }
    }

    // 获取最大页数
    getMaxPage(){
        const total = this.total;
        const {pageSize} = this.props;
        let max = Math.ceil(total / pageSize);
        return max;
    }

    // 跳转页面
    toPage(num){
        if (num !== '' && num <= this.getMaxPage() && num > 0 ) {
            this.current = num;
            this.setHtml();
            return true;
        } else {
            console.error('请输入正确的页码！');
            return false;
        }
    }

    // 上一页
    nextPage(){
        this.current = parseInt(this.current, 10);
        if(this.current + 1 > this.getMaxPage()){
            return;
        }
        this.toPage(this.current + 1);
    }

    // 下一页
    prevPage(){
        if(this.current - 1 < 1){
            return;
        }
        this.toPage(this.current - 1);
    }

    // 上一段
    prevSize(){
        const {size} = this.props;
        this.current -= size;
        if(this.current < 1){
            this.current = 1;
        }
        this.setHtml();
    }

    // 下一段
    nextSize(){
        let {size} = this.props;
        let max = this.getMaxPage();
        this.current = parseInt(this.current, 10) + parseInt(size, 10);
        if(this.current > max){
            this.current = max;
        }
        this.setHtml();
    }

    // 设置html
    setHtml(mark){
        let {size, callback} = this.props;
        let current = parseInt(this.current, 10);

        if(size < 3){
            console.error('最小size:3!');
            return;
        }
        let list = [];
        let _this = this;
        let max = parseInt(this.getMaxPage(), 10);

        // 如果小于size ，直接显示出来
        if(max <= size || max <= size + 3){
            for(var i = 1; i <= max; i++){
                list.push(i === current ? i + ':active' : i);
            }
        // 如果大于size
        }else{
            // 比如 1234...10 size=3; current在123中
            if(current <= size){
                for(let i = 1; i <= size + 1; i++){
                    list.push(i === current ? i + ':active' : i);
                }
                list.push('next');
                list.push(max);
            // 如果current 在 4 ~ 10-size 中
            }else if(current > size && current <= max - size){
                list.push(1);
                list.push('prev');
                for(let i = current - 1; i < parseInt(size, 10) + parseInt(current, 10) - 1; i++){
                    list.push(i === current ? i + ':active' : i);
                }
                list.push('next');
                list.push(max);
            // 如果current 在 10-size ~ 10 中
            }else{
                list.push(1);
                list.push('prev');
                for(let i = max - size; i < max; i++){
                    list.push(i === current ? i + ':active' : i);
                }
                list.push(max === current ? max + ':active' : max);
            }
        }
        this.setState({
            list: list
        });

        // 如果是自动加载的数据，不执行回调，避免重复执行
        if(!mark){ 
            // 回调函数
            callback({
                current: parseInt(_this.current, 10),
                total: _this.total,
                pageSize: _this.props.pageSize
            });
        }
    }

    // 刷新组件
    refresh = (current) => {
        this.current = current || 1;
        this.setHtml(true);
    }

    render(){
        const {className, grid, size, pageSize, total, current, callback, ...other} = this.props;
        let cName = '';
        let _this = this;
        if(grid){
            cName = setGridName(grid, 'mt-pagelist');
        }else{
            cName = 'mt-pagelist';
        }
        if(total === 0){
            return null;
        }
        return (
            <div {...other} className={cName}>
                <a className="mt-btn mt-pagelist-prev" onClick={this.prevPage.bind(this)}>上一页</a>
                <div className="mt-pagelist-list">
                    <ul>
                        {
                            this.state.list.map(function(elem, index) {
                                elem = elem.toString();
                                index = +new Date() + index;
                                if(elem.indexOf('active') !== -1){
                                    let num = elem.replace(':active', '');
                                    return <li className="active" key={index}><a className="mt-btn" onClick={_this.toPage.bind(_this, num)}>{num}</a></li>;
                                }else if(elem.indexOf('prev') !== -1){
                                    return <li key={index}><a className="mt-btn mt-pagelist-prevsize" onClick={_this.prevSize.bind(_this)}></a></li>;
                                }else if(elem.indexOf('next') !== -1){
                                    return <li key={index}><a className="mt-btn mt-pagelist-nextsize" onClick={_this.nextSize.bind(_this)}></a></li>;
                                }else {
                                    return <li key={index}><a className="mt-btn" onClick={_this.toPage.bind(_this, elem)}>{elem}</a></li>;
                                }
                            })
                        }
                    </ul>
                </div>
                <a className="mt-btn mt-pagelist-next" onClick={this.nextPage.bind(this)}>下一页</a>
            </div>
        );
    }
}

//  /主页
export default PageList;