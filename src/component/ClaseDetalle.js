import React from 'react'
import '../css/ClaseDetalle.css'
import Navbar from "./Navbar";
import FichaAlumne from "./FichaAlumne";

export default class ClaseDetalle extends React.Component{


    render() {
        const fichasAlumnes = this.props.location.state.alumnesAnotados.map(alumne => <FichaAlumne alumne={alumne} clase = {this.props.location.state} />);
        return (
            <div>
                <Navbar/>
                    <div>Nombre de la clase: {this.props.location.state.nombreClase}</div>
                    <div>Profe: {this.props.location.state.profe}</div>
                    <div>Precio: {this.props.location.state.precio}</div>
                    <div>Alumnes anotades: {this.props.location.state.alumnesAnotados.length}
                    </div>
                    <div>
                        {fichasAlumnes}
                    </div>
                    <div></div>
            </div>
        );
    }
}