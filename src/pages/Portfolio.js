import React from "react";
import Nav from "../components/Nav";
import '../styles/Portfolio.css'

function Portfolio() {

    return (
        <section>
            <Nav />
        <div className="portfolio-banner">
            <h1>Portfolio</h1>
        </div>

            <div className="portfolio-card-container row">
                <div className="portfolio-card">
                    <div className="portfolio-card-body-bcsa">
                        <p className="portfolio-card-text">BCS Adventures</p>
                    </div>
                </div>
                <div className="portfolio-card">
                    <div className="portfolio-card-body-ponder">
                        <p className="portfolio-card-text">Project 2</p>
                    </div>
                </div>
                <div className="portfolio-card">
                    <div className="portfolio-card-body-acnh">
                        <p className="portfolio-card-text">Project 3</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;