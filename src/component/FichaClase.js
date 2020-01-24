import React from 'react'
import '../css/FichaClase.css'
import {pagosAlumne, clasesDeAlumne} from "./api";


export default class FichaClase extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            mes: ''
        };
        this.setMes = this.setMes.bind(this);
        this.buscarPago = this.buscarPago.bind(this)
    }

    buscarPago(){
        pagosAlumne({
            nombreAlumne: "Gonzalo Guasch",
            nombreClase: "Prueba",
            mesDePago: "Enero"
        }).then(res => console.log(res))
    }
    setMes(event){
        this.setState({
            mes: event.target.value
        })
    }

    render() {
        return (
            <div className="FichaClase-Container">
                 {this.props.nombreClase}x
                <div>
                    Ver pagos
                </div>
                <div>
                    <input type="text" placeholder="Mes del pago" onChange={this.setMes} value={this.state.mes}/>
                    <input type="button" value="Buscar pago" onClick={this.buscarPago}/>
                </div>
            </div>
        );
    }
}