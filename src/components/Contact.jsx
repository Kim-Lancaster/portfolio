import React from "react";
import Icon from "./Icon";
import Title from "./Title";

function Contact(){

  const nothing = null
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
                    <form action="index.html" method="POST">
                        <input type="text" placeholder="Name" id="name" name="name" />
                        <input type="email" placeholder="Email" id="email" name="email" />
                        <input type="tel" placeholder="Telephone" id="tel" name="tel" />
                        <textarea id="message" name="message" placeholder="Leave me a message!"></textarea>
                        <input type="submit" value="Submit" />
                    </form>
                </div> 
            </div>
        </section>
    )
}

export default Contact;