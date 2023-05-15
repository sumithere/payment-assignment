import React, { useState } from "react";
import { Subscriptionbanner } from "./Subscriptionbanner"; 

export function ChoosePlan(){

    const [planArrSelected,setPlanArray]=useState([false,true,false,false]);
    console.log(planArrSelected);
    function updateState(arr){
        setPlanArray(arr);
    }
    
    return(
        <div>
            <Subscriptionbanner isChecked={true} updateState={updateState} tagColor="red" tagtext="Offer Expired" display="inline-block" planArrSelected={planArrSelected} key="x" index={0} id="expiredsubscription" text="12 Months Subscription " offerExpired={true} name="subscription expired"/>
            <Subscriptionbanner isChecked={true} updateState={updateState} tagColor="green" tagtext="Recommended" display="inline-block" planArrSelected={planArrSelected} key="y" index={1} id="subscription12" text="12 Months Subscription " offerExpired={false} name="subscription available"/>
            <Subscriptionbanner isChecked={false} updateState={updateState} tagColor="" tagtext="" display="none" planArrSelected={planArrSelected} key="z" index={2} id="subscription06" text="6 Months Subscription " offerExpired={false} name="subscription available"/>
            <Subscriptionbanner isChecked={false} updateState={updateState} tagColor="" tagtext="" display="none" planArrSelected={planArrSelected} key="a" index={3} id="subscription03" text="3 Months Subscription " offerExpired={false} name="subscription available"/>
        </div>
    )
}