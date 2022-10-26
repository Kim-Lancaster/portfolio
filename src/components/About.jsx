import React from "react";
import Paragraph from "./Paragraph";
import Title from "./Title";
import myUglyMug from "../media/profile_photo.png"

function About(){
    return (<section id="about">
        <Title text="About Me" />
        <img src={myUglyMug} alt="the best dev you've ever seen" />
        <Paragraph text="I am an art major turned software developer. A few years ago someone suggested I learn to code for fun. At the time is sounded like a completely impossible fantasy. Fast forward to now, I am in love with programming. In fact, I spend most of my free time in front of the computer learning new languages and creating my own apps, websites and games. While my experience lies with front end development I won't stop there. I'll keep working and learning until I become a full stack god… then, I might take a vacation." />
        <Paragraph text="Below are some of the technologies I have been working with lately:" />
        <Paragraph text="HTML5 | CSS3 | SASS | JavaScript | JQUERY | REACT | NODE | EXPRESS | MONGODB" />
    </section>)
}

export default About;