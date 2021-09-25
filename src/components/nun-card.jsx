import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
        return (<Card className="nun-card_item" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={process.env.PUBLIC_URL+"/assets/noImage.png"} />
        <Card.Body>
            {/* nombre */}
          <Card.Title>{this.state.nun.nombre}</Card.Title>
          <Card.Text>
            {/* tipologia */}
            <div className="nun-card_item_name">
                    <label className="nun-card_item_label">Tipología</label>
                    <label>{this.state.nun.tipologia}</label>
                </div>

                {/* tecnica */}
                <div className="nun-card_item_name">
                    <label className="nun-card_item_label">Técnica</label>
                    <label>{this.state.nun.tecnica}</label>
                </div>

                {/* siglo */}
                <div className="nun-card_item_name">
                    <label className="nun-card_item_label">Siglo</label>
                    <label>{this.state.nun.siglo}</label>
                </div>
          </Card.Text>
          <Button variant="primary" onClick={this.handleOnEdit}>Editar</Button>
        </Card.Body>
      </Card>);
    }
}

NunCard.propTypes = {
    nun: PropTypes.object,
    onAction: PropTypes.func
}

export default NunCard;