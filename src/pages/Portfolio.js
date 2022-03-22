import React from "react";
import Nav from "../components/Nav";

function Portfolio() {

    return (
        <section>
            <Nav />
        <div className="banner">
            <h3>Banner Here</h3>
        </div>

            <div className="row">
                <div className="card" style={{ width: 18 + 'rem' }}>
                    <img className="card-img-top" src="..." alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">Project 1</p>
                    </div>
                </div>
                <div className="card" style={{ width: 18 + 'rem' }}>
                    <img className="card-img-top" src="..." alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">Project 2</p>
                    </div>
                </div>
                <div className="card" style={{ width: 18 + 'rem' }}>
                    <img className="card-img-top" src="..." alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">Project 3</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;