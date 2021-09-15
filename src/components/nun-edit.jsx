import React, { Component } from 'react';
import PropTypes from "prop-types";

class NunEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nun: this.props.nun
        }
    }

    render(){
        return <div><span>Nun-Edit-Form</span>{this.state.nun ? <div>{this.state.nun}</div> : null}</div>;
    }
}

NunEdit.prototypes = {
    nun: PropTypes.object,
}

export default NunEdit;