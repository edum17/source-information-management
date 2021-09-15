import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAllNuns } from "../api/api";
import NunEdit from './nun-edit';
import NunItem from "./nun-item";

class NunsList extends Component {
    constructor(props) {
      super(props);
      this.state = {nuns: [], showEditForm: false, nunSelected: null};
      this.handleChangeEdit = this.handleChangeEdit(this);
    }

    componentDidMount() {
        getAllNuns().then(nuns => {this.setState({nuns: nuns})});
    }

    handleChangeEdit(nunSelected) {
        console.log("aaa")
        this.setState({showEditForm: !this.state.showEditForm, nunSelected: nunSelected});
    }

    nunsList() {
        if (!this.state.nuns || this.state.nuns !== undefined) {
            return this.state.nuns.map(currentNun => {
                return <NunItem nun={currentNun} key={currentNun._id} onEdit={this.handleChangeEdit}/>;
            });
        }
    }

    render() {
        return <div> { !this.state.showEditForm ? (
                <React.Fragment>
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
                </React.Fragment>) : (<React.Fragment>
                    <NunEdit nun={this.state.nunSelected}/>
                </React.Fragment>)}
            </div>
    }
}



export default NunsList;