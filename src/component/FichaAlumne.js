import React from 'react'
import "../css/FichaAlumne.css"

export default class FichaAlumne extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dias: this.props.clase.diasQueSeDicta,
            pago: false
        }
    }

    render() {
        return (
            <div className="Ficha-container">
                <div>
                    {this.props.alumne.nombreApellido}
                    {console.log(this.props.clase.diasQueSeDicta)}
                </div>
                <div className="Dias-container">
                    <div className="UnDia-Container">{this.state.dias} 1</div>
                    <div className="UnDia-Container">{this.state.dias} 2</div>
                    <div className="UnDia-Container">{this.state.dias} 3</div>
                    <div>{this.state.dias} 4</div>
                </div>
                <div className="Dias-container">
                    <input type="radio" className="UnButton-Container"/>
                    <input type="radio" className="UnButton-Container"/>
                    <input type="radio" className="UnButton-Container"/>
                    <input type="radio" className="UnButton-Container"/>
                    100%
                </div>
                <div className="Pago-Container">
                    Pago: Si
                </div>
            </div>
        );
    }
}