import React from 'react'
import "../welcome/welcome.css"
import perfil from "../welcome/1706056546309.jpeg"

const handleClick = () => {
    const seccionElement = document.getElementById('Contact');
    if (seccionElement) {
        seccionElement.scrollIntoView({ behavior: 'smooth' });
    }
};

const Welcome = () => {
    return (
        <>
            <div id="Home" className="home">

                <div className="home-left">
                    <h1 className="home-welcome"><strong> WELCOME! </strong></h1>
                    <h2>I'm Bautista Paz Zavalia</h2>

                    <span>Graphic and Multimedial Designer</span>
                    <br />
                    <br />
                    <button onClick={handleClick} class="my-button">CONTACT ME</button>
                </div>
                <div className="home-right">
                    <img src={perfil} alt="Profile" />
                </div>
            </div>
        </>
    )
}

export default Welcome