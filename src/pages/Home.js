import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Home.css'
import bcsadventures from '../assets/images/bcs-adventures-logo.png'

function Home() {
    return (
        <section>
            <div className='big-name'>
                <h1>Shawn Analla</h1><h5>Jr Web Developer</h5>
            </div>

            <div className='card-container home-card-container row'>
                <div className="card home-card">
                    <div className="card-body home-card-body about-body">
                        <p className="card-title home-card-title">About</p>
                        <Link to="/about">
                            <div className='card-description-layer home-card-description-layer'>
                                <p className='card-description home-card-description'>Learn more about me and my aspirations.</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="card home-card">
                    <div className="card-body home-card-body portfolio-body">
                        <p className="card-title home-card-title">Portfolio</p>
                        <Link to="/portfolio">
                        <div className='card-description-layer home-card-description-layer'>
                            <p className='card-description home-card-description'>View some of my favorite projects. </p>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
            
            <div className='card-container home-card-container row'>
                <div className="card home-card">
                    <div className="card-body home-card-body contact-body">
                        <p className="card-title home-card-title">Contact</p>
                        <Link to="contact">
                        <div className='card-description-layer home-card-description-layer'>
                            <p className='card-description home-card-description'>Find details on how to get in contact with me.</p>
                        </div>
                        </Link>
                    </div>
                </div>

                <div className="card home-card">
                    <div className="card-body home-card-body personal-body">
                        <p className="card-title home-card-title">Personal</p>
                        <Link to="personal">
                        <div className='card-description-layer home-card-description-layer'>
                            <p className='card-description home-card-description'>Casual stuff like photography, playlists, and screenshots from games I love.</p>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;