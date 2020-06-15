import React from 'react';

const Header = () => {
   
    return (
        <header id="accueil">
            <nav class="navbar" style={{ position: 'fixed' }}>
                <div class="logo">
                    <a href="#accueil">PAPI</a>
                </div>

                <ul>
                    <li><a  href="#apropos">A Propos</a></li>
                    <li><a  href="#services">Services</a></li>
                    <li><a  href="#contact">Contacts</a></li>
                </ul>

                <button class="navbar-toggle ">
                    <span></span>
                </button>
            </nav>

            <div class="text container">
                <p> Hello my name is Pape Mor LO </p>
                <h1> FULL STACK WEB DEVELOPPER AND MOBILE</h1>
                <p>creating modern and responsive application</p>
            </div>
          
        </header>
    )

}

export default Header; 

