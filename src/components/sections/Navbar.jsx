import React from 'react';
import '../sections/navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <a href='#Home' className="navbar-left">FPZ Consultoria & Capacitacion</a>
                <div className="navbar-right">
                    <a href="#AboutMe">Trayectoria</a>
                    <a href="#Resume">Cursos</a>
                    <a href="#Projects">Clientes</a>
                    <a href="#Skills">Consultorias</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar