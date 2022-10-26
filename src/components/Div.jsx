import React from "react";
import Button from "./Button";
import Paragraph from "./Paragraph";
import Icon from "./Icon";

function Div(props){
    return(
    <div className="every-project-container">
        <h3>{props.projectTitle}</h3>
        <div className="left-side-project-card">
            
            <img src={props.image} alt={props.alt} />
            <div className="projects-button-container">
                <Button btnClass="github" text="Github" link={props.link} />
                <Button btnClass="live-site" text="Live site" link={props.link} />   
            </div>
        </div>
        <div className="right-side-project-card">
            <Paragraph text={props.text} />
            <Icon icon={props.icon1} />
            <Icon icon={props.icon2} />  
            <Icon icon={props.icon3} />     
        </div>
    </div>
    )
}

export default Div;