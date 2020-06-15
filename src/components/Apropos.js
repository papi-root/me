import React from 'react';
import profile from '../profile.JPG'; 

const Apropos = () => {
    return (
        <div>
            <div id="apropos" style={{ height: '10vh' }}></div>

            
            <div class="row">
                <div class="col-lg-12">
                    <img src={profile} class="profile rounded-circle" style={{ width: '40%'}} alt="" />
                    <div class="card default" >
                     
                        <div class="card-body">
                            <div class="container">
                                <h2 class="text-center">A PROPOS </h2>
                                Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit,
                                sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
        </div>
    ); 
 
}

export default Apropos; 