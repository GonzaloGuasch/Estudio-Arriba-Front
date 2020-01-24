import React from 'react'
import "../css/FichaAlumne.css"
import {asistenciaMes} from '../component/api'

export default class FichaAlumne extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dias: this.props.clase.diasQueSeDicta,
            pago: false,
            mes: '',
            asistenciaDeMes: '',
            pago: ''
        };
        this.setMes = this.setMes.bind(this);
        this.buscarAsistencia = this.buscarAsistencia.bind(this);
    }
    buscarAsistencia(){
        asistenciaMes({
            nombreClase: this.props.clase.nombreClase,
            nombreAlumne: this.props.alumne.nombreApellido,
            mesDeAsistencia: this.state.mes
        }).then(res => this.setState({
            asistenciaMes: res
        }))
    }
    setMes(event){
        this.setState({
            mes: event.target.value
        })
    }
    render() {
        return (
            <div className="Ficha-container">
                <div>
                    {this.props.alumne.nombreApellido}
                </div>
                <div className="Dias-container">
                    <input type="text" placeholder={"Info de mes"} onChange={this.setMes} value={this.state.mes}/>
                    <input type="button" value={"Buscar info"} onClick={this.buscarAsistencia}/>

                </div>
                <div>Cantidad asistencias de mes: {this.state.asistenciaMes}</div>
                <div className="Pago-Container">
                    Pago:{this.state.pago}
                </div>
            </div>
        );
    }
}