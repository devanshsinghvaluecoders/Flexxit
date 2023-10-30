import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import firebase from "../firebase/FirebaseConfig";
import './Register.css'


const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(!email || !name || !password){
        console.log("please fill all the fields");
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!emailRegex.test(email)){
        console.log("please provide a vaild email");
        return;
      }
  
      const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
      if(response.user){
        await response.user.updateProfile({
          displayName: name
        })
        const uid = response.user.uid;
        const userRef = firebase.database().ref('users/'+uid);
        await userRef.set({
          uid:uid,
          email:email,
          name: name,
        })
  
        setName("");
        setEmail("");
        setPassword("");
  
        await navigate("/")
      }
    } catch (error) {
      console.log("Register Error" , error)
    }
  
  }

    return (
        <div className='register'>
        <section>
            <form className='formm' onSubmit={handleSubmit}>
            <div class="title">Welcome</div>
            <div class="subtitle">Let's create your account!</div>
                <input type="text" placeholder="Name" required  value={name} onChange={(e) => setName(e.target.value)}/>
                <br/>
                <input type="email" placeholder="Emai" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <br/>
                <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <br/>
                <button className='signup' type="submit">Sign Up</button>
                <br/>
              <div className='text-acc'>Already have an account?
              <br></br>
              <Link className='log' to="/login">Sign In</Link>
              </div>
           
            </form>
        </section>
    </div>
  )
}

export default Register