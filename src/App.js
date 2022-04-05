import React from 'react';
import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import Eventos from './components/Eventos';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </section>
        <section>
        <Componente msg="Soy un componente funcional expresado desde props"/>
        <hr></hr>
        <Propiedades 
        cadena = "Esto es una cadena"
        numero = {20}
        boolean = {false}
        arreglo = {[1, 2, 3]}
        funcion = {(num) => num*num}
        objeto = {{nombre:"Rm", correo:"acm1pt"}}
        elementoReact = {<i>Es un elemento react</i>}
        componenteReact = {<Componente msg="Soy un componente dentro de otro componente pasado por Props"/>}
        />
        <hr></hr>
        <Estado></Estado>
        <hr></hr>
        <RenderizadoCondicional />
        <hr></hr>
        <RenderizadoElementos></RenderizadoElementos>
        <hr></hr>
        <Eventos></Eventos>
      </section>
      </header>
    </div>
  );
}

export default App;
