import React from "react";
import './Contact.css'
export default function Contact(props) {
    
    return (
        <div className="contact">
        <article className="contact-card">
            <img
                src={props.img}
                alt="Photo of Mr. Whiskerson"
            />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img
                    src="/src/assets/phone.jpg"
                    alt="phone icon"
                />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img
                    src="/src/assets/mail.jpg"
                    alt="mail icon"
                />
                <p>{props.email}</p>
            </div>
        </article>
        </div>
    )
}