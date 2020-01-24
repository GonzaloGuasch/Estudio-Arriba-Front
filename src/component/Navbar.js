import React from 'react'
import '../css/Navbar.css'

export default class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        return(
            <div className="navbar-container">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Alumnes">Alumnes</a></li>
                    <li><a href="/Anotar">Anotar Alumne</a></li>
                    <li><a href="/AgregarClase">Agregar clase</a></li>
                    <li><a href="/AnotarAlumneAClase">Anotar alumne a clase</a></li>
                    <li><a href="/SacarDeClase">Sacar alumne de clase</a></li>
                </ul>
            </div>
        )
    }
}