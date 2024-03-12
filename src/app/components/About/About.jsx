'use client';

import React from 'react';
import './About.css';

export default function About() {
  const aboutInfoData = [
    {
      key: '1',
      image: 'images/InnovacionIcon.png',
      title: 'Misión',
      text: 'Ofrecer soluciones digitales, automatización inteligente, consultoría y capacitación a empresas comprometidas con el desarrollo tecnológico que aseguren el cumplimiento de sus sueños.',
    },
    {
      key: '2',
      image: 'images/CalidadIcon.png',
      title: 'Visión',
      text: 'Ser el mejor amigo de las empresas alrededor del mundo en materia de tecnología, asesoría y crecimiento empresarial.',
    },
    {
      key: '3',
      image: 'images/ValoresIcon.png',
      title: 'Valores',
      text: 'Innovacion, calidad y Honestidad.',
    },
  ];
  return (
    <div className="about-section-wrapper" id="nosotros">
      <div className="about-section-top">
        <h1 className="primary-heading">Acerca de nosotros</h1>
      </div>
      <div className="about-section-bottom">
        {aboutInfoData.map((data) => (
          <div className="about-section-info" key={data.key}>
            <div className="info-boxes-icon-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
