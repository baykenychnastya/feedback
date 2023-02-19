import React from "react";
import  '../App.css'

const PinkCircle = function(props: any) {
    return (
        <div className="p-absolute" id={props.id}>
            <div className="p-relative pink-circle-width">
                <div className="pink-circle pink-circle-width"></div>
                <div id="pink-eye-left"></div>
                <div id="pink-eye-right"></div>
                <div id="pink-mouth"></div>
            </div>
        </div>
    )
}

export default PinkCircle;