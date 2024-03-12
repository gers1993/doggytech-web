'use client';

import React from 'react';
import '../Card/Card.css';

export default function Card(props) {
  return (
    <>
      <div className="cards__item">
        <div className="card__item__element">
          <div className="cards__item__pic-wrap" data-category={props.label}>
            <img src={props.src} alt="Service-image" className="cards__item__img" />
          </div>
          <div className="cards__item__info">
            <h4 className="cards__item__text">{props.text}</h4>
          </div>
        </div>
      </div>
    </>
  );
}
