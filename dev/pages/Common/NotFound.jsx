'use strict';
import './style.scss';
import React, { Component } from 'react';
import { connect} from 'react-redux'
import { Link } from 'react-router' 

class NotFound extends Component{
  render() {
    return (
        <div className="menubox">
            404
        </div>
      );
  }
};
//主页 
export default NotFound;