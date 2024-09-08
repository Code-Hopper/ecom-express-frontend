import React, { useState } from 'react'
import axios from "axios"

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const CustomerLogin = () => {

  let navigate = useNavigate()

  let [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })

  let [showHide, setShowHide] = useState(false)

  let showHidePassword = () => {
    setShowHide(!showHide)
  }

  let handelChange = (e) => {
    let { name, value } = e.target

    setLoginData((prev) => {
      return (
        { ...prev, [name]: value }
      )
    })

  }

  let handelSubmit = async (e) => {
    e.preventDefault()

    let response

    try {

      response = await axios({
        method: "POST",
        url: "http://localhost:5500/user/login",
        data: loginData
      })

      if (response.status != 202) {
        throw ("failed login !")
      }

      console.log("login was successful")

      localStorage.setItem("myToken", response.data.token)

      console.log("geting token from local storage ")
      console.log(localStorage.getItem("myToken"))

      navigate("/account")

    } catch (err) {
      console.log("unable to make a login request ! ", err)
      // console.log(response.data.message)
    }

  }

  return (
    <>
      <div className='loginPage-main d-flex justify-content-center align-items-center'>
        <div className='shadow-lg bg-light p-5 rounded'>
          <form onSubmit={handelSubmit} id='login-form'>
            <div className='d-flex flex-column gap-2'>

              <input onChange={handelChange} className='form-control' type="email" placeholder='enter email' name='email' value={loginData.email} />
              <div className='d-flex password-container'>

                <input onChange={handelChange} className='login-password-input ' type={showHide ? "text" : "password"} placeholder='enter password' name='password' value={loginData.password} />

                <button type='button' onClick={showHidePassword} className='btn btn-light border-0'>
                  {
                    showHide ? <FaEyeSlash /> : <FaEye />
                  }
                </button>


              </div>
              <div>
                <button type='submit' className='btn fw-bolder btn-success'>Submit</button>
                <button type='reset' className='btn fw-bolder btn-primary'>Reset</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default CustomerLogin
