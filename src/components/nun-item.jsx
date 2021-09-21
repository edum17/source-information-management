import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from './shared/icon-button';

class NunItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nun: this.props.nun
        }
        this.handleOnEdit = this.handleOnEdit.bind(this);
    }

    handleOnEdit() {
        this.props.onEditNun && this.props.onEditNun(this.state.nun);
    }

    render(){
        return (<tr>
                    <td>{this.state.nun.codigo}</td>
                    <td>{this.state.nun.nombre}</td>
                    <td>
                        <IconButton onAction={this.handleOnEdit} icon={"AiTwotoneEdit"}/>
                    </td>
                </tr>);
    }
}

NunItem.propTypes = {
    nun: PropTypes.object,
    onEditNun: PropTypes.func
}

export default NunItem;