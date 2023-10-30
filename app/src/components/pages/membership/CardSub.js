import React from 'react'
import './Membership.css'

const Card = ({ title, amount, checkoutHandler }) => {
    return (
        
      

           
                    <div className="pricingTable">
                        <div className="pricingTable-header">
                            <h3 className="heading">{title}</h3>
                           
                            <div className="price-value">{amount}
                                <span className="currency">₹</span>
                                <span className="month">/mo</span>
                            </div>
                        </div>
                        <ul className="pricing-content">
                            <li>Access all content</li>
                            <li>Zero Ads</li>
                            <li>Only one screen access</li>
                            <li>720p Quality</li>
                          
                        </ul>
                       
                        <a href="#" onClick={() => checkoutHandler(amount)} className="read">sign up<i className="fa fa-angle-right"></i></a>
                    </div>

            // <Text>₹{amount}</Text>
            // <Button >Buy Now</Button>
       
    )
}

export default Card