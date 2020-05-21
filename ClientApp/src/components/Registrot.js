import React, { Component } from 'react';
import ReactBootstrap from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Component } from 'react-bootstrap';

import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './NavMenu.css';
import axios from 'axios';


const baseUrl = "localhost:44361/counter"

export default class Registrot extends Component {

    
        constructor(props) {
            super(props);
            this.state = {
                tienda: [],
                textbusqueda: "",
                formNombre: "",
                formdescripcion: "",
                formvalor: "",
                formtienda: 0,
                formNombre_pro: "",
                formimagen: null,
                formfechaapertura: "",
                formcamaracomercio: "",
            }
            this.handleChangeNombre = this.handleChangeNombre.bind(this);
            this.handleChangecamaracomercio = this.handleChangecamaracomercio.bind(this);
            this.handleChangefechaapertura = this.handleChangefechaapertura.bind(this);
            this.handleChangetienda = this.handleChangetienda.bind(this);
            this.handleChangeDescp = this.handleChangeDescp.bind(this);
            this.handleChangeNombre_pro = this.handleChangeNombre_pro.bind(this);
            this.handleChangevalor = this.handleChangevalor.bind(this);
            this.handleChangeimagen = this.handleChangeimagen.bind(this);



        }

       

        handleChangeNombre(event) {
            this.setState({ formNombre: event.target.value });
        }

        handleChangecamaracomercio(event) {
            this.setState({ formcamaracomercio: event.target.value });
        }

        handleChangefechaapertura(event) {
            this.setState({ formfechaapertura: event.target.value });
        }

        handleChangetienda(event) {
            this.setState({ formtienda: event.target.value });
        }
        handleChangeNombre_pro(event) {
            this.setState({ formNombre_pro: event.target.value });
        }

        handleChangeDescp(event) {
            this.setState({ formdescripcion: event.target.value });
        }


        handleChangevalor(event) {
            this.setState({ formvalor: event.target.value });
        }
        handleChangeimagen(event) {
            this.setState({
                formimagen: URL.createObjectURL(event.target.files[0])
            })
        }
        componentDidMount() {

            axios.get(baseUrl + '/tienda').then(response => {
                this.setState({ tienda: response.data })
            }).catch(error => {
                alert("Error " + error)
            })
        }



        render() {
   

            return (

                <div class="container">
                    <h3>Tiendas</h3>
                    <hr />
                    <form method="POST" enctype="multipart/form-data" >
                        <input type="hidden" name="_token" value="{{csrf_token}}" />
                        <div class="modal fade" id="productoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Formulario de producto</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Nombre de producto </label>
                                            <input type="text" class="form-control" value={this.state.formNombre_pro} onChange={this.handleChangeNombre_pro} />
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Descripcion de producto</label>
                                            <textarea class="form-control" rows="2" value={this.state.formdescripcion} onChange={this.handleChangeDescp}></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Precio</label>
                                            <input type="number" class="form-control" value={this.state.formvalor} onChange={this.handleChangevalor} />
                                        </div>
                                        <div class="form-group">
                                            <input type="file" onChange={this.handleChange} />
                                            <img src={this.state.file} />
                                        </div>

                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>

                                        {
                                            this.state.edit ?
                                                <button type="button" class="btn btn-primary" onClick={() => this.sendNetworkUpdate()}>Actualizar</button>
                                                :
                                                <button type="button" class="btn btn-primary" onClick={() => this.sendNProduct()}>Guardar</button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal title</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <p>Modal body text goes here.</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary">Close</Button>
                            <Button variant="primary">Save changes</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>

            );
        }

  
        showModalEdit(data) {
            //alert("mostrar modal "+JSON.stringify(data))
            this.setState({
                formtienda: data.camaracomercio,
                edit: true
            })
                ("#tiendaModal").modal("show");
       
    
           
    
    }
}