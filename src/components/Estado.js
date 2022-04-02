import React, {Component} from "react";

//Como se pede heredar el estado de un componente padre a un hijo, podemos crear otro componente llamado:

function EstadoHijo(props){
    return(
        <div>
            <h2>
                {props.contadorHijo}
            </h2>
        </div>
    );
}

export default class Estado extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador: 0,
        };


        //setInterval nos ayuda a poner un contador que se actualiza cada segundo
        //Pero no se puede modificar un estado directamente, por eso usamos la propiedad setState
        //donde vamos a imprimir con "this" su nuevo estado:
        //"contador: this.state.contador +1"
        /*setInterval(() => {
            this.setState({
                contador: this.state.contador +1,
            })
        }, 1000); */

    };

    render(){
        return(
            <div>
                <h2>
                    El State
                </h2>
                <p2>
                    {this.state.contador}
                </p2>
                <EstadoHijo contadorHijo={this.state.contador}/>
            </div>
        );
    }
}