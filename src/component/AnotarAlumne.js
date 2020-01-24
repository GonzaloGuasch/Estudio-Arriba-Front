import React, {Fragment} from 'react'
import Navbar from "./Navbar";
import "../css/Anotar.css"
import {agregarAlumne, anotarClase} from "./api";

export default class AnotarAlumne extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nombre_apellido: '',
            fecha_nacimiento: '',
            dni: '',
            domicilio: '',
            telefono_fijo: '',
            telefono_celular: '',
            email: '',
            red_social: '',
            sufrio_accidente: false,
            telefono_emergencia_uno: '',
            telefono_emergencia_dos: '',
            comentarios: '',
            errorMessage: '',
            claseQueSeAnota: ''
        };
        this.setNombreApellido = this.setNombreApellido.bind(this);
        this.setFechaNacimiento = this.setFechaNacimiento.bind(this);
        this.setDomicilio = this.setDomicilio.bind(this);
        this.setTelefonoFijo = this.setTelefonoFijo.bind(this);
        this.setTelefonoCelular = this.setTelefonoCelular.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setRedSocial = this.setRedSocial.bind(this);
        this.setTelefonoEmergenciaUno = this.setTelefonoEmergenciaUno.bind(this);
        this.setTelefonoEmergenciaDos = this.setTelefonoEmergenciaDos.bind(this);
        this.setDni = this.setDni.bind(this);
        this.setComentarios = this.setComentarios.bind(this);
        this.checkInputs = this.checkInputs.bind(this);
        this.esInputVacio = this.esInputVacio.bind(this);
        this.cleanInputs = this.cleanInputs.bind(this);
        this.informarAUsuario = this.informarAUsuario.bind(this);
        this.setClaseQueSeAnota = this.setClaseQueSeAnota.bind(this);
        this.anotarAlumne = this.anotarAlumne.bind(this);
    }

    anotarAlumne(res){
        anotarClase({
            "nombre_alumne": this.state.nombre_apellido,
            "nombre_clase":  this.state.claseQueSeAnota
        }).then(res => console.log(res));
        this.informarAUsuario(res);
        this.cleanInputs()
    }
    informarAUsuario(api_res){
        if(typeof api_res.id === 'number'){
            alert("Se registro con exito el alumne: " + api_res.nombreApellido + " !")
        }
    }
    cleanInputs(){
        this.setState({
            nombre_apellido: '',
            fecha_nacimiento: '',
            dni: '',
            domicilio: '',
            telefono_fijo: '',
            telefono_celular: '',
            email: '',
            red_social: '',
            sufrio_accidente: false,
            telefono_emergencia_uno: '',
            telefono_emergencia_dos: '',
            comentarios: '',
            errorMessage: '',
            claseQueSeAnota: ''
        })
    }
    esInputVacio(input){
        return input.trim().length < 1
    }
    checkInputs(){
        if(this.esInputVacio(this.state.nombre_apellido) ||
            this.esInputVacio(this.state.dni) ||
            this.esInputVacio(this.state.domicilio) ||
            this.esInputVacio(this.state.telefono_fijo) ||
            this.esInputVacio(this.state.email) ||
            this.esInputVacio(this.state.telefono_emergencia_uno)
        ){
            this.setState({errorMessage: 'Hay campos vacios'})

        }else{
            agregarAlumne({
                "nombre_apellido": this.state.nombre_apellido,
                "fecha_nacimiento": this.state.fecha_nacimiento,
                "direccion": this.state.domicilio,
                "telefono_fijo": this.state.telefono_fijo,
                "numero_celular": this.state.telefono_celular,
                "user_instagram": this.state.red_social,
                "sufrio_accidente": this.state.sufrio_accidente
            }).then(res => this.anotarAlumne(res));
        }
    }
    setClaseQueSeAnota(event){
        this.setState({
            claseQueSeAnota: event.target.value
        })
    }
    setDni(event){
        this.setState({
            dni: event.target.value
        })
    }
    setComentarios(event){
        this.setState({
            comentarios: event.target.value
        })
    }
    setTelefonoEmergenciaDos(event){
        this.setState({
            telefono_emergencia_dos: event.target.value
        })
    }
    setTelefonoEmergenciaUno(event){
        this.setState({
            telefono_emergencia_uno: event.target.value
        })
    }
    setRedSocial(event){
        this.setState({
            red_social: event.target.value
        })
    }
    setEmail(event){
        this.setState({
            email: event.target.value
        })
    }
    setTelefonoCelular(event){
        this.setState({
            telefono_celular: event.target.value
        })
    }
    setTelefonoFijo(event){
        this.setState({
            telefono_fijo: event.target.value
        })
    }
    setDomicilio(event){
        this.setState({
            domicilio: event.target.value
        })
    }
    setFechaNacimiento(event){
        this.setState({
            fecha_nacimiento: event.target.value
        })
    }
    setNombreApellido(event){
        this.setState({
            nombre_apellido: event.target.value
        })
    }

    render() {
        return(
            <Fragment>
            <Navbar/>
            <div className="Register-Container">

                <div>
                    <input type="text"  placeholder="nombre y apellido"
                                        onChange={this.setNombreApellido}
                                        value={this.state.nombre_apellido}/>
                </div>
                <div>
                    <input type="text"  placeholder= "DNI"
                           onChange={this.setDni}
                           value={this.state.dni}/>
                </div>
                <div>
                    <input type="text"  placeholder="fecha nacimiento"
                                        onChange={this.setFechaNacimiento}
                                        value={this.state.fecha_nacimiento}/>
                </div>
                <div>
                    <input type="text"  placeholder="Domicilio"
                                        onChange={this.setDomicilio}
                                        value={this.state.domicilio}/>
                </div>
                <div>
                    <input type="text"  placeholder="Telefono fijo"
                                        onChange={this.setTelefonoFijo}
                                        value={this.state.telefono_fijo}/>
                </div>
                <div>
                    <input type="text"  placeholder="Telefono celular"
                                        onChange={this.setTelefonoCelular}
                                        value={this.state.telefono_celular}/>
                </div>
                <div>
                    <input type="text"  placeholder="Email"
                                        onChange={this.setEmail}
                                        value={this.state.email}/>
                </div>
                <div>
                    <input type="text"  placeholder="Red social"
                                        onChange={this.setRedSocial}
                                        value={this.state.red_social}/>
                </div>
                <div>
                    <input type="text"  placeholder="Clase que se anota"
                           onChange={this.setClaseQueSeAnota}
                           value={this.state.claseQueSeAnota}/>
                </div>
                <div>
                    <input type="text" placeholder="Sufrio accidente"/>
                </div>
                <div>
                   DATOS EN CASO DE EMERGENCIA
                </div>

                <div>
                    <input type="text"  placeholder="Telefono emergencia 1"
                                        onChange={this.setTelefonoEmergenciaUno}
                                        value={this.state.telefono_emergencia_uno}/>
                </div>
                <div>
                    <input type="text"  placeholder="Telefono emergencia 2"
                                        onChange={this.setTelefonoEmergenciaDos}
                                        value={this.state.telefono_emergencia_dos}/>
                </div>
                <div>
                    <input type="text"  placeholder="Comentarios"
                                        onChange={this.setComentarios}
                                        value={this.state.comentarios}/>
                </div>
                <div>
                    <input type="button" value="Registrar" onClick={this.checkInputs}/>
                    <input type="button" value="Cancelar" onClick={this.cleanInputs}/>
                </div>
                <div>
                    {this.state.errorMessage}
                </div>
            </div>
            </Fragment>
        )
    }
}