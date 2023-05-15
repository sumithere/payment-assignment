import React from "react";
import one from "../icons/one.png"
import two from "../icons/two.png"

export function ScreenSelector() {
    return (
        <div>
            <div className="choose-icons">
               
                <div style={{marginRight:"160px" }}>
                    <img style={{marginInline:"6px"}} src={one}></img>
                    <span>Sign Up</span>
                </div>
                <div >               
                    <img src={two} style={{marginInline:"12px"}}></img>           
                    <span>Sunscribe</span>
                </div>
                </div>
            <div className="heading-selectplan">Select your subcription plan</div>
        </div>
    )
}