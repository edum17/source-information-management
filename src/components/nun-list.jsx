import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getAllNuns } from "../api/api";
import NunEdit from './nun-edit';
import NunItem from "./nun-item";

class NunsList extends Component {
    constructor(props) {
      super(props);
      this.state = {
          nuns: [], 
          showEditForm: false, 
          nunSelected: null
        };
      this.handleChangeEdit = this.handleChangeEdit.bind(this);
    }

    componentDidMount() {
        getAllNuns().then((nuns) => {console.log("componentDidMount");this.setState({nuns: nuns})});
    }

    handleChangeEdit(nun) {
        this.setState({showEditForm: !this.state.showEditForm, nunSelected: nun});
    }

    render() {
        return <div> { !this.state.showEditForm ? (
            <React.Fragment>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Codigo</th>
                            <th>Nombre</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.nuns && this.state.nuns.map(currentNun => {
                            return <NunItem 
                                        nun={currentNun} 
                                        key={currentNun._id} 
                                        onEditNun={this.handleChangeEdit}/>;
                            }) 
                        }
                    </tbody>
                </table>
            </React.Fragment>) : (<React.Fragment>
                <NunEdit 
                    nun={this.state.nunSelected}
                    onEditNun={this.handleChangeEdit}/>
            </React.Fragment>)}
        </div>

    }
}



export default NunsList;