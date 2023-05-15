import React from "react";
import iconClock from "../icons/iconClock.png"; 

export function OfferSection(){
    return(
        <div className="offer-section">
        <div className="sub-header">
        <div className="sub-text">Subscription Fee</div>
        <div className="sub-amount">₹18,500</div>
        </div>
        <div className="offer-banner">
        <div className="offer-header">
        <div className="offer-text">Limited time offer</div>
        <div className="offer-amount">- ₹18,401</div>
        </div>
        <div className="offer-footer">
        <div className="offer-image"><img style={{height:"20px"}}src={iconClock}></img></div>
        <div className="offer-validity"> Offer valid till 25th March 2023</div>
        </div>
        </div>
        <div className="total-banner">
            <div className="total-text">Total (Incl. of 18% GST)</div>
            <div className="total-amount">₹149</div>
        </div>
        </div>
    )
}