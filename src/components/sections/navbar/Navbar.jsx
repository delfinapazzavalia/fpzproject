import React from 'react';
import '../navbar/navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <a href='#Home' className="navbar-left">KOURYXAGENCY</a>
                <div className="navbar-right">
                    <a href="#AboutMe">ABOUT ME</a>
                   <a href="#Skills">SKILLS</a>
                    <a href="#Projects">PROJECTS</a>
                    <a href="#Contact">CONTACT</a>
                    

                </div>
            </nav>
        </>
    )
}

export default Navbar