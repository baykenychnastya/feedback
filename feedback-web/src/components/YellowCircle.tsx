import React from "react";
import  '../App.css'

const YellowCircle = function(props: any) {
    return (
        <div className="p-absolute" id={props.id}>
            <div className="p-relative yellow-circle-width">
                <div className="yellow-circle yellow-circle-width"></div>
                <div id="yellow-eye-left"></div>
                <div id="yellow-eye-right"></div>
                <div id="yellow-mouth"></div>
            </div>
        </div>
    )
}


export default YellowCircle;