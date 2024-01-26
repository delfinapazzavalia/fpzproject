import React from 'react';
import '../navbar/navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <a href='#Home' className="navbar-left">BPZ</a>
                <div className="navbar-right">
                    <a href="#AboutMe">ABOUT ME</a>
                    <a href="#Resume">RESUME</a>
                    <a href="#Projects">PROJECTS</a>
                    <a href="#Skills">SKILLS</a>

                </div>
            </nav>
        </>
    )
}

export default Navbar