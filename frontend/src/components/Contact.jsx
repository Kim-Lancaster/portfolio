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

    const [sentMessage, setSentMessage] = useState("");

    function handleChange(e){
        const {name, value} = e.target;
        setFormInfo(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    async function handleSubmit(e){
        e.preventDefault();
        try{
            fetch('http://localhost:3001/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formInfo)
            });
            setFormInfo({
                name: "",
                email: "",
                tel: "",
                date: currentDate,
                message: ""
            })
            setSentMessage("Thank you!  I will be in touch shortly!")
        } catch(error){
            console.log(error);
        }

    }

    return(
        <section id="contact">
            <div className="outer">
                <Title text="Contact" />
                <div className="social-icons">
                    <a href="https://github.com/Kim-Lancaster"><Icon icon="fa-brands fa-github" iconName={nothing} /></a>
                    <a href="https://www.linkedin.com/in/kim-lancaster/"><Icon icon="fa-brands fa-linkedin" iconName={nothing} /></a>
                    <a href="https://codepen.io/kim-lancaster"><Icon icon="fa-brands fa-codepen" iconName={nothing} /></a>
                </div>
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        
                        <input type="text" placeholder="Name" id="name" name="name" onChange={handleChange} value={formInfo.name} required/>
                        
                        <input type="email" placeholder="Email" id="email" name="email" onChange={handleChange} value={formInfo.email} required/>
                        
                        <input type="tel" placeholder="Telephone" id="tel" name="tel" onChange={handleChange} value={formInfo.tel} />
                        
                        <textarea id="message" name="message" placeholder="Leave me a message!" onChange={handleChange} value={formInfo.message} required></textarea>
                        
                        <input type="submit" value="Submit"/>
                    
                    </form>
                    <p>{sentMessage}</p>
                </div> 
            </div>
        </section>
    )
}

export default Contact;