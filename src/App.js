import React from 'react';
import Navbar from './components/navbar';
import Info from './components/info';
import Footer from './components/footer';
import Credits from './components/credits';

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <Navbar/>
        <br/>
        <Info/>
        <br/>
        <Credits/>
        <br/>
        <Footer/>
      </div>
    );
  }
}

export default App;
