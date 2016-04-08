import './style.css'
import React from 'react'
import setMinHeight from '../../Mixins/setMinHeight'

const Index = React.createClass({
  mixins:[setMinHeight],
  render: function() {

    return (
        <div className="index mtop60" style={{ minHeight: this.state.height+"px",background:'#27303e'}}>
          <div className="index-box">
            <div className="logoMax"></div>
            <h1 className="index-head">MTUI React Version 1.0</h1>
          </div>
        </div>
    );
  }
});
//主页
module.exports = Index;