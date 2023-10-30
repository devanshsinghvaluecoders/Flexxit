import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import firebase from "../firebase/FirebaseConfig";
import './Login.css'


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        if(!email || !password){
            console.log("please fill all the fields");
          }
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if(!emailRegex.test(email)){
            console.log("please provide a vaild email");
            return;
          }
      
          const response = await firebase.auth().signInWithEmailAndPassword(email,password);
          if(response.user){
              setEmail("");
              setPassword("");
        
              await navigate("/")
            
          }
        
    } catch (error) {
        console.log('Login Error', error)
    }
 

  
  }

    return (
        <div className='register'>
        <section>
            <form className='form' onSubmit={handleSubmit}>
                <div className='title'>Login</div>
                <input type="email" placeholder="Emai" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <br/>
                <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <br/>
                <button className='signup' type="submit">Sign In</button>
                <br/>
              <div className='text-acc'>Don't have an account?
              <br></br>
              <Link className='log' to="/register">Register</Link>
              </div>
            
            </form>
        </section>
    </div>
  )
}

export default Login;