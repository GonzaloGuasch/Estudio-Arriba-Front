import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./Home";
import AnotarAlumne from "./AnotarAlumne";
import Alumnes from "./Alumnes";
import AgregarClase from "./AgregarClase";
import ClaseDetalle from "./ClaseDetalle";
import AnotarAClase from "./AnotarAClase";
import SacarDeClase from "./SacarDeClase";
import ClasesDeAlumne from "./ClasesDeAlumne";

export default class EstudioRouter extends React.Component{
    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path="/" render={(routeProps) => <Home {...routeProps} /> } />
                    <Route exact path="/Anotar" component={AnotarAlumne}/>
                    <Route exact path="/Alumnes" render={(routeProps) => <Alumnes {...routeProps} /> } />
                    <Route exact path="/AgregarClase" component = {AgregarClase} />
                    <Route exact path="/ClaseDetalle" component = {ClaseDetalle}/>
                    <Route exact path="/AnotarAlumneAClase" component = {AnotarAClase} />
                    <Route exact path="/SacarDeClase" component = {SacarDeClase} />
                    <Route exact path="/ClasesAlumne" component ={ClasesDeAlumne} />

                </Switch>
            </Router>
    )}
}