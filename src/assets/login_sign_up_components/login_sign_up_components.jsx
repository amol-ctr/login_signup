import React, { useState } from 'react'
import person from '../person.png'
import email from '../email.png'
import password from '../password.png'
import twitter from '../twitter.png'
import facebook from '../facebook.jpg'
import github from '../github.png'
// import './phone.css'
import './login_sign_up_components.css'

function Login_sign_up_components() {

  const [action, setAction] = useState("Sign Up")
  return (
    <div class='container2'>
      <div className=' header'>
        <div className=' text'>Tensor {action}</div>
        <div className=' underline'></div>
      </div>

      <div className='submit-container'>
        <button type='submit' className={action == "Login" ? "submit" : "submit gray"} onClick={() => setAction("Login")}>Login</button>
        <button type='submit' className={action == "Sign Up" ? "submit" : "submit gray"} onClick={() => setAction("Sign Up")}>Sign Up</button>
      </div>

      <form id="registerForm" action="/registration" method="post" data-sb-form-api-token="API_TOKEN">

        <div className='inputs'>

          {action == "Login" ? <div></div> :

            <div className='input'>
              <img src={person} alt="" />
              <input type="text" placeholder='Name' required />
              <div class="invalid-feedback" data-sb-feedback="Username:required">A Username is required.</div>
            </div>
          }
          <div className='input'>
            <img src={email} alt="" />
            <input type="email" placeholder='Email Id' required />
            <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
            <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
          </div>
          <div className='input'>
            <img src={password} alt="" />
            <input type="password" placeholder='Password' required />
            <div class="invalid-feedback" data-sb-feedback="password:required">A password is required.</div>
          </div>
        </div>

        {action == "Sign Up" ? <div className='forgot-password'></div> :
          <div className='forgot-password'><a href="#">Forgot Password?</a></div>
        }

        <button type='submit' className='submit2'>Submit</button>
        {/* <br/> */}

        <p align="center">or</p>
        <p align="center">{action} using:</p>

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
      </form>

    </div>
  )
}

export default Login_sign_up_components
