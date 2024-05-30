import React, { useState } from 'react'
import './login_sign_up_components.css'
import password from '../password.png'

import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'

function Forgot_password_page() {

  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type==='password'){
       setIcon(eye);
       setType('text')
    } else {
       setIcon(eyeOff)
       setType('password')
    }
 }

  const [type2, setType2] = useState('password');
  const [icon2, setIcon2] = useState(eyeOff);

  const handleToggle2 = () => {
    if (type2==='password'){
       setIcon2(eye);
       setType2('text')
    } else {
       setIcon2(eyeOff)
       setType2('password')
    }
 }

  return (

    <div class='container2 mt-32'>

        <div className='inputs'>
            <h4 className=' ml-20'>New Password</h4>
            <div class='input'>
            <img src={password} alt="" />
            <input type={type} placeholder='New password' required />

            {/* <input type="checkbox" onClick={()=>setPasswordVisible(!passwordVisible)} name="" id="" /> */}


            <div class="invalid-feedback" data-sb-feedback="password:required">A password is required.</div>
            <span class="flex justify-around items-center" onClick={handleToggle}>
                  <Icon class="absolute mr-10" icon={icon} size={25}/>
            </span>
            </div>

            <h4 className=' ml-20'>Confirm New Password</h4>
            <div class='input'>
            <img src={password} alt="" />
            <input type={type2} placeholder='Confirm password' required />

            {/* <input type="checkbox" onClick={()=>setPasswordVisible2(!passwordVisible2)} name="" id="" /> */}


            <div class="invalid-feedback" data-sb-feedback="password:required">A password is required.</div>
            <span class="flex justify-around items-center" onClick={handleToggle2}>
                  <Icon class="absolute mr-10" icon={icon2} size={25}/>
            </span>
            </div>
        </div>

        <button type='submit' className='submit2'>Submit</button>
    </div>
  )
}

export default Forgot_password_page
