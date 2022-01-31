import React, { Component } from "react";
import PropTypes from "prop-types";
import IconButton from "./shared/icon-button";
import CarouselImages from "./carousel-images";
import Button from "react-bootstrap/Button";
import { updateNun } from "../api/api";

class NunEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nun: this.props.nun,
      edit: false,
    };
    this.handleEditFields = this.handleEditFields.bind(this);
    this.handleOnBack = this.handleOnBack.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onCongregacionChange = this.onCongregacionChange.bind(this);
    this.onConventoMonasterioChange =
      this.onConventoMonasterioChange.bind(this);
    this.onFundacionRealChange = this.onFundacionRealChange.bind(this);
    this.onTecnicaChange = this.onTecnicaChange.bind(this);
    this.onCategoriaChange = this.onCategoriaChange.bind(this);
    this.onFechaNacDefChange = this.onFechaNacDefChange.bind(this);
    this.onAutorChange = this.onAutorChange.bind(this);
    this.onTipologiaChange = this.onTipologiaChange.bind(this);
    this.onSubtipologiaChange = this.onSubtipologiaChange.bind(this);
    this.onPalabrasClaveChange = this.onPalabrasClaveChange.bind(this);
    this.onLugarChange = this.onLugarChange.bind(this);
    this.onLocalizacionChange = this.onLocalizacionChange.bind(this);
    this.onWebChange = this.onWebChange.bind(this);
    this.onInscripcionChange = this.onInscripcionChange.bind(this);
    this.onLatinChange = this.onLatinChange.bind(this);
    this.onFechaObraChange = this.onFechaObraChange.bind(this);
    this.onSigloChange = this.onSigloChange.bind(this);
    this.onRepresentacionChange = this.onRepresentacionChange.bind(this);
    this.onAnotacionesChange = this.onAnotacionesChange.bind(this);
    this.onBibliografiaChange = this.onBibliografiaChange.bind(this);
    this.onImagenesChange = this.onImagenesChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleExportData = this.handleExportData(this);
  }

  handleEditFields() {
    this.setState({ edit: !this.state.edit });
  }

  handleOnBack() {
    this.props.onEditNun && this.props.onEditNun(this.state.nun);
  }

  onNameChange(name) {
    var nun = this.state.nun;
    nun.nombre = name;
    this.setState({ nun: nun });
  }

  onCongregacionChange(congregacion) {
    var nun = this.state.nun;
    nun.congregacion = congregacion;
    this.setState({ nun: nun });
  }

  onConventoMonasterioChange(conventoMonasterio) {
    var nun = this.state.nun;
    nun.conventoMonasterio = conventoMonasterio;
    this.setState({ nun: nun });
  }

  onFundacionRealChange(fundacionReal) {
    var nun = this.state.nun;
    nun.fundacionReal = fundacionReal;
    this.setState({ nun: nun });
  }

  onTecnicaChange(tecnica) {
    var nun = this.state.nun;
    nun.tecnica = tecnica;
    this.setState({ nun: nun });
  }

  onCategoriaChange(categoria) {
    var nun = this.state.nun;
    nun.categoria = categoria;
    this.setState({ nun: nun });
  }

  onFechaNacDefChange(fechaNacDef) {
    var nun = this.state.nun;
    nun.fechaNacDef = fechaNacDef;
    this.setState({ nun: nun });
  }

  onAutorChange(autor) {
    var nun = this.state.nun;
    nun.autor = autor;
    this.setState({ nun: nun });
  }

  onTipologiaChange(tipologia) {
    var nun = this.state.nun;
    nun.tipologia = tipologia;
    this.setState({ nun: nun });
  }

  onSubtipologiaChange(subtipología) {
    var nun = this.state.nun;
    nun.subtipología = subtipología;
    this.setState({ nun: nun });
  }

  onPalabrasClaveChange(palabrasClave) {
    var nun = this.state.nun;
    nun.palabrasClave = palabrasClave;
    this.setState({ nun: nun });
  }

  onLugarChange(lugar) {
    var nun = this.state.nun;
    nun.lugar = lugar;
    this.setState({ nun: nun });
  }

  onLocalizacionChange(localizacion) {
    var nun = this.state.nun;
    nun.localizacion = localizacion;
    this.setState({ nun: nun });
  }

  onWebChange(web) {
    var nun = this.state.nun;
    nun.web = web;
    this.setState({ nun: nun });
  }

  onInscripcionChange(inscripcion) {
    var nun = this.state.nun;
    nun.inscripcion = inscripcion;
    this.setState({ nun: nun });
  }

  onLatinChange(latin) {
    var nun = this.state.nun;
    nun.latin = latin;
    this.setState({ nun: nun });
  }

  onFechaObraChange(fechaObra) {
    var nun = this.state.nun;
    nun.fechaObra = fechaObra;
    this.setState({ nun: nun });
  }

  onSigloChange(siglo) {
    var nun = this.state.nun;
    nun.siglo = siglo;
    this.setState({ nun: nun });
  }

  onRepresentacionChange(representacion) {
    var nun = this.state.nun;
    nun.representacion = representacion;
    this.setState({ nun: nun });
  }

  onAnotacionesChange(anotaciones) {
    var nun = this.state.nun;
    nun.anotaciones = anotaciones;
    this.setState({ nun: nun });
  }

  onBibliografiaChange(bibliografia) {
    var nun = this.state.nun;
    nun.bibliografia = bibliografia;
    this.setState({ nun: nun });
  }

  onImagenesChange(imagenes) {
    var nun = this.state.nun;
    nun.imagenes = imagenes;
    this.setState({ nun: nun });
  }

  handleSave() {
    updateNun(this.state.nun._id).then((nuns) => {
      console.log("Update nun");
    });
    window.location = "/";
  }

  handleCancel() {
    console.log("handleCancel");
  }

  handleExportData(element, filename = "registro_nun") {
    console.log("Export");
  }

  render() {
    return (
      <div className="edit-nun_content">
        <div className="edit-nun_header-buttons">
          <IconButton onAction={this.handleOnBack} icon={"BsArrowBarLeft"} />
          <h4>Formulario de edición</h4>
          <div className="edit-nun_header-buttons-actions">
            <IconButton
              onAction={this.handleEditFields}
              icon={"AiTwotoneEdit"}
            />
            <IconButton onAction={this.handleExportData} icon="BsDownload" />
          </div>
        </div>
        <div className="edit-nun_form">
          <div className="edit-nun_form-fields">
            <CarouselImages imagenes={this.state.imagenes} />

            {/* Codigo 
                    <div className="edit-nun_form-fields-distribution">
                        <label className="edit-nun_form-fields-label">Código</label>
                        <input type="text" value={this.state.nun.codigo}></input>
                    </div>
                    */}

            {/* Nombre */}
            <div className="edit-nun_form-fields-distribution">
              <label className="edit-nun_form-fields-label">Nombre</label>
              {this.state.edit ? (
                <input
                  type="text"
                  className="form-control"
                  value={this.state.nun.nombre}
                  onChange={(e) => this.onNameChange(e.target.value)}
                ></input>
              ) : (
                <label>{this.state.nun.nombre}</label>
              )}
            </div>

            {/* Congregacion */}
            <div className="edit-nun_form-fields-distribution">
              <label className="edit-nun_form-fields-label">Congregación</label>
              {this.state.edit ? (
                <input
                  type="text"
                  className="form-control"
                  value={this.state.nun.congregacion}
                  onChange={(e) => this.onCongregacionChange(e.target.value)}
                ></input>
              ) : (
                <label>{this.state.nun.congregacion}</label>
              )}
            </div>

            {/* Convento/Monasterio */}
            <div className="edit-nun_form-fields-distribution">
              <label className="edit-nun_form-fields-label">
                Convento/Monasterio
              </label>
              {this.state.edit ? (
                <input
                  type="text"
                  className="form-control"
                  value={this.state.nun.conventoMonasterio}
                  onChange={(e) =>
                    this.onConventoMonasterioChange(e.target.value)
                  }
                ></input>
              ) : (
                <label>{this.state.nun.conventoMonasterio}</label>
              )}
            </div>

            {/* FundacionReal */}
            <div className="edit-nun_form-fields-distribution">
              <label className="edit-nun_form-fields-label">
                Fundación real
              </label>
              {this.state.edit ? (
                <input
                  type="text"
                  className="form-control"
                  value={this.state.nun.FundacionReal}
                  onChange={(e) => this.onFundacionRealChange(e.target.value)}
                ></input>
              ) : (
                <label>{this.state.nun.FundacionReal}</label>
              )}
            </div>

            {/* Técnica */}
            <div className="edit-nun_form-fields-distribution">
              <label className="edit-nun_form-fields-label">Técnica</label>
              {this.state.edit ? (
                <input
                  type="text"
                  className="form-control"
                  value={this.state.nun.tecnica}
                  onChange={(e) => this.onTecnicaChange(e.target.value)}
                ></input>
              ) : (
                <label>{this.state.nun.tecnica}</label>
              )}
            </div>

            {/* categoria */}
            <div className="edit-nun_form-fields-distribution">
              <label className="edit-nun_form-fields-label">Categoria</label>
              {this.state.edit ? (
                <input
                  type="text"
                  className="form-control"
                  value={this.state.nun.categoria}
                  onChange={(e) => this.onCategoriaChange(e.target.value)}
                ></input>
              ) : (
                <label>{this.state.nun.categoria}</label>
              )}
            </div>

            {/* fechaNacDef */}
            <div className="edit-nun_form-fields-distribution">
              <label className="edit-nun_form-fields-label">
                Fecha Nac./Def.
              </label>
              {this.state.edit ? (
                <input
                  type="text"
                  className="form-control"
                  value={this.state.nun.fechaNacDef}
                  onChange={(e) => this.onFechaNacDefChange(e.target.value)}
                ></input>
              ) : (
                <label>{this.state.nun.fechaNacDef}</label>
              )}
            </div>

            {/* autor */}
            <div className="edit-nun_form-fields-distribution">
              <label className="edit-nun_form-fields-label">Autor</label>
              {this.state.edit ? (
                <input
                  type="text"
                  className="form-control"
                  value={this.state.nun.autor}
                  onChange={(e) => this.onAutorChange(e.target.value)}
                ></input>
              ) : (
                <label>{this.state.nun.autor}</label>
              )}
            </div>

            {/* tipologia */}
            <div className="edit-nun_form-fields-distribution">
              <label className="edit-nun_form-fields-label">Tipología</label>
              {this.state.edit ? (
                <input
                  type="text"
                  className="form-control"
                  value={this.state.nun.tipologia}
                  onChange={(e) => this.onTipologiaChange(e.target.value)}
                ></input>
              ) : (
                <label>{this.state.nun.tipologia}</label>
              )}
            </div>

            {/* subtipología */}
            <div className="edit-nun_form-fields-distribution">
              <label className="edit-nun_form-fields-label">Subtipología</label>
              {this.state.edit ? (
                <input
                  type="text"
                  className="form-control"
                  value={this.state.nun.subtipología}
                  onChange={(e) => this.onSubtipologiaChange(e.target.value)}
                ></input>
              ) : (
                <label>{this.state.nun.subtipología}</label>
              )}
            </div>

            {/* palabrasClave */}
            <div className="edit-nun_form-fields-distribution">
              <label className="edit-nun_form-fields-label">
                Palabras clave
              </label>
              {this.state.edit ? (
                <input
                  type="text"
                  className="form-control"
                  value={this.state.nun.palabrasClave}
                  onChange={(e) => this.onPalabrasClaveChange(e.target.value)}
                ></input>
              ) : (
                <label>{this.state.nun.palabrasClave}</label>
              )}
            </div>

            {/* lugar */}
            <div className="edit-nun_form-fields-distribution">
              <label className="edit-nun_form-fields-label">Lugar</label>
              {this.state.edit ? (
                <input
                  type="text"
                  className="form-control"
                  value={this.state.nun.lugar}
                  onChange={(e) => this.onLugarChange(e.target.value)}
                ></input>
              ) : (
                <label>{this.state.nun.lugar}</label>
              )}
            </div>

            {/* localizacion */}
            <div className="edit-nun_form-fields-distribution">
              <label className="edit-nun_form-fields-label">Localización</label>
              {this.state.edit ? (
                <input
                  type="text"
                  className="form-control"
                  value={this.state.nun.localizacion}
                  onChange={(e) => this.onLocalizacionChange(e.target.value)}
                ></input>
              ) : (
                <label>{this.state.nun.localizacion}</label>
              )}
            </div>

            {/* web */}
            <div className="edit-nun_form-fields-distribution">
              <label className="edit-nun_form-fields-label">Web</label>
              {this.state.edit ? (
                <input
                  type="text"
                  className="form-control"
                  value={this.state.nun.web}
                  onChange={(e) => this.onWebChange(e.target.value)}
                ></input>
              ) : (
                <label>{this.state.nun.web}</label>
              )}
            </div>

            {/* inscripcion */}
            <div className="edit-nun_form-fields-distribution">
              <label className="edit-nun_form-fields-label">Inscripción</label>
              {this.state.edit ? (
                <input
                  type="text"
                  className="form-control"
                  value={this.state.nun.inscripcion}
                  onChange={(e) => this.onInscripcionChange(e.target.value)}
                ></input>
              ) : (
                <label>{this.state.nun.inscripcion}</label>
              )}
            </div>

            {/* latin */}
            <div className="edit-nun_form-fields-distribution">
              <label className="edit-nun_form-fields-label">Latin</label>
              {this.state.edit ? (
                <input
                  type="text"
                  className="form-control"
                  value={this.state.nun.latin}
                  onChange={(e) => this.onLatinChange(e.target.value)}
                ></input>
              ) : (
                <label>{this.state.nun.latin}</label>
              )}
            </div>

            {/* fechaObra */}
            <div className="edit-nun_form-fields-distribution">
              <label className="edit-nun_form-fields-label">Fecha obra</label>
              {this.state.edit ? (
                <input
                  type="text"
                  className="form-control"
                  value={this.state.nun.fechaObra}
                  onChange={(e) => this.onFechaObraChange(e.target.value)}
                ></input>
              ) : (
                <label>{this.state.nun.fechaObra}</label>
              )}
            </div>

            {/* Siglo */}
            <div className="edit-nun_form-fields-distribution">
              <label className="edit-nun_form-fields-label">Siglo</label>
              {this.state.edit ? (
                <input
                  type="text"
                  className="form-control"
                  value={this.state.nun.siglo}
                  onChange={(e) => this.onSigloChange(e.target.value)}
                ></input>
              ) : (
                <label>{this.state.nun.siglo}</label>
              )}
            </div>

            {/* Representacion */}
            <div className="edit-nun_form-fields-distribution">
              <label className="edit-nun_form-fields-label">
                Representación
              </label>
              {this.state.edit ? (
                <input
                  type="text"
                  className="form-control"
                  value={this.state.nun.representacion}
                  onChange={(e) => this.onRepresentacionChange(e.target.value)}
                ></input>
              ) : (
                <label>{this.state.nun.representacion}</label>
              )}
            </div>

            {/* anotaciones */}
            <div className="edit-nun_form-fields-distribution">
              <label className="edit-nun_form-fields-label">Anotaciones</label>
              {this.state.edit ? (
                <textarea
                  type="text"
                  className="form-control"
                  value={this.state.nun.anotaciones}
                  onChange={(e) => this.onAnotacionesChange(e.target.value)}
                ></textarea>
              ) : (
                <label>{this.state.nun.anotaciones}</label>
              )}
            </div>

            {/* bibliografia */}
            <div className="edit-nun_form-fields-distribution">
              <label className="edit-nun_form-fields-label">Bibliografia</label>
              {this.state.edit ? (
                <textarea
                  type="text"
                  className="form-control"
                  value={this.state.nun.bibliografia}
                  onChange={(e) => this.onBibliografiaChange(e.target.value)}
                ></textarea>
              ) : (
                <label>{this.state.nun.bibliografia}</label>
              )}
            </div>

            {/* buttons */}
            {this.state.edit && (
              <div className="edit-nun_form-buttons">
                <Button
                  className="edit-nun_form-buttons-width"
                  variant="outline-primary"
                  onClick={this.handleSave}
                >
                  Guardar
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

NunEdit.propTypes = {
  nun: PropTypes.object,
  onEditNun: PropTypes.func,
};

export default NunEdit;
