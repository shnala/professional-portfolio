import React from "react";
import Nav from "../components/Nav";
import '../styles/All.css';
import '../styles/Contact.css';

function Contact() {
    return (
        <section>
            <Nav />
            <div className="contact-banner">
                <h1>Contact</h1>
            </div>

            <div className="contact-description">
                <p>For inquiries, offers, or otherwise,
                    please email me at @<a href="mailto:shawnanalla@gmail.com">shawnanalla@gmail.com</a></p>
                <p>My social medias are also linked
                    at the bottom of this website. Follow
                    me there!</p>
            </div>
        </section>
    )
}

export default Contact;