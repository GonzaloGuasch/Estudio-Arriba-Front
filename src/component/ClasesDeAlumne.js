import React from 'react'
import Navbar from "./Navbar";
import {clasesDeAlumne} from "./api";
import FichaClase from "./FichaClase";


export default class ClasesDeAlumne extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            clases: []
        }

    }
    componentDidMount() {
        clasesDeAlumne({
            nombreAlumne: this.props.location.state.nombreApellido
        }).then(res => this.setState({
            clases: res
        }))
    }

    render() {
        const pagosClases = this.state.clases.map(clase => <FichaClase {...clase} alumne = {this.props.location.state.nombreApellido} />);
        return(
            <div>
                <Navbar/>
                Clases anotados:

                {pagosClases}
            </div>
        )
    }
}