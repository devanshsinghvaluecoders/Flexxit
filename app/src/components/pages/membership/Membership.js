import React, { useEffect, useState } from 'react'
import firebase from '../../../firebase/FirebaseConfig';
import './Membership.css';
import Card from './CardSub';
import axios from 'axios';
import icon from '../../../asserts/main2logo.png'

const Membership = () => {
  const [userId, setUserId] = useState("");
  const [username, setUsername] = useState("");

  const checkoutHandler  = async (amount) => {

    const {data:{key}} = await axios.get("http://www.localhost:4000/api/getkey")
    const {data:{order} } = await axios.post("http://localhost:4000/api/checkout", {
      amount
    })
    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Flexxit",
      description: "Movie Appllication",
      image: {icon},
      order_id: order.id,
      callback_url: "http://localhost:4000/api/paymentverification",
      prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9999999999"
      },
      notes: {
          "address": "Razorpay Corporate Office"
      },
      theme: {
          "color": "#121212"
      }
  };
  const razor = new window.Razorpay(options);
        razor.open();
  }

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
       

        <div className="demo">
        <div className="container">
            <div className="row text-center">
            <div className="row">
                <div className="col-md-4 col-sm-6">
                  
                       
                <h1 className="heading-title">Choose your Plan</h1>
            </div>

            <div className="row">
              <div className='card-box'>
                 <Card amount={99}  checkoutHandler={checkoutHandler} />
                <Card amount={299}  checkoutHandler={checkoutHandler} /> 
                <Card amount={499}  checkoutHandler={checkoutHandler} /> 
                </div>
                </div>
           
        </div>
    </div>
</div></div>

      )
    }
   </>
  )
}

export default Membership