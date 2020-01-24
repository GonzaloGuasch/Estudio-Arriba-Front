import React, {Fragment} from 'react'
import '../css/Home.css'
import Navbar from "./Navbar";
import Clase from '../component/Clase'
import {todasClases} from '../component/api'
import '../css/Home.css'

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            clases: []
        }
    }
    componentDidMount() {
        todasClases({}).then(res => this.setState({clases: res}))
    }
    render() {
        const clasesC = this.state.clases.map(clase => <Clase data={clase} historial ={this.props.history}/>);
        return(
            <Fragment>
                <Navbar/>
                    <div>Estudio Arriba</div>
                        <div className="clases-container">
                            {clasesC}
                        </div>
            </Fragment>
        )
    }
}