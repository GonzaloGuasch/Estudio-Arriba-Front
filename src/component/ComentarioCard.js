import React from 'react'
import '../css/ComentarioCard.css'

export default class ComentarioCard extends React.Component {

    render() {
        return (
            <div className={"card-container"}>
                Comentario Antiguo:
                <div className={"info-container"}>
                    Autor/a: {this.props.comentario.author}
                </div>
                <div className={"info-container"}>
                    Mensaje: {this.props.comentario.message}
                </div>
            </div>
        );
    }
}