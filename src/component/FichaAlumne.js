import React from 'react'
import "../css/FichaAlumne.css"
import {asistenciaMes, pagosMes, sumarAsistenciaMes} from '../component/api'

export default class FichaAlumne extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dias: this.props.clase.diasQueSeDicta,
            mes: '',
            asistenciaDeMes: '',
            pago: ''
        };
        this.setMes = this.setMes.bind(this);
        this.buscarAsistencia = this.buscarAsistencia.bind(this);
        this.sumarAsistencia = this.sumarAsistencia.bind(this);
    }
    sumarAsistencia(){
        sumarAsistenciaMes({
            nombreClase: this.props.clase.nombreClase,
            nombreAlumne: this.props.alumne.nombreApellido,
            mesDeAsistencia: this.state.mes
        }).then(res => this.setState({
            asistenciaMes: res
        }))
    }
    buscarAsistencia(){
        asistenciaMes({
            nombreClase: this.props.clase.nombreClase,
            nombreAlumne: this.props.alumne.nombreApellido,
            mesDeAsistencia: this.state.mes
        }).then(res => this.setState({
            asistenciaMes: res
        }));
        pagosMes({
            nombreClase: this.props.clase.nombreClase,
            nombreAlumne: this.props.alumne.nombreApellido,
            mesDeAsistencia: this.state.mes
        }).then(res => this.setState({
            pago: res.montoPagado
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
                <div>Cantidad asistencias de mes: {this.state.asistenciaMes}
                    <input type="button" value={"+"} onClick={this.sumarAsistencia}/>
                    <input type="button" value={"-"} />
                </div>
                <div className="Pago-Container">
                    Pago:{this.state.pago} / {this.props.clase.precio}
                </div>
            </div>
        );
    }
}