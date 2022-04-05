import React from "react";
import '../styles/All.css';
import '../styles/About.css';
import Nav from "../components/Nav";
import selfie from "../assets/images/selfie.jpg";

function About() {
    return (
        <section>
            <Nav />
            <div className="about-banner">
                <h1>About Me</h1>
            </div>
            <div className="about-wrapper">
                <div className="about-picture-wrapper">
                    <img className="about-picture" src={selfie} />
                    {/* <p className="about-picture-hoverquote">Me in front of San Francisco's Legion of Honor museum!</p> */}
                </div>

                <div className="about-description">
                    <p>
                        Hello! I'm Shawn Analla. I'm a recently certified Junior Web Developer based in Seattle, WA looking to get some experience in the field! I graduated from my intensive coding course in March 2022 from the University of Washington's highly acclaimed fullstack development bootcamp, with high marks and multiple accolades to boot.</p>

                    <p>I knew coding was the perfect fit for me when I managed to have fun despite the immense challenges in front of me; between keeping a physically-intensive part-time job and devoting the remainder of my already scant time and energy towards the full-time program, I had very little room for anything beyond what was demanded of me. In spite of this, I not only succeeded in my work but excelled at it, and feel ready and eager to take on the greater challenges that the world of coding would offer me.</p>

                    <p>I aspire to someday use my resolve and goal-oriented mindset to give vision and inspiration to a team of my own, and develop the apps and ideas of my dreams! Until then, I have a lot to learn, and many hills still yet to climb, but I am certain in my capability, and need only the opportunity and time to prove it.</p>

                    <p>As for my background experience, I have a few years in manufacturing wherein I spent most of my time running programs on CNC machines to mill airplane parts for Boeing. Prior to that I was working for a small tech company which manufactured circuit boards. I also have a Bachelor's Degree in Neuroscience from Washington State University. I graduated in 2017 but found the biological sciences too messy for my liking. I would, however, someday love to tie my degree back into my coding career in the form of AI, which I am fascinated by.</p>

                    <p>I'm showcasing some of my work here
                        and will continue to update the page with more projects as they come along. I'm very proud of what I've done so far and am looking forward to creating bigger and greater projects in the future as I cultivate more experience. If you're interested in what I have to offer, please don't hesitate to checkout my contact information in the Contact tab, or via one of the options at the bottom of the page. I look forward to working with you!</p>
                </div>

            </div>


        </section>
    )
}

export default About;