import React from "react";
import Title from "./Title";
import Project from "./Project";
import myProjects from "../misc/projectInfo"

function Projects(){
    return (<section id="projects">
        <div className="outer">
            <Title text="Projects" />
            {myProjects.map((proj, i) => {
                return <Project
                    key={i}
                    projectTitle={proj.projectTitle}
                    image={proj.image}
                    alt={proj.alt}
                    githubLink={proj.githubLink}
                    liveLink={proj.liveLink}
                    text={proj.text}
                    icons={proj.icons}
                />
            })}
           
        </div>
    </section>)
}

export default Projects;