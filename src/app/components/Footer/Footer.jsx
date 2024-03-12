'use client';

import React from 'react';
import '../Footer/Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} DoggyTech - TODOS LOS DERECHOS RESERVADOS.</p>
    </footer>
  );
}
