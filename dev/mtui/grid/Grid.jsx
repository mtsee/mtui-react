
import React, { Component } from 'react';
import setGridName from '../utils/setGridName'; // 按钮，输入框同样有该属性

/**
* 超级好用的栅格系统
* @date     2016-11-20
* @author   馒头
* @参数:  width,md,lg,sm,offset,mdOffset,smOffset,lgOffset  offset是偏移值
*   响应式 sm: 0~640px  md: 641~1024  lg: 1025+ 
    eg:  <Grid sm="1/1" md="1/2" lg="1/3">...</Grid> 
    表示在640px分辨率下占100%。在平板上占50%，在PC上占33.33%
* @eg:  <Grid width="1/2" sm="1/1" offset="1/2">...</Grid>
*/
class Grid extends Component {
    // 构造函数
    constructor (props) {
        super(props);
    }

    render(){
        const {width , sm, md, lg, smOffset, mdOffset, lgOffset, offset , className, style ,children, ...other} = this.props;
        let cName = setGridName({
            width: width,
            offset: offset,
            sm: sm, 
            md: md, 
            lg: lg,
            smOffset: smOffset, 
            mdOffset: mdOffset,
            lgOffset: lgOffset
        },className);
        return (
            <div className={cName} style={style} {...other}>
                {children}
            </div> // /
        );
    }
}

// 主页
export default Grid;