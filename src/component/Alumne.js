import React, {Fragment} from 'react'
import '../css/Alumne.css'

export default class Alumne extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
        this.mostrarClases = this.mostrarClases.bind(this)
    }
    mostrarClases(){
        this.props.history.push("/ClasesAlumne", {...this.props.data});
    }

    render() {
        return(
            <Fragment>
                <div className="Alumne-container">
                    <div>
                        <input type="button" value={this.props.data.nombreApellido} onClick={this.mostrarClases}/>
                    </div>
                </div>
            </Fragment>
        )
    }
}