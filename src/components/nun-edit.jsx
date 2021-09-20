import React, { Component } from 'react';
import PropTypes from "prop-types";
import IconButton from './shared/icon-button';

class NunEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nun: this.props.nun,
            edit: false
        }
        this.handleEditFields = this.handleEditFields.bind(this);
        this.handleOnBack = this.handleOnBack.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
    }

    handleEditFields() {
        this.setState({edit: !this.state.edit});
    }

    handleOnBack() {
        this.props.onEditNun && this.props.onEditNun(this.state.nun);
    }

    onNameChange(name) {
        var nun = this.state.nun;
        nun.nombre = name;
        this.setState({nun: nun});
    } 

    render(){
        return <div className="edit-nun_content">
            <div className="edit-nun_header-buttons">
                <IconButton onAction={this.handleOnBack} icon={"BsArrowBarLeft"}/>
                <h4>Formulario de edición</h4>
                <IconButton onAction={this.handleEditFields} icon={"AiTwotoneEdit"}/>
            </div>
            <div className="edit-nun_form">
                <div className="edit-nun_form-fields">
                    {/* Codigo 
                    <div className="edit-nun_form-fields-distribution">
                        <label className="edit-nun_form-fields-label">Código</label>
                        <input type="text" value={this.state.nun.codigo}></input>
                    </div>
                    */}

                    {/* Nombre */}
                    <div className="edit-nun_form-fields-distribution">
                        <label className="edit-nun_form-fields-label">Nombre</label>
                        {this.state.edit ? <input type="text" value={this.state.nun.nombre} onChange={e => this.onNameChange(e.target.value)}></input> : <label>{this.state.nun.nombre}</label>}
                    </div>

                    {/* Congregacion */}
                    <div className="edit-nun_form-fields-distribution">
                        <label className="edit-nun_form-fields-label">Congregación</label>
                        {this.state.edit ? <input type="text" value={this.state.nun.congregacion}></input> : <label>{this.state.nun.congregacion}</label>}
                    </div>

                    {/* Convento/Monasterio */}
                    <div className="edit-nun_form-fields-distribution">
                        <label className="edit-nun_form-fields-label">Convento/Monasterio</label>
                        {this.state.edit ? <input type="text" value={this.state.nun.conventoMonasterio}></input> : <label>{this.state.nun.conventoMonasterio}</label>}
                    </div>

                    {/* FundacionReal */}
                    <div className="edit-nun_form-fields-distribution">
                        <label className="edit-nun_form-fields-label">Fundación real</label>
                        {this.state.edit ? <input type="text" value={this.state.nun.fundacionReal}></input> : <label>{this.state.nun.fundacionReal}</label>}
                    </div>

                    {/* Técnica */}
                    <div className="edit-nun_form-fields-distribution">
                        <label className="edit-nun_form-fields-label">Técnica</label>
                        {this.state.edit ? <input type="text" value={this.state.nun.tecnica}></input> : <label>{this.state.nun.tecnica}</label>}
                    </div>

                    {/* categoria */}
                    <div className="edit-nun_form-fields-distribution">
                        <label className="edit-nun_form-fields-label">Categoria</label>
                        {this.state.edit ? <input type="text" value={this.state.nun.categoria}></input> : <label>{this.state.nun.categoria}</label>}
                    </div>

                    {/* fechaNacDef */}
                    <div className="edit-nun_form-fields-distribution">
                        <label className="edit-nun_form-fields-label">Fecha Nac./Def.</label>
                        {this.state.edit ? <input type="text" value={this.state.nun.fechaNacDef}></input> : <label>{this.state.nun.fechaNacDef}</label>}
                    </div>

                    {/* autor */}
                    <div className="edit-nun_form-fields-distribution">
                        <label className="edit-nun_form-fields-label">Autor</label>
                        {this.state.edit ? <input type="text" value={this.state.nun.autor}></input> : <label>{this.state.nun.autor}</label>}
                    </div>

                    {/* tipologia */}
                    <div className="edit-nun_form-fields-distribution">
                        <label className="edit-nun_form-fields-label">Tipología</label>
                        {this.state.edit ? <input type="text" value={this.state.nun.tipologia}></input> : <label>{this.state.nun.tipologia}</label>}
                    </div>

                    {/* subtipología */}
                    <div className="edit-nun_form-fields-distribution">
                        <label className="edit-nun_form-fields-label">Subtipología</label>
                        {this.state.edit ? <input type="text" value={this.state.nun.subtipologia}></input> : <label>{this.state.nun.subtipologia}</label>}
                    </div>

                    {/* palabrasClave */}
                    <div className="edit-nun_form-fields-distribution">
                        <label className="edit-nun_form-fields-label">Palabras clave</label>
                        {this.state.edit ? <input type="text" value={this.state.nun.palabrasClave}></input> : <label>{this.state.nun.palabrasClave}</label>}
                    </div>

                    {/* lugar */}
                    <div className="edit-nun_form-fields-distribution">
                        <label className="edit-nun_form-fields-label">Lugar</label>
                        {this.state.edit ? <input type="text" value={this.state.nun.lugar}></input> : <label>{this.state.nun.lugar}</label>}
                    </div>

                    {/* localizacion */}
                    <div className="edit-nun_form-fields-distribution">
                        <label className="edit-nun_form-fields-label">Localización</label>
                        {this.state.edit ? <input type="text" value={this.state.nun.localizacion}></input> : <label>{this.state.nun.localizacion}</label>}
                    </div>

                    {/* web */}
                    <div className="edit-nun_form-fields-distribution">
                        <label className="edit-nun_form-fields-label">Web</label>
                        {this.state.edit ? <input type="text" value={this.state.nun.web}></input> : <label>{this.state.nun.web}</label>}
                    </div>

                    {/* inscripcion */}
                    <div className="edit-nun_form-fields-distribution">
                        <label className="edit-nun_form-fields-label">Inscripción</label>
                        {this.state.edit ? <input type="text" value={this.state.nun.inscripcion}></input> : <label>{this.state.nun.inscripcion}</label>}
                    </div>

                    {/* latin */}
                    <div className="edit-nun_form-fields-distribution">
                        <label className="edit-nun_form-fields-label">Latin</label>
                        {this.state.edit ? <input type="text" value={this.state.nun.latin}></input> : <label>{this.state.nun.latin}</label>}
                    </div>

                    {/* fechaObra */}
                    <div className="edit-nun_form-fields-distribution">
                        <label className="edit-nun_form-fields-label">Fecha obra</label>
                        {this.state.edit ? <input type="text" value={this.state.nun.fechaObra}></input> : <label>{this.state.nun.fechaObra}</label>}
                    </div>

                    {/* Siglo */}
                    <div className="edit-nun_form-fields-distribution">
                        <label className="edit-nun_form-fields-label">Siglo</label>
                        {this.state.edit ? <input type="text" value={this.state.nun.siglo}></input> : <label>{this.state.nun.siglo}</label>}
                    </div>

                    {/* Representacion */}
                    <div className="edit-nun_form-fields-distribution">
                        <label className="edit-nun_form-fields-label">Representación</label>
                        {this.state.edit ? <input type="text" value={this.state.nun.representacion}></input> : <label>{this.state.nun.representacion}</label>}
                    </div>

                    {/* anotaciones */}
                    <div className="edit-nun_form-fields-distribution">
                        <label className="edit-nun_form-fields-label">anotaciones</label>
                        {this.state.edit ? <textarea type="text" value={this.state.nun.anotaciones}></textarea> : <label>{this.state.nun.anotaciones}</label>}
                    </div>
                </div>

                
                <div className="edit-nun_form-fields"></div>

                
            </div>
            </div>;
    }
}

NunEdit.propTypes = {
    nun: PropTypes.object,
    onEditNun: PropTypes.func
}

export default NunEdit;