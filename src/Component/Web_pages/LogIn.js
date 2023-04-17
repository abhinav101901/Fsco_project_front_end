import axios from "axios"
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import login from '../Assests/login.png'
import '../Style_pages/LogIn.css'

function LogIn() {
  const [phone, setPhone] = useState('');

  const Navigate = useNavigate();

  const userLogIn = function (event) {
    event.preventDefault();
    axios.post('https://guptaji-food-backend-production.up.railway.app/login', {
         phone
    })
        .then((res) => {
            const token = res.data.data;
            const userId = res.data.UserId
            localStorage.setItem("x-api-key", token)
            console.log(res.data.data)
            localStorage.setItem("UserId", userId)
            localStorage.setItem("phone",phone)
            Navigate('/OTP')
        }).catch((err) => {
            alert(err.response.data.message + err.response.status + " Error")
        })
}
    
  return (
    <div className="login-page">
      <div className='hading'>Log-In</div>
      <div className="Cont-1">
      <div className='login-logo'>
      <img src={login} className="img-login" alt="brand" />
        </div>
      <form className='LogIn'onSubmit={userLogIn}>
        <input type="phone" id="phone" value={phone} onChange={((e) => setPhone(e.target.value))} placeholder='Phone' />
        <input className="btn-primary" type="submit" placeholder="LOG IN" /><br />
        <Link className='btn21' to="/SingIn">SingIn</Link>
      </form>
      
      </div>
    </div>
  );
}

export default LogIn;
