import React from "react";

function Icon(props){
    return <i class={props.icon}><span>{props.iconName}</span></i>
}

export default Icon;