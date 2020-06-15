import React, { Component } from 'react';
import Header from './components/Header'; 
import Apropos from './components/Apropos'; 
import Services from './components/Services';
import Footer from './components/Footer'; 

class App extends Component { 

  render() {
    return ( 
      <div> 
        <Header /> 
        <div class="container" >
          <Apropos />
          <Services /> 
        </div>
        <Footer /> 
      </div>
     
    ); 
  }
 
}

export default App;
