import React from 'react';
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
                    {/* <img className="card-img-top" src={bcsadventures} alt="Card image cap" /> */}
                    <div className="card-body">
                        <p className="card-text">About Card</p>
                        <div className='card-description-layer'>
                        <p className='card-description'>Learn more about who I am, what I do, and my aspirations.</p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <img className="card-img-top" src="..." alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">Portfolio Card</p>
                        <div className='card-description-layer'>
                        <p className='card-description'>View some of my favorite projects. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card-container row'>
                <div className="card">
                    <img className="card-img-top" src="..." alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">Contact Card</p>
                        <div className='card-description-layer'>
                        <p className='card-description'>Find details about how to get in contact with me.</p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <img className="card-img-top" src="" alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">Personal Card</p>
                        <div className='card-description-layer'>
                        <p className='card-description'>Some cool stuff of mine including photography, playlists, and screenshots from games I love.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;