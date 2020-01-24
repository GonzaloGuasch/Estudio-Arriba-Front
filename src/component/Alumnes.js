import React, {Fragment} from 'react'
import '../css/Alumnes.css'
import Navbar from "./Navbar";
import {allAlumnes} from "./api";
import Alumne from "./Alumne";

export default class Alumnes extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            alumnes: []
        }
    }
    componentDidMount() {
        allAlumnes({}).then(res =>
        this.setState({
            alumnes: res
        }))
    }

    render() {
        const alumnesC = this.state.alumnes.map(alumne => <Alumne data={alumne} history ={this.props.history}/>);
        return(
            <Fragment>
               <Navbar/>
                <div>
                   Cantidad de alumnes: {this.state.alumnes.length}
                   <div>
                       {alumnesC}
                   </div>
                </div>
            </Fragment>
        )
    }

}