import React from "react";
import './register.css';
export default function Register(){
    return(
        <div id="body1">
            <div id="container">
                <h1>REGISTRATION FORM</h1>
            <div>
            <input  className="input" type="text" placeholder="Enter Your Name"/>
            </div>
            <div>
            
            <input type="text" className="input" placeholder="Enter Your E-mail"/>
            </div>
            <div>
           
            <input type="password" className="input" placeholder="Enter your password"/>
            </div>
            
            <div>
            <input type="password" className="input" placeholder="Re-enter your password"/>
            </div>
            <div>
                <button id="button">Submit</button>
            </div>
            </div>
        </div>
    );
    
}