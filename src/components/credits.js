import React from 'react';
import '../styles/styles.css';

class Credits extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h5>Conoce más:</h5>
                        <ul>
                            <li><a className="text" href="https://iconos8.es/icons/">¡Prueba estos iconos!</a></li>
                            <li><a className="text" href="https://www.astromia.com/universo/clasestrellas.htm">Aprende más sobre las clases de estrellas</a></li>
                            <li><a className="text" href="http://cienoticias.blogspot.com/2011/10/como-se-clasifican-las-estrellas.html">Aprende más sobre las clases de estrellas</a></li>
                            <li><a className="text" href="https://es.wikipedia.org/wiki/Naos_(estrella)">Curiosidades sobre el nombre de una estrella</a></li>
                        </ul>      
                    </div>
                </div>
            </div>
        );
    }
}

export default Credits;