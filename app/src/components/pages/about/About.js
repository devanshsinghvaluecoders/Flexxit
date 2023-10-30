import React, { useEffect, useState } from 'react'
import firebase from '../../../firebase/FirebaseConfig'



const About = () => {

    const [userId, setUserId] = useState("");
    const [username, setUsername] = useState("");
  
    useEffect(() => {
  
      firebase.auth().onAuthStateChanged((user) => {
        if(user){
          setUserId(user.uid);
          setUsername(user.displayName);
  
        }else{
          setUserId("");
          setUsername("");
        }
      })
    },[userId]);
  return (
    <>
    {
        !userId ? (
[]
        ):(
            <div>
            <div className="about-flexxit">
                <div>
                    <h1> <span style={{color:"white"}}>About</span></h1>
                 </div>
                <div className="my-4">
                    <p style={{ fontSize:"20px"}} >Flexxit is Movie application , which provied you with details about the Popular, Top rated and Upcoming Movies.</p>
                </div>
                <div>
         
                    <p style={{ fontSize:"20px"}}><span style={{fontWeight:"bold", fontSize:"30px", color: "red"}}>LogIn/SignUp:</span> Flexxit allows you to Creat an account, login, and after login redirect you to the homepage.</p>
                </div>
                <div>
                    <p style={{ fontSize:"20px"}}><span style={{fontWeight:"bold", fontSize:"30px", color: "red"}}>Categories:</span>You can find Movies accoring to the categries(Popular, Top rated, Upcoming) by clicking on them.</p>
                </div>
                <div>
                    <p style={{ fontSize:"20px"}}><span style={{fontWeight:"bold", fontSize:"30px", color: "red"}}>Movie Detail:</span> You can find the details(like Description, generes, trailer, production companies) about a particular movie by clicking on the movie card. </p>
                </div>
                <div>
                    <p style={{ fontSize:"20px"}}><span style={{fontWeight:"bold", fontSize:"30px", color: "red"}}>Trailer:</span> You can watch the trailer of a particuler movie by clicking on the play trailer button. </p>
                </div>
                <div>
                    <p style={{ fontSize:"20px"}}><span style={{fontWeight:"bold", fontSize:"30px", color: "red"}}>Subscription:</span> You can buy a Subscription plan by going to the Subscription page and then select the plan. </p>
                </div>
                <div>
                    <p style={{ fontSize:"20px"}}><span style={{fontWeight:"bold", fontSize:"30px", color: "red"}}>Technology Stack:</span> This is a MERN application and has been made using technologies like HTML, CSS, JavaScript, React.js, Node.js, Express.js, Firebase. </p>
                </div>
               
            </div>
        </div>
        )
    }
   
    </>
  )
}

export default About