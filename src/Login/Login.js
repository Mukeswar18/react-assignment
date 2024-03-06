import React from "react";
import '../Register/register.css';
export default function Login(){
    return(
        <div id="body1">
            <div id="container">
                <h1>LOGIN</h1>
            <div>
            <input  className="input" type="text" id="name" placeholder="Enter Your Name"/>
            </div>
           
            <div>
            <input type="password" className="input" id="password"placeholder="Enter your password"/>
            </div>
            <div>
                <button id="button">Login</button>
            </div>
            </div>
        </div>
    );
    
}