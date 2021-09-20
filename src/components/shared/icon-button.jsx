import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BsArrowBarLeft } from "react-icons/bs";
import {AiTwotoneEdit} from "react-icons/ai";

function getIcon(icon) {
    switch(icon) {
        case 'BsArrowBarLeft':
            return <BsArrowBarLeft size={30} />;
        case 'AiTwotoneEdit':
            return <AiTwotoneEdit size={30} />;
    }
}

class IconButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nun: this.props.nun
        }
        this.handleOnAction = this.handleOnAction.bind(this);
    }

    handleOnAction() {
        this.props.onAction && this.props.onAction();
    }

    render(){
        return <button className="icon-btn" onClick={this.handleOnAction}>{getIcon(this.props.icon)}</button>;
    }
}

IconButton.propTypes = {
    onAction: PropTypes.func,
    icon: PropTypes.object
}

export default IconButton;