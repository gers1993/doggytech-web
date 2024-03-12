import React from 'react';
import Card from '../Card/Card';
import '../Card/Card.css';

export default function Servicios() {
  return (
    <div className="cards" id="servicios">
      <h1>Nuestros Servicios</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <div className="cards__items">
            <Card
              src="images/Servicios1.jpg"
              text="Capacitaciones sobre Transformación Digital y Metodologías Ágiles "
              label="Capacitaciones"
            />
            <Card src="images/Servicios2.jpg" text=" Talleres Rpa’s y optimización de procesos. " label="Talleres" />
            <Card
              src="images/Servicios3.jpg"
              text="Prestamos Servicios de Outsourcing con personal especializado. "
              label="Especialidad"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
