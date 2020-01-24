import React, {Fragment} from 'react'
import '../css/Alumne.css'

export default class Alumne extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
        this.mostrarClases = this.mostrarClases.bind(this)
    }
    mostrarClases(){
        //this.props.history.push("/ClasesAlumne")
        this.props.history.push("/ClasesAlumne", {...this.props.data})
        console.log(this.props)
    }

    render() {
        return(
            <Fragment>
                <div className="Alumne-container">
                    <div>
                       Nombre: {this.props.data.nombreApellido}
                    </div>
                    <div>
                       Direccion: {this.props.data.direccion}
                    </div>
                    <div>
                        Fecha nacimiento: {this.props.data.fecha_nacimiento}
                    </div>
                    <div>
                        Telefono fijo: {this.props.data.telefonoFijo}
                    </div>
                    <div>
                        <input type="button" value="Ver clases anotadx" onClick={this.mostrarClases}/>
                    </div>
                </div>
            </Fragment>
        )
    }
}