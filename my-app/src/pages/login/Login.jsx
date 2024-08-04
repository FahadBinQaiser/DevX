// Login.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "./login.css";

export default function Login() {
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
            <input type="Email" className='loginInput' placeholder='Enter Your Email' />
            <input type="Password" className='loginInput' placeholder='Enter Your Password' />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password</span>
            <Link to="/register">
              <button className="loginRegisterButton">Create A New Account?</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
