import React from 'react';
import { Button } from '../Button/Button';
import '../Hero/Hero.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="hero-container">
      <video autoPlay loop muted>
        <source src="images/Hero1.mp4"></source>
      </video>
      <h1>Bienvenido a DoggyTech</h1>
      <p>¡El Mejor Amigo de tu Negocio!</p>
      <div className="hero-btns">
        <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
          <Link href="#form">Contáctenos</Link>
        </Button>
      </div>
    </div>
  );
}
