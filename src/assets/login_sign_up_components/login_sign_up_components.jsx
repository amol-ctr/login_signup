import React, { useState } from 'react'
import person from '../person.png'
import email from '../email.png'
import password from '../password.png'
import twitter from '../twitter.png'
import facebook from '../facebook.jpg'
import github from '../github.png'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Forgot_password_page from './forgot_password_page'
// import { useNavigate } from 'react-router-dom'
// import './phone.css'
import './login_sign_up_components.css'

function Login_sign_up_components() {

  const [action, setAction] = useState("LOGIN")

  // const navigate = useNavigate()

  // const gotToNewPage=()=>{
  //   navigate("/forgot_password_page");
  // }

  return (
    <div class='container2'>
      
      <div className=' header'>
        <div className=' text'>{action}</div>
        {/* <br /> */}
        {/* <div className=' underline'></div> */}
      </div>

      {/* <div className='submit-container'>
        <button type='submit' className={action == "Login" ? "submit" : "submit gray"} onClick={() => setAction("Login")}>Login</button>
        <button type='submit' className={action == "Sign Up" ? "submit" : "submit gray"} onClick={() => setAction("Sign Up")}>Sign Up</button>
      </div> */}

      <form id="registerForm" action="/registration" method="post" data-sb-form-api-token="API_TOKEN">
        <div className='inputs'>

          <h4 className=' ml-20'>Username</h4>
          <div className='input'>
            <img src={person} alt="" />
            <input type="text" placeholder='Type your username' required />
            <div class="invalid-feedback" data-sb-feedback="Username:required">A Username is required.</div>
          </div>

          {action == "LOGIN" ? <div></div> :
            <div>
              <h4 className=' ml-20'>Email</h4>
              <div className='input'>
                <img src={email} alt="" />
                <input type="email" placeholder='Email Id' required />
                <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
              </div>
            </div>
          }

          <h4 className=' ml-20'>Password</h4>
          <div className='input'>
            <img src={password} alt="" />
            <input type="password" placeholder='Type your password' required />
            <div class="invalid-feedback" data-sb-feedback="password:required">A password is required.</div>
          </div>
        </div>

        {action == "SIGN UP" ? <div className='forgot-password'></div> :
          
          <div className='forgot-password'>
            <Link to="/forgot_password_page">Forgot Password?</Link>

          </div>

        }

        <button type='submit' className='submit2'>{action}</button>
        <br/>

        {action=="SIGN UP" ? <div>

        <p align="center">Or {action=="LOGIN"?"Sign up":"Login"} using:</p>
        <p align="center" onClick={()=>setAction("LOGIN")}>LOGIN</p>

        </div>:
        <div>
          <p align="center">Or {action=="LOGIN"?"Sign up":"Login"} using:</p>

          <span class='social_media_icons'>

            <a href="https://www.twitter.com">
              <img src={twitter} width=" 40px" height="40px" alt="" />
            </a>
            <a href="https://www.facebook.com">
              <img src={facebook} width=" 40px" height="40px" alt="" />
            </a>
            <a href="https://www.github.com">
              <img src={github} width=" 40px" height="40px" alt="" />
            </a>
          </span>

          <br/>
          <p align="center">Or {action=="LOGIN"?"Sign up":"Login"} using:</p>
          <p align="center" onClick={()=>setAction("SIGN UP")}>SIGN UP</p>
        </div>
        }
      </form>

    </div>
  )
}

export default Login_sign_up_components
