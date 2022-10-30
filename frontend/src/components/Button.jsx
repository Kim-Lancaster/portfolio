import React from "react";

function Button(props){
    return (
    <a href={props.link}>
        <button className={props.btnClass}>
            {props.text}
        </button>
    </a>
    )
}

export default Button;