import React, { Component } from 'react';
import PropTypes from "prop-types";

class NunItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nun: this.props.nun
        }
        this.handleOnEdit = this.handleOnEdit(this);
    }

    handleOnEdit() {
        this.props.onEdit && this.props.onEdit(this.state.nun);
    }

    render(){
        return <tr>
            <td>{this.state.nun.codigo}</td>
            <td>{this.state.nun.nombre}</td>
            <td>
            <button onClick={this.handleOnEdit} >edit</button>
            </td>
        </tr>;
    }
}

NunItem.propTypes = {
    nun: PropTypes.object,
    onEdit: PropTypes.func
}

export default NunItem;