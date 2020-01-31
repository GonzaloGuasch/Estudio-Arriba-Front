import React from 'react'
import Navbar from "./Navbar";
import {clasesDeAlumne, getAllComents} from "./api";
import FichaClase from "./FichaClase";
import FormComentario from "./FormComentario";
import ComentarioCard from "./ComentarioCard";


export default class ClasesDeAlumne extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            clases: [],
            alumne: this.props.location.state,
            comentarios: []
        }

    }
    componentDidMount() {
        clasesDeAlumne({
            nombreAlumne: this.props.location.state.nombreApellido
        }).then(res => this.setState({
            clases: res
        }))
        getAllComents({
            nombreAlumne: this.props.location.state.nombreApellido
        }).then(res => this.setState({
            comentarios: res
        }))
    }

    render() {
        const pagosClases = this.state.clases.map(clase => <FichaClase {...clase} alumne = {this.props.location.state.nombreApellido} />);
        const comentarios = this.state.comentarios.map(comentario => <ComentarioCard comentario = {comentario}/>)
        return(
            <div>
                <Navbar/>
                <div>
                    {this.state.alumne.nombreApellido}
                </div>
                <div>
                   direccion:  {this.state.alumne.direccion}
                </div>
                <div>
                    telefono-fijo: {this.state.alumne.telefonoFijo}
                </div>
                <div>
                    celular: {this.state.alumne.numeroCelular}
                </div>
                <br/>
                Clases anotadxs:

                {pagosClases}
                <div>
                    {comentarios}
                    <FormComentario alumne = {this.state.alumne.nombreApellido}/>
                </div>
            </div>
        )
    }
}