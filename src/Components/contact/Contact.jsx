import { useState, useRef, useEffect } from "react";

import { AnimatedLetters } from "../../constants";
import "./Contact.scss";

const Contact = () => {
    const [letterClass, setLetterClass] =useState('text-animate');
    const form =useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    })

    return (
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray = {['C','o','n','t','a','c','t', ' ', 'm','e']}
                        idx={15}
                    />
                </h1> 
                <p>
                    I am interested in freelance opportunities - especially on ambitious or large projects. 
                    However, if you have any other requests or questions, don't hesitate to contact me using below form either.
                </p>

                <div className="contact-form">
                    <form ref ={form}>
                        <ul>
                            <li className="half">
                                <input type="text" placeholder = "Name" name="name" required />
                            </li>
                            <li className="half">
                                <input type="email" placeholder="Email" name="email" required />
                            </li>
                            <li>
                                <input type="text" name="subject" placeholder="Subject"/>
                            </li>
                            <li>
                                <textarea name="message" placeholder="message"></textarea>
                            </li>
                            <li>
                                <input className="flat-button" type="submit" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>            
            </div>
        </div>
    )
}

export default Contact;