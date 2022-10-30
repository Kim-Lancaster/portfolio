import React from "react";
// import Hobby from "./Hobby";
import Name from "./Name";
import Title from "./Title";

function Home(props){
    return (<section id="home">
        <Name text={props.name} />
        <Title text={props.title} />
        </section>)
}

export default Home