import React from 'react';
import lista1 from '../server/lista1.json';
import lista2 from '../server/lista2.json';
import lista3 from '../server/lista3.json';

class Info extends React.Component{
    state={
        lista: [{
          clase: "",
          color: "",
          temperatura: "",
          estrella: ""
        }],
        lista1: lista1
      }
      render(){
        const {lista}= this.state;
        return(
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className="text-center">Clasificación de las Estrellas</h1>
                <br/>
                <p>La clasificación de las estrellas se dio gracias al estudio fotográfico de los espectros estelares, 
                   realizado por Edward Pickering y Annie J. Cannon a partir del año 1885, en el observatorio del Harvard
                   College. 
                </p>
                <p>A partir de este estudio se determinó que los espectros de las estrellas están dados en una secuencia,
                  de acuerdo a la intensidad de algunas líneas de absorción de elementos químicos. Además, por medio de la
                  observación de estos espectros se pueden establecer características de las estrellas, tales como su
                  edad y su grado de desarrollo.
                </p>
                <p>La secuencia de los espectros de las estrellas está ordenada en siete clases, las cuales pueden tener
                  un subíndice entre 0 y 9 según sus características individuales. A continuación se explicarán brevemente
                  cada una de las clases del espectro de las estrellas:
                </p>
                <ul className="list-group">
                  {lista3.map((star)=>
                  <li className="list-group-item list-group-item-primary"><h5>{star.clase}</h5>{star.descripcion}</li>)}
                </ul>
                <br/>
                <h1 className="text-center">Ejemplos de la Clasificación de las Estrellas</h1>
                <br/>
                <p>Presiona alguno de los botones que encontrarás a continuación para que descubras las estrellas
                  que se ocultan detrás de la tarjeta.
                </p>
                <button type="button" onClick={()=>this.setState({lista:lista1})} className="btn btn-info btn-lg" id="but1">Ejemplo 1</button>
                <button type="button" onClick={()=>this.setState({lista:lista2})} className="btn btn-info btn-lg" id="but2">Ejemplo 2</button>
                <br/>
                <br/>
                {lista.map((object)=>
                <div className="card mb-3 alert-primary">
                <div className="row no-gutters">
                  <div className="col">
                    <div className="card-body">
                      <h5 className="card-title">Clase: {object.clase}</h5>
                      <p className="card-text">Color: {object.color} <br/> Temperatura: {object.temperatura} <br/> Estrella: {object.estrella}</p>
                    </div>
                  </div>
                </div>
              </div>)}  
              <br/>
              <h5>Créditos:</h5> 
              <ul>
                <li>https://iconos8.es/icons/</li>
                <li>https://www.astromia.com/universo/clasestrellas.htm</li>
                <li>http://cienoticias.blogspot.com/2011/10/como-se-clasifican-las-estrellas.html</li>
                <li>https://es.wikipedia.org/wiki/Naos_(estrella)</li>
              </ul>         
              </div>
            </div>
          </div>
        );
      }
    }

export default Info;