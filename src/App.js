import React, { Component } from 'react';
import Header from './components/Header'; 
import Apropos from './components/Apropos'; 
import Services from './components/Services';
import Footer from './components/Footer'; 
import { HashRouter } from "react-router-dom";
class App extends Component { 

  render() {
    return ( 
      <HashRouter basename={process.env.PUBLIC_URL}>
        <div> 
          <Header /> 
          <div class="container" >
            <Apropos />
            <Services /> 
          </div>
          <Footer /> 
        </div>
      </HashRouter>
    ); 
  }
 
}

export default App;
