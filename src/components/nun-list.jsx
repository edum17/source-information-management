import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getAllNuns } from "../api/api";
import NunEdit from './nun-edit';
import NunItem from "./nun-item";
import IconButton from './shared/icon-button';
import NunCard from './nun-card';

class NunsList extends Component {
    constructor(props) {
      super(props);
      this.state = {
          nuns: [], 
          showEditForm: false, 
          nunSelected: null,
          tableView: true,
        };
      this.handleChangeEdit = this.handleChangeEdit.bind(this);
      this.handleViewInfo = this.handleViewInfo.bind(this);
    }

    componentDidMount() {
        getAllNuns().then((nuns) => {console.log("componentDidMount");this.setState({nuns: nuns})});
    }

    handleChangeEdit(nun) {
        this.setState({showEditForm: !this.state.showEditForm, nunSelected: nun});
    }

    handleViewInfo() {
        this.setState({tableView: !this.state.tableView});
    }
    
    render() {
        return <React.Fragment> { !this.state.showEditForm ? (<React.Fragment> <div className="nun-list_header_buttton">{!this.state.tableView ? <IconButton onAction={this.handleViewInfo} icon={"BsTable"}/> : <IconButton onAction={this.handleViewInfo} icon={"BsGrid3X3Gap"}/>}</div>

                    


                <React.Fragment>    { this.state.tableView ? <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th>Código</th>
                                <th>Nombre</th>
                                <th>Siglo</th>
                            </tr>
                        </thead>
                        <tbody>
                        { this.state.nuns && this.state.nuns.map((currentNun) => (<NunItem 
                                    nun={currentNun} 
                                    key={currentNun._id} 
                                    onEditNun={this.handleChangeEdit}
                                    tableView={this.state.tableView}/>))}
                        </tbody>
                    </table>
                    
                        
                    :  <div className="nun-card_content">{this.state.nuns && this.state.nuns.map((currentNun) => ( <NunCard nun={currentNun} onAction={this.handleChangeEdit}/> ))}</div>}
                    
                </React.Fragment>
                    
                        
    </React.Fragment>) : (<React.Fragment>
                <NunEdit 
                    nun={this.state.nunSelected}
                    onEditNun={this.handleChangeEdit}/>
            </React.Fragment>)}
        </React.Fragment>
    }
}



export default NunsList;