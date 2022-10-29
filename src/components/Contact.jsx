import React, { useState } from "react";
import Icon from "./Icon";
import Title from "./Title";

function Contact(){
    const date = new Date();
    const currentDate = `${date.getMonth() + 1}/${date.getDate()} at ${date.getHours()}:${date.getMinutes()}`
    const nothing = null

    const [formInfo, setFormInfo] = useState({
        name: "",
        email: "",
        tel: "",
        date: currentDate,
        message: ""
    })

    function handleChange(e){
        const {name, value} = e.target;
        setFormInfo(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    function handleClick(e){
        e.preventDefault()
        console.log(formInfo);
    }

    return(
        <section id="contact">
            <div className="outer">
                <Title text="Contact" />
                <div className="social-icons">
                    <Icon icon="fa-brands fa-github" iconName={nothing} />
                    <Icon icon="fa-brands fa-linkedin" iconName={nothing} />
                    <Icon icon="fa-brands fa-codepen" iconName={nothing} />
                </div>
                <div className="contact-form">
                    <form>
                        <input type="text" placeholder="Name" id="name" name="name" onChange={handleChange} required/>
                        <input type="email" placeholder="Email" id="email" name="email" onChange={handleChange} required/>
                        <input type="tel" placeholder="Telephone" id="tel" name="tel" onChange={handleChange} />
                        <textarea id="message" name="message" placeholder="Leave me a message!" onChange={handleChange} required></textarea>
                        <input type="submit" value="Submit" onClick={handleClick}/>
                    </form>
                </div> 
            </div>
        </section>
    )
}

export default Contact;