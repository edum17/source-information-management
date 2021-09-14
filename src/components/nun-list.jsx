import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAllNuns } from "../api/api";

const Nun = props => (
    <tr>
      <td>{props.nun.codigo}</td>
      <td>{props.nun.nombre}</td>
      <td>
        <Link to={"/edit/"+props.nun._id}>edit</Link>
      </td>
    </tr>
);
  
class NunsList extends Component {
    constructor(props) {
      super(props);
      this.state = {nuns: []};
    }

    componentDidMount() {
        getAllNuns().then(nuns => {this.setState({nuns: nuns})});
    }

    nunsList() {
        if (!this.state.nuns || this.state.nuns !== undefined) {
            return this.state.nuns.map(currentNun => {
                return <Nun nun={currentNun} key={currentNun._id}/>;
            });
        }
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Codigo</th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.nunsList() }
                    </tbody>
                </table>
            </div>
        );
    }
}



export default NunsList;