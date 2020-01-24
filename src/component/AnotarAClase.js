import React from 'react'
import Navbar from "./Navbar";
import {anotarClase} from "./api";

export default class AnotarClase extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            nombreAlumne: '',
            nombreClase: ''
        };
        this.setAlumne = this.setAlumne.bind(this);
        this.setClase = this.setClase.bind(this);
        this.anotarAlGuey = this.anotarAlGuey.bind(this);
        this.cleanInputs = this.cleanInputs.bind(this);
        this.avisar = this.avisar.bind(this);
        this.avisarError = this.avisarError.bind(this)
    }

    avisar(res){
        alert("El/La alumne " + this.state.nombreAlumne + " se anoto correctamente en la clase " + this.state.nombreClase);
        this.cleanInputs();
    }
    avisarError(error){
        alert("Fallo la inscripción, el nombre del alumne o de la clase estan mal escritos")
    }
    cleanInputs(){
        this.setState({
            nombreAlumne: '',
            nombreClase: ''
        })
    }
    anotarAlGuey(){
        anotarClase({
            "nombre_alumne": this.state.nombreAlumne,
            "nombre_clase":  this.state.nombreClase
        }).then(res => this.avisar(res))
            .catch(e => this.avisarError(e))

    }
    setAlumne(event){
        this.setState({
            nombreAlumne: event.target.value
        })
    }
    setClase(event){
        this.setState({
            nombreClase: event.target.value
        })
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div>
                    <input type="text" value={this.state.nombreAlumne} placeholder={"Nombre Alumne"} onChange={this.setAlumne}/>
                </div>
                <div>
                    <input type="text" value={this.state.nombreClase} placeholder={"Nombre clase"}  onChange={this.setClase}/>
                </div>
                <div>
                    <input type="button" value={"aceptar"} onClick={this.anotarAlGuey}/>
                    <input type="button" value={"cancelar"} onClick={this.cleanInputs}/>
                </div>
            </div>
        );
    }
}