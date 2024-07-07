import { useState } from 'react'
import Login_sign_up_components from './assets/login_sign_up_components/login_sign_up_components'
import Forgot_password_page from './assets/login_sign_up_components/forgot_password_page'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <div>
        {/* <Login_sign_up_components /> */}
        <Routes>
          <Route path="*" element={<Login_sign_up_components />} /> 
          <Route path="/forgot_password_page" element={<Forgot_password_page />} />
        </Routes>
      </div>

    </>
  )
}

export default App
