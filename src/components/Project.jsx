import React from "react";
import Button from "./Button";
import Paragraph from "./Paragraph";
import Icon from "./Icon";

function Project(props){
    return(
    <div className="every-project-container">
        <div className="left-side-project-card">
            <img src={props.image} alt={props.alt} />
            <div className="projects-button-container">
                <Button btnClass="github" text="Github" link={props.githubLink} />
                <Button btnClass="live-site" text="Live site" link={props.liveLink} />   
            </div>
        </div>
        <div className="right-side-project-card">
            <h3>{props.projectTitle}</h3>
            <Paragraph text={props.text} />
            {props.icons.map(item => {
                return <Icon icon={item.icon} iconName={item.iconName} />
            })}  
        </div>
    </div>
    )
}

export default Project;