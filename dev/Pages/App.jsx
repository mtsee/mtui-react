'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import conf from './Conf/Conf';
import '../mtui/style.scss';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps, prevState) {
        $('pre code').each(function (i, block) {
            hljs.highlightBlock(block);
        });
    }

    componentDidMount() {
        hljs.initHighlightingOnLoad();
    }

    render() {
        return (
            <div className="app">
                {this.props.children}
            </div>
        );
    }
}

// APP入口
export default App;