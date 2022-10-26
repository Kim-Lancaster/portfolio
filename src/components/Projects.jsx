import React from "react";
import Title from "./Title";
import Div from "./Div";

import cupcake from "../media/cupcake-thumbnail.png"
import dinner from "../media/whats-for-dinner-thumbnail.png"

function Projects(){
    return (<section id="projects">
        <Title text="Projects" />
        <Div projectTitle="Eleanor's Cupcakes" image={cupcake} alt="cupcake website thumbnail" link="#home" text="This is may latest project.  It is super awesome because everything I touch is gold.  Honestly, I don't know why you haven't hired me yet.  I'm fighting companies off with a stick I'm so sought after.  Like Helen of Tory for the software engineering world.  Probably going to be a huge war just to have me. The Gods wept when I was born." icon1="devicon-html5-plain" icon2="devicon-css3-plain" icon3="devicon-javascript-plain" ></Div>
        <Div projectTitle="Random Meal Decider" image={dinner} alt="what's for dinner thumbnail" link="#home" text="This is may latest project.  It is super awesome because everything I touch is gold.  Honestly, I don't know why you haven't hired me yet.  I'm fighting companies off with a stick I'm so sought after.  Like Helen of Tory for the software engineering world.  Probably going to be a huge war just to have me. The Gods wept when I was born." icon1="devicon-html5-plain" icon2="devicon-sass-original" icon3="devicon-javascript-plain"></Div>
    </section>)
}

export default Projects;