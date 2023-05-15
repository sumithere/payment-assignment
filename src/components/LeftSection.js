import React from "react";
import book from "../icons/book.png";
import time from "../icons/time.png";
import livetv from "../icons/livetv.png";
import hat from "../icons/hat.png";
import ads from "../icons/ads.png";

export function LeftSection(){
    return (
        <div className="left-section">
                <p className="list-heading"><div>Access curated courses worth</div>
                <div style={{display:"flex"}}>
                    <div className="overline-amount">₹ 18,500 </div>
                    <div> at just </div>
                    <div className="heighlight-amount">₹ 99</div>
                    <div>per year!</div>
                </div>
                </p>
                <ul className="list-items">
                    <li><img src={book} ></img><div><span>100+</span> Job relevant courses</div> </li>
                    <li><img src={time} ></img><div><span>20,000+</span> Hours of content</div></li>
                    <li><img src={livetv} ></img><div><span>Exclusive</span> webinar access</div></li>
                    <li><img src={hat} ></img><div>Scholarship worth <span>₹94,500</span></div></li>
                    <li><img src={ads} ></img><div><span>Ad Free </span>learning experience</div></li>
                </ul>
            </div>
    )
}