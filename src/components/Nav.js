import React from "react";
import { Link } from "react-router-dom";

function Nav({ currentPage, handlePageChange }) {
    return (
        <nav className="nav">
            <ul className="nav-links">
              <li><Link to ="/home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' || '/' ? 'nav-link active' : 'nav-link'}>Home</Link></li>
              <li><Link to ="/about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About Me</Link></li>
              <li><Link to ="/portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Link></li>
              <li><Link to ="/contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</Link></li>
              <li><Link to ="/personal" onClick={() => handlePageChange('Personal')} className={currentPage === 'Personal' ? 'nav-link active' : 'nav-link'}>Personal</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;