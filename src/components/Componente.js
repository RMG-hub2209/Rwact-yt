import React, {Component} from "react";


/****Componente funcional****/
//Función expresada
const Componente = props => <h2>{props.msg}</h2>
//Función declarada
// function Componente(props){
//     return <h2>{props.msg}</h2>
// }

/****Componentes de clases****/
// class Componente extends Component{
//     render(){
//         return <h2>{this.props.msg}</h2>;
//     }
// }

export default Componente;