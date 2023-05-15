import React from "react";
import edyoga from "../icons/edyoga.png";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';

export function Header(){
    return(
        <div className="header-container">
            <div className="child-container">
                <div className="left-container">
                    <img className="edyoga-image" src={edyoga}></img>
                    <div className="course-dropdown">
                        <div>Courses</div>
                        <ExpandMoreIcon/>
                    </div>
                    <div className="programs-dropdown">
                    <div>Programs</div>
                        <ExpandMoreIcon/>
                    </div>
                </div>
                <div className="right-container">
                    <SearchIcon fontSize="small"/>
                    <div className="login-text">Log in</div>
                    <button className="join-button">Join Now</button>
                </div>
            </div>
        </div>
    )
}