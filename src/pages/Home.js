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

            <div className='card-container row'>
                <div className="card">
                    <div className="card-body about-body">
                        <p className="card-title">About</p>
                        <Link to="/about">
                            <div className='card-description-layer'>
                                <p className='card-description'>Learn more about me and my aspirations.</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body portfolio-body">
                        <p className="card-title">Portfolio</p>
                        <Link to="/portfolio">
                        <div className='card-description-layer'>
                            <p className='card-description'>View some of my favorite projects. </p>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='card-container row'>
                <div className="card">
                    <div className="card-body contact-body">
                        <p className="card-title">Contact</p>
                        <Link to="contact">
                        <div className='card-description-layer'>
                            <p className='card-description'>Find details on how to get in contact with me.</p>
                        </div>
                        </Link>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body personal-body">
                        <p className="card-title">Personal</p>
                        <Link to="personal">
                        <div className='card-description-layer'>
                            <p className='card-description'>Casual stuff like photography, playlists, and screenshots from games I love.</p>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;