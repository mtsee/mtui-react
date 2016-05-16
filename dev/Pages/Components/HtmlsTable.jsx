import './style.css';
import React from 'react'
import conf from '../Conf/Conf' 
import mtuiMixins from "../../MTUI/Mixins/mtuiMixins";

const HtmlsBtn = React.createClass({
  mixins:[mtuiMixins],
  componentDidMount() {
      this.mtLimit();
      this.mtMore();
  },
  render() {
    return (
    	<div className={conf.pageAnimate+" contents"}>
    		<h1>表格</h1>

    		{/*<!--内容区域-->*/}
    <div className="mt-page-content">
        <h3 className="mt-padding">默认表格：</h3>
        <div className="mt-g">
            
            <div className="mt-g-12">
                
                <div className="mt-g-6">
                    <table className="mt-table">
                    <tbody>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>age</th>
                            <th>six</th>
                            <th>date</th> 
                            <th>option</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td data-limit="10">乱"七八糟的东西"一大堆，但是我们不想显示那么多内容怎么办？问的好~这里提供了一个方法去格式化这些文档</td>
                            <td>25</td>
                            <td>男</td>
                            <td>1990.07.20</td>
                            <td>更多</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td data-more="20">乱"七八糟的东西"一大堆，但是我们不想显示那么多内容怎么办？问的好~这里提供了一个方法去格式化这些文档</td>
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
                </div>

                <div className="mt-g-6">
                    <table className="mt-table mt-table-border">
                    <tbody>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>age</th>
                            <th>six</th>
                            <th>date</th>
                            <th>option</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>馒头</td>
                            <td>25</td>
                            <td>男</td>
                            <td>1990.07.20</td>
                            <td>更多</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>包子</td>
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
                </div>

            </div>

            <div className="mt-g-12">
                
                <div className="mt-g-6">
                    <table className="mt-table mt-table-bordered">
                    <tbody>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>age</th>
                            <th>six</th>
                            <th>date</th>
                            <th>option</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>馒头</td>
                            <td>25</td>
                            <td>男</td>
                            <td>1990.07.20</td>
                            <td>更多</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>包子</td>
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
                </div>

                <div className="mt-g-6">
                    <table className="mt-table mt-table-striped">
                    <tbody>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>age</th>
                            <th>six</th>
                            <th>date</th>
                            <th>option</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>馒头</td>
                            <td>25</td>
                            <td>男</td>
                            <td>1990.07.20</td>
                            <td>更多</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>包子</td>
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
                </div>

            </div>

            <div className="mt-g-12">

                <div className="mt-g-6">
                    <table className="mt-table mt-table-center mt-table-striped">
                    <tbody>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>age</th>
                            <th>six</th>
                            <th>date</th>
                            <th>option</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>馒头</td>
                            <td>25</td>
                            <td>男</td>
                            <td>1990.07.20</td>
                            <td>更多</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>包子</td>
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
                </div>

                <div className="mt-g-6">
                    <table className="mt-table mt-table-hover mt-table-striped">
                    <tbody>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>age</th>
                            <th>six</th>
                            <th>date</th>
                            <th>option</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>馒头</td>
                            <td>25</td>
                            <td>男</td>
                            <td>1990.07.20</td>
                            <td>更多</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>包子</td>
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
                </div>

            </div>

        </div>
    </div>{/*<!--end mt-page-content-->*/}

    	</div>
    );
  }
});
//联系信息
module.exports = HtmlsBtn;