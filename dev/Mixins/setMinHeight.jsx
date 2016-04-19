import React from 'react'

const setMinHeight = {
	getInitialState : function(){ 
	    return {
	      height : $(window).height() - 120
	    }
	},
	componentDidMount: function() {
        $(window).resize(function(event) {
        	if(this.isMounted()){
        		this.setState({
		            height : $(window).height() - 120
		        });
        	}
        }.bind(this));
    }
}

module.exports = setMinHeight;