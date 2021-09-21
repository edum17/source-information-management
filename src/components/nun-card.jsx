import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from './shared/icon-button';

class NunCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nun: this.props.nun
        }
        this.handleOnEdit = this.handleOnEdit.bind(this);
    }

    handleOnEdit() {
        this.props.onAction && this.props.onAction(this.state.nun);
    }

    render(){
        return <div className="nun-card_item" onClick={this.handleOnEdit}>
                <label>{this.state.nun.nombre}</label>
            </div>;
    }
}

NunCard.propTypes = {
    nun: PropTypes.object,
    onAction: PropTypes.func
}

export default NunCard;