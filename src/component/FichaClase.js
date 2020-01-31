import React from 'react'
import '../css/FichaClase.css'
import {asistenciaMes, registrarPAgo, fechaAsistenciaMes} from "./api";


export default class FichaClase extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            mes: '',
            monto:''

        };
        this.setMes = this.setMes.bind(this);
        this.setMonto = this.setMonto.bind(this);
        this.mostrarFechas = this.mostrarFechas.bind(this);
        this.registrarPago = this.registrarPago.bind(this);
    }
    registrarPago(){
        registrarPAgo({
            nombreAlumne: this.props.alumne,
            montoPagado: parseInt(this.state.monto),
            mesAPagar: this.state.mes,
            claseAPagar: this.props.nombreClase
        }).catch(e => alert("No se pudo registra el pago, el mes y el monto no pueden estar vacios"))
            .then(res => alert("Se registro correctamente el pago"))

    }
    mostrarFechas(){
        fechaAsistenciaMes({
            nombreAlumne: this.props.alumne,
            nombreClase: this.props.nombreClase,
            mesDeAsistencia: this.state.mes
        }).then(res => alert(res))
    }

    setMonto(event){
        this.setState({
            monto: event.target.value
        })
    }
    setMes(event){
        this.setState({
            mes: event.target.value
        })
    }

    render() {
        return (
            <div className="FichaClase-Container">
                 {this.props.nombreClase}
                <div>
                    Registrar Pagos
                </div>
                <div>
                    <input type="text" placeholder="Mes del pago/asistencia" onChange={this.setMes} value={this.state.mes}/>
                    <input type="text" placeholder="Monto a pagar" onChange={this.setMonto} value={this.state.monto}/>
                    <input type="button" value="registrar pago" onClick={this.registrarPago}/>
                    <input type="button" value="Ver fecha de asitencia mes" onClick={this.mostrarFechas}/>
                </div>
            </div>
        );
    }
}