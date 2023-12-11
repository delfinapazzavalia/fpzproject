import React from "react";
import "../home/home.css";
import perfil from "../home/fpzProfile.jpeg"

const handleClick = () => {
  const seccionElement = document.getElementById('Contact');
  if (seccionElement) {
    seccionElement.scrollIntoView({ behavior: 'smooth' });
  }
};

const Home = () => {
  return (
    <div id="Home" className="home">

      <div className="home-left">
        <h1 className="home-welcome"><strong>FEDERICO PAZ ZAVALIA</strong></h1>
        <h2>Consultoria & Capacitacion</h2>
        
        <span>Sistemas de Bombeo y Bombas Centrifugas</span>
        <br />
        <br />
        <button onClick={handleClick} class="my-button">CONTACTAME</button>
      </div>
      <div className="home-right">
        <img src={perfil} alt="Profile" />
      </div>
    </div>
  );
};

export default Home;