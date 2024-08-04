// Register.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "./register.css";

export default function Register() {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">VibeConnect</h3>
          <span className="logicDesc">
            Connect with Friends and explore the world around <br /> you on VibeConnect.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginbox">
            <input type="Email" className='loginInput' placeholder='Enter Your Username' />
            <input type="Email" className='loginInput' placeholder='Enter Your Email' />
            <input type="Password" className='loginInput' placeholder='Enter Your Password' />
            <input type="Password" className='loginInput' placeholder='Enter Your Password Again' />
            <button className="loginButton">Sign Up</button>
            <Link to="/login">
              <button className="loginRegisterButton">Log into your Account</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
  