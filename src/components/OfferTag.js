import React from "react";

export function OfferTag(props){
    let dis=props.display;
    return(
        <div className={"offer-tag "+props.tagColor} style={{display:`${props.display}`}}>{props.text}</div>
    )
}