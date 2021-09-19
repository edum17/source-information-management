import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NunItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nun: this.props.nun
        }
        this.handleOnEdit = this.handleOnEdit.bind(this);
    }

    handleOnEdit(e) {
        console.log("handleOnEdit");
        this.props.onEditNun && this.props.onEditNun();
    }

    render(){
        return (<tr>
                <td>{this.state.nun.codigo}</td>
                <td>{this.state.nun.nombre}</td>
                <td>
                    <button onClick={(e) => this.handleOnEdit(e)} >edit</button>
                </td>
            </tr>);
    }
}

NunItem.propTypes = {
    nun: PropTypes.object,
    onEditNun: PropTypes.func
}

export default NunItem;