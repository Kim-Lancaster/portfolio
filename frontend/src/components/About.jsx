import React from "react";
import Icon from "./Icon";
import Paragraph from "./Paragraph";
import Title from "./Title";
import myUglyMug from "../media/profile_photo.png"

function About(){
    return (
    <section id="about">
        <div className="outer">
            <Title text="About Me" />
            <img src={myUglyMug} alt="the best dev you've ever seen" />
            <Paragraph text="I am an art major turned software developer. A few years ago someone suggested I learn to code for fun. At the time is sounded like a completely impossible fantasy. Fast forward to now, I am in love with programming. In fact, I spend most of my free time in front of the computer learning new languages and creating my own apps, websites and games. While my experience lies with front end development I won't stop there. I'll keep working and learning until I become a full stack god… then, I might take a vacation." />
            <Paragraph text="Below are some of the technologies I have been working with lately:" />
            <div className="icon-container">
                <Icon icon="devicon-html5-plain" iconName="HTML5" />
                <Icon icon="devicon-css3-plain" iconName="CSS3" />
                <Icon icon="devicon-sass-original" iconName="SASS" />
                <Icon icon="devicon-javascript-plain" iconName="JAVASCRIPT" />
                <Icon icon="devicon-jquery-plain" iconName="JQUERY" />
                <Icon icon="devicon-react-original" iconName="REACT" />
                <Icon icon="devicon-nodejs-plain" iconName="NODE" />
                <Icon icon="devicon-express-original" iconName="Express" />
                <Icon icon="devicon-mongodb-plain" iconName="MongoDB" />
            </div>
            
        </div>
    </section>
    )
}

export default About;