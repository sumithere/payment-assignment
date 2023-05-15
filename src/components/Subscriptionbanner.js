import { useEffect,useRef ,useState} from "react";
import React from "react";
import { OfferTag } from "./OfferTag";

export function Subscriptionbanner(props) {
    let {id,index,text,name,offerExpired,planArrSelected,updateState} = {...props};
    let bannerRef=useRef();
    let inputRef=useRef();
    useEffect(()=>{
        if(!planArrSelected[index]){
        bannerRef.current.classList.remove('offer-selected');
    }
    else{
        bannerRef.current.classList.add('offer-selected');
    }
    if(!props.offerExpired){
        bannerRef.current.classList.remove('offer-exp');
    }
    else{
        bannerRef.current.classList.add('offer-exp');
    }
    })
    return (
        <div ref={bannerRef} className={"banner-outlay " + (props.offerExpired ? 'offer-exp ' : '') + (planArrSelected[index]?'offer-selected':'')} onClick={(e)=>{
            console.log(e.currentTarget);
            console.log(planArrSelected);
            // inputRef.current.click();
            // e.stopPropagation();
             if(offerExpired==false){
                let arr=[];
                for(let i=0;i<planArrSelected.length;i++){
                    if(i==index){
                        arr[i]=true;
                    }
                    else{
                        arr[i]=false;
                    }
                    updateState(arr);
                   
                    // document.getElementById(id).checked=true;
                    // e.preventDefault();
                }
            }
        }}>
            <OfferTag text={props.tagtext} tagColor={props.tagColor} display={props.display}/>
            <input ref={inputRef} onClick={(e)=>{
                // e.stopPropagation();
            }} type="checkbox" className="check-box" checked={props.isChecked} id={id} name={name} value={id.substring(12,14)}  onChange={(e)=>{
                
                // e.currentTarget.checked=!e.currentTarget.checked;
                // e.stopPropagation();
            }} />
            <label for={id}>{text}</label><br></br> 
        </div>
    )
}