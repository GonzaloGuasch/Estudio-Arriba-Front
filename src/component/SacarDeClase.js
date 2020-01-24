import React from 'react'
import Navbar from "./Navbar";
import {dejarClase} from "./api";

export default class SacarDeClase extends React.Component{
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
    }

    avisar(){
        alert("El/La alumne " + this.state.nombreAlumne + " ya no esta mas en la clase " + this.state.nombreClase);
        this.cleanInputs();
    }
    cleanInputs(){
        this.setState({
            nombreAlumne: '',
            nombreClase: ''
        })
    }
    anotarAlGuey(){
        dejarClase({
            "nombre_alumne": this.state.nombreAlumne,
            "nombre_clase":  this.state.nombreClase
        }).then(res => this.avisar())

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