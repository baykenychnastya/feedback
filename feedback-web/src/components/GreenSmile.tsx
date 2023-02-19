import React from "react";
import  '../App.css'

const GreenSmile = function(props: any) {
    return (
        <div className="green-smile-wrapper p-absolute" id={props.id}>
            <div className="p-relative">
                <div className="green-smile"></div>
                <div id="green-eye-left"></div>
                <div id="green-eye-right"></div>
                <div id="green-mouth"></div>
            </div>
        </div>
    )
}


export default GreenSmile;