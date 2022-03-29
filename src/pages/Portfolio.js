import React from "react";
import Nav from "../components/Nav";
import '../styles/Portfolio.css'
import ponder1 from '../assets/images/ponder1.PNG';
import ponder2 from '../assets/images/ponder2.PNG';
import ponder3 from '../assets/images/ponder3.PNG';
import ponder4 from '../assets/images/ponder4.PNG';
import bcsa1 from '../assets/images/bcsa1.PNG';
import bcsa2 from '../assets/images/bcsa2.PNG';
import bcsa3 from '../assets/images/bcsa3.PNG';
import bcsa4 from '../assets/images/bcsa4.PNG';

function Portfolio() {

    return (
        <section>
            <Nav />
            <div className="portfolio-banner">
                <h1>Portfolio</h1>
            </div>

            <div className="portfolio-card-container row">
                <div className="portfolio-card">
                    <div className="portfolio-card-button-layer">
                        <button data-bs-toggle="collapse" type="button" data-bs-target="#collapse-bcsa" aria-expanded="false" aria-controls="collapse-bcsa">Expand</button>
                    </div>
                    <div className="portfolio-card-body-bcsa">
                        <p className="portfolio-card-text"></p>
                    </div>
                </div>
                <div className="portfolio-card">
                    <div className="portfolio-card-button-layer">
                    <button data-bs-toggle="collapse" type="button" data-bs-target="#collapse-ponder" aria-expanded="false" aria-controls="collapse-ponder">Expand</button>
                    </div>
                    <div className="portfolio-card-body-ponder">
                        <p className="portfolio-card-text"></p>
                    </div>
                </div>
                <div className="portfolio-card">
                    <div className="portfolio-card-button-layer">
                    <button data-bs-toggle="collapse" type="button" data-bs-target="#collapse-acnh" aria-expanded="false" aria-controls="collapse-acnh">Expand</button>
                    </div>
                    <div className="portfolio-card-body-acnh">
                        <p className="portfolio-card-text"></p>
                    </div>
                </div>
            </div>

            <div className="collapse" id="collapse-bcsa">
                <div className="portfolio-toggle">
                    <div className="portfolio-description">
                        <p>Welcome to BCS Adventures! You are about to embark on an epic journey filled with fierce battle, internal strife, evil bugs and, most importantly, triumph! Face off against evil TA's, peacock-ish devs and intelligent AI from the savage world of coding as you master the skills necessary to become a certified Fullstack Developer!</p>

                        <p>As junior developers and gamers, we wanted to conclude our time in bootcamp strongly and create something that we could not only be really proud of, but would enjoy using as well. With the skills we've cultivated thus far we figured we're ready enough to dive into creating our own coding/fantasy-themed RPG as both a celebration of and a testament to everything we've learned. The primary purpose of our game was to develop something we would enjoy both creating AND playing, and to tie together everything we've learned to end the bootcamp with a bang.</p>
                        <p className="portfolio-accolades">🏆Voted 1st Place for Students' Favorite</p>
                        <p className="portfolio-accolades">🏆Best UI/UX for UW Coding Bootcamp Project 3</p>
                        <a href="https://bcs-adventures.herokuapp.com/" target="_blank">Play</a>
                        <a href="https://github.com/Chrisle206/bcsa-react" target="_blank">GitHub</a>
                    </div>
                    <div className="portfolio-bcsa-thumbnail">
                        <div>
                            <img className="portfolio-thumbnail" src={bcsa1} />
                            <img className="portfolio-thumbnail" src={bcsa2} />
                        </div>

                        <div>
                            <img className="portfolio-thumbnail" src={bcsa3} />
                            <img className="portfolio-thumbnail" src={bcsa4} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="collapse" id="collapse-ponder">
                <div className="portfolio-toggle">
                    <div className="portfolio-description">
                        <p>Ever wanted to make a Twitter post, but anonymously? Ever wanted to say something without fear of getting canceled? Ever just felt like jumping into a spicy conversation with a stranger, with no strings attached? Then we have the app for you.</p>

                        <p>Ponder is a randomized social forum, whereby the user is able to 'Go Fish' from a pool of thoughts collected from all around the world, or post a thought themselves. The user has the option to create an account and post their thoughts, or 'Ponders,' under their username, but they can also elect to post anonymously. No account is necessary to use Ponder--anyone can join the conversation. However, only users with an account will be able to see a history of all their posts, and users posting anonymously will have a profanity filter applied to help curb toxicity.</p>
                        <p className="portfolio-accolades">🏆Best UI/UX for UW Coding Bootcamp Project 2</p>
                        <p className="portfolio-accolades">🏆Voted 2nd Place for Students' Favorite</p>
                        <a href="https://pacific-ravine-12135.herokuapp.com/" target="_blank">Try</a>
                        <a href="https://github.com/Chrisle206/ponder" target="_blank">GitHub</a>
                    </div>
                    <div className="portfolio-ponder-thumbnail">
                        <div>
                            <img className="portfolio-thumbnail" src={ponder1} />
                            <img className="portfolio-thumbnail" src={ponder2} />
                        </div>

                        <div>
                            <img className="portfolio-thumbnail" src={ponder3} />
                            <img className="portfolio-thumbnail" src={ponder4} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="collapse" id="collapse-acnh">
                <div className="portfolio-toggle">
                    <div className="portfolio-description">
                        <p>Animal Crossing New Horizons (ACNH) Villager Database is a simple app which allows users to retrieve information about their favorite ACNH villagers. ACNH is a popular sandbox-style video game series which focuses on laid-back gameplay and playful interactions with cute animal-themed characters called villagers. Every villager is completely unique and has their own set of phrases and interests, but some information such as birthdays or mottos are difficult to acquire through regular gameplay. Therefore, we decided to develop this app as a quick and easy way to discover more about your favorite ACNH characters!</p>

                        <p>ACNH Villager Database is one of the first projects I made while in coding bootcamp. I am very proud of it, even if it may not be the best reflection of what I am capable of now. It holds a special place in my heart! It is fun and easy to use, and should appeal to any fan of the Animal Crossing series.</p>
                        <p className="portfolio-accolades">🏆Best UI/UX for UW Coding Bootcamp Project 1</p>
                        <p className="portfolio-accolades">🏆Voted 2nd Place for Students' Favorite</p>
                        <a href="https://shnala.github.io/animal-crossing-new-horizons-villager-database/" target="_blank">Try</a>
                        <a href="https://github.com/shnala/animal-crossing-new-horizons-villager-database" target="_blank">GitHub</a>
                    </div>
                    <div className="portfolio-acnh-thumbnail">
                        <div>
                            <img className="portfolio-thumbnail" src="http://placecorgi.com/250/200" />
                            <img className="portfolio-thumbnail" src="http://placecorgi.com/250/200" />
                        </div>

                        <div>
                            <img className="portfolio-thumbnail" src="http://placecorgi.com/250/200" />
                            <img className="portfolio-thumbnail" src="http://placecorgi.com/250/200" />
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Portfolio;