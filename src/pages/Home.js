import React from 'react';
import '../styles/Home.css'

function Home() {
    return (
        <section>
            <div className='big-name'>
                <h2>Shawn Analla</h2>
            </div>

            <div className='card-container row'>
                <div className="card">
                    <img className="card-img-top" src="..." alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">About Card</p>
                    </div>
                </div>

                <div className="card">
                    <img className="card-img-top" src="..." alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">Portfolio Card</p>
                    </div>
                </div>
            </div>
            <div className='card-container row'>
                <div className="card">
                    <img className="card-img-top" src="..." alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">Contact Card</p>
                    </div>
                </div>

                <div className="card">
                    <img className="card-img-top" src="..." alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">Personal Card</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;