import React from "react";
import { ScreenSelector } from "./ScreenSelector";
import { ChoosePlan } from "./ChoosePlan";
import { OfferSection } from "./OfferSection";
import { PaymentComponent } from "./PaymentComponent";
import { RazorpayComponent} from "./RazorpayComponent";

export function RightSection(){
    return (
        <div className="right-section">
            <div className="subscription-section">
                <ScreenSelector/>
                <ChoosePlan/>
                <OfferSection/>
                <PaymentComponent/>
                <RazorpayComponent/>
            </div>
        </div>
    )
}