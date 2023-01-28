import React from "react";

export default function Info(){
    return(
        <div className="info-div">
            <div className="photo-container"><div className="info-foto"></div></div>
            <h1 className="info-name">Hector Inglese</h1>
            <h2 className="info-career">Frontend Developer</h2>
            <a className="info-web" href="#" target="_blank">Not a website.yet</a>

            <div className="info-btns">   
                <a href="#" target="_blank" className="btn info-email" ><i className="info-icon fa-solid fa-envelope"></i> Email</a>
                <a href="#" target="_blank" className="btn info-linkedin" ><i className="info-icon fa-brands fa-linkedin"></i> Linkedin</a>
            </div>
        </div>
    )
}