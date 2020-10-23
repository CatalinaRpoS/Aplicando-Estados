import React from 'react';
import Navbar from './components/navbar';
import Info from './components/info';
import Footer from './components/footer';

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <Navbar/>
        <br/>
        <Info/>
        <br/>
        <Footer/>
      </div>
    );
  }
}

export default App;
