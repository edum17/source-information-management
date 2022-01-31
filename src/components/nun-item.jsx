import React, { Component } from "react";
import PropTypes from "prop-types";
import IconButton from "./shared/icon-button";

class NunItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nun: this.props.nun,
    };
    this.handleOnEdit = this.handleOnEdit.bind(this);
  }

  handleOnEdit() {
    this.props.onEditNun && this.props.onEditNun(this.state.nun);
  }

  render() {
    return (
      <tr className="nun-list_row" onClick={this.handleOnEdit}>
        <td>{this.state.nun.codigo}</td>
        <td>{this.state.nun.nombre}</td>
        <td>{this.state.nun.siglo}</td>
      </tr>
    );
  }
}

NunItem.propTypes = {
  nun: PropTypes.object,
  onEditNun: PropTypes.func,
};

export default NunItem;
