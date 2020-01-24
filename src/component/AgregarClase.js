import React, {Fragment} from 'react'
import '../css/AgregarClase.css'
import Navbar from "./Navbar";
import { Multiselect } from 'multiselect-react-dropdown';
import {agregarClase} from "./api"

export default class AgregarClase extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nombreClase: '',
            nombre_profesor: '',
            precio_clase: '',
            cantidad_de_cupos: '',
            diasSeleccionados: []
        };
        this.onSelect = this.onSelect.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.agregar = this.agregar.bind(this);
        this.setNombreClase = this.setNombreClase.bind(this);
        this.setNombreProfe = this.setNombreProfe.bind(this);
        this.setPrecio = this.setPrecio.bind(this);
        this.setCupos = this.setCupos.bind(this);
        this.darInfo = this.darInfo.bind(this);
        this.avisarDeError = this.avisarDeError.bind(this);
        this.cleanInput = this.cleanInput.bind(this);

    }
    avisarDeError(error){
        alert("Hubo un problema, no se puedo agregar la clase")
    }

    darInfo(respuesta){
        if(typeof respuesta.id === 'number'){
            alert("Se agrego correctamente la clase " + respuesta.nombreClase + "!");
            this.cleanInput()
        }else{
            alert("Hubo un problema, no se pudo registrar la clase")
        }

    }
    cleanInput(){
        this.setState({
            nombreClase: '',
            nombre_profesor: '',
            precio_clase: '',
            cantidad_de_cupos: '',
            diasSeleccionados: []
        })
    }
    setCupos(event){
        this.setState({
            cantidad_de_cupos: event.target.value
        })
    }
    setPrecio(event){
        this.setState({
            precio_clase: event.target.value
        })
    }
    setNombreProfe(event){
        this.setState({
            nombre_profesor: event.target.value
        })
    }
    setNombreClase(event){
        this.setState({
            nombreClase: event.target.value
        })
    }
    agregar(){
        agregarClase({
            "nombre_clase": this.state.nombreClase,
            "nombre_profesor": this.state.nombre_profesor,
            "precio_clase": this.state.precio_clase,
            "dias_de_semana": this.state.diasSeleccionados,
            "cantidad_de_cupos": this.state.cantidad_de_cupos
        }).then(res => this.darInfo(res))
            .catch(e => this.avisarDeError(e))
    }
    onSelect(optionsList, selectedItem) {
        this.setState({
            diasSeleccionados: optionsList
        })
    }
    onRemove(optionList, removedItem) {
        this.setState({
            diasSeleccionados: optionList
        })
    }
    render() {
        return(
            <Fragment>
                <Navbar/>
                     <div>
                        <input type="text"  placeholder="Nombre de la clase"
                                            onChange={this.setNombreClase}
                                            value={this.state.nombreClase}/>
                    </div>
                    <div>
                        <input type="text"  placeholder="Nombre del/la profesor/a"
                                            onChange={this.setNombreProfe}
                                            value={this.state.nombre_profesor}/>
                    </div>
                    <div>
                        <input type="text"  placeholder="Precio"
                                            onChange={this.setPrecio}
                                            value={this.state.precio_clase}/>
                    </div>
                    <div>
                        <input type="text"  placeholder="Cantidad de cupos"
                                            onChange={this.setCupos}
                                            value={this.state.cantidad_de_cupos}/>
                    </div>
                    <div className="dropdown">
                        <Multiselect
                            options={["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]}
                            isObject={false}
                            onSelect={this.onSelect}
                            onRemove={this.onRemove}
                        />
                    </div>
                    <div>
                        <input type="button" value="accept" onClick={this.agregar}/>
                        <input type="button" value="cancel" onClicl={this.cleanInput}/>
                   </div>
            </Fragment>
        )
    }
}