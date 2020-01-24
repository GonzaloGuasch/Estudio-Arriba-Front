import React from 'react'
import '../css/Clase.css'

export default class Clase extends React.Component{
    constructor(props){
        super(props);
        this.state = {};

        this.claseEnDetalle = this.claseEnDetalle.bind(this)
    }
    claseEnDetalle(){
        this.props.historial.push("/ClaseDetalle", {...this.props.data})
    }
    render() {
        return(
            <div className="clase-container">
                <div className="nombre-container">
                    {this.props.data.nombreClase}
                </div>
                <div className="profesor-container">
                    Profesxr {this.props.data.profe}
                </div>
                <div className="profesor-container">

                </div>
                <div >
                    <input className="button-container" type="button" value="ver mas" onClick={this.claseEnDetalle}/>
                </div>
            </div>
        )
    }
}