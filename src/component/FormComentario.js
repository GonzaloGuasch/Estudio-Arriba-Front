import React from 'react'
import '../css/FormComentario.css'
import {saveComent} from '../component/api'

export default class FormComentario extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            author: ''
        }
        this.setMessage = this.setMessage.bind(this);
        this.setAuthor = this.setAuthor.bind(this);
        this.borrarComentarioYAuthor = this.borrarComentarioYAuthor.bind(this);
        this.enviarComentario = this.enviarComentario.bind(this);
        this.salioBien = this.salioBien.bind(this);
    }
    salioBien(res){
        this.borrarComentarioYAuthor();
        alert("El mensaje se envio correctamente " + res.author + "!");
    }
    enviarComentario(){
        console.log(this.props.alumne);
        console.log(this.state.author);
        console.log(this.state.message);
        saveComent({
            nombreAlumne:  this.props.alumne,
            author: this.state.author,
            message: this.state.message
        }).then(res => this.salioBien(res))
    }
    borrarComentarioYAuthor(){
        this.setState({
            message: '',
            author: ''
        })
    }
    setMessage(event){
        this.setState({
            message: event.target.value
        })
    }
    setAuthor(event){
        this.setState({
            author: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form action="" className={"form-container"}>
                    <div>
                    Autor/a del comentario:
                    <input type="text" value={this.state.author} onChange={this.setAuthor}/>
                    </div>
                    <div>
                    Comnetario:
                    <input type="text" className={"comentario-container"} value={this.state.message} onChange={this.setMessage}/>
                    </div>
                    <input type="button" value={"enviar comentario"} className={"enviar-button"} onClick={this.enviarComentario}/>
                    <input type="button" value={"borrar comentario"} className={"borrar-button"} onClick={this.borrarComentarioYAuthor}/>
                </form>
            </div>
        );
    }

}