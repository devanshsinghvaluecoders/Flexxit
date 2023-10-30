import React, { useEffect, useState } from "react";
import {
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";
import firebase from "../../firebase/FirebaseConfig";

import "./Footer.css";

const Footer = () => {

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
               
            ) : (
                <footer className="footer">

                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaGithub />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
        </footer>
            )
        }
        
      </>
    );
};

export default Footer;