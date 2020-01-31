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
            fechaAsistencia: '',
            pago: '',
            error: ''
        };
        this.setMes = this.setMes.bind(this);
        this.buscarAsistencia = this.buscarAsistencia.bind(this);
        this.setearFecha = this.setearFecha.bind(this);
        this.sumarAsistencia = this.sumarAsistencia.bind(this);
    }

    setearFecha(event){
        this.setState({
            fechaAsistencia: event.target.value
        })
    }
    sumarAsistencia(){
        this.setState({
            error: ''
        })
        sumarAsistenciaMes({
            nombreClase: this.props.clase.nombreClase,
            nombreAlumne: this.props.alumne.nombreApellido,
            mesDeAsistencia: this.state.mes,
            fecha: this.state.fechaAsistencia
        }).catch(e => this.setState({error: 'ya asistio a todas las clases del mes'}))
            .then(res => this.setState({
            asistenciaMes: res
        }))
    }
    buscarAsistencia(){
        this.setState({
            error: ''
        })
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
                    <a href="asd">{this.props.alumne.nombreApellido}</a>
                </div>
                <div className="Dias-container">
                    <input type="text" placeholder={"Info de mes"} onChange={this.setMes} value={this.state.mes}/>
                    <input type="button" value={"Buscar info"} onClick={this.buscarAsistencia}/>

                </div>
                <div>Cantidad asistencias de mes: {this.state.asistenciaMes}
                    <div> Registrar asistencia:
                    <input type="date" onChange = {this.setearFecha} value={this.state.fechaAsistencia}/>
                        <input type="button" value={"Registrar"} onClick={this.sumarAsistencia}/>
                    </div>
                    <div>
                        {this.state.error}
                    </div>
                </div>
                <div className="Pago-Container">
                    Pago:{this.state.pago} / {this.props.clase.precio}
                </div>
            </div>
        );
    }
}