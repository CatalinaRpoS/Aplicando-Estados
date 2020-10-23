import React from 'react';
import '../styles/styles.css';

class Navbar extends React.Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="/"><img src="https://img.icons8.com/bubbles/70/000000/filled-star.png"/>
                    <span className="font-weight-bold">Aprendamos Astronomía</span>
                    </a>
                </nav> 
            </div>
        );
    }
}

export default Navbar;