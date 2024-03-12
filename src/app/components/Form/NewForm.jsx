'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { saveContactInfo } from '@/app/components/Form/SaveContact';
import '../Form/Form.css';
import swal from 'sweetalert';

export default function NewForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const { reset } = useForm();

  useEffect(() => {
    validateForm();
  }, [name, email, message]);

  const validateForm = () => {
    let errors = {};

    if (!name) {
      errors.name = 'El campo es requerido.';
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      errors.name = 'Solo se permiten caracteres alfabéticos.';
    }

    if (!email) {
      errors.email = 'El campo es requerido.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'El formato del correo no es válido';
    }

    if (!message) {
      errors.message = 'El campo es requerido.';
    } else if (message.length > 1200) {
      errors.message = 'Mensaje no puede exceder 1200 caracteres';
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSubmit = () => {
    if (isFormValid) {
      swal('Enviado', 'El formulario ha sido enviado de manera exitosa, ¡Muchas gracias!', 'success');
      reset();
    } else {
      swal('Oups...', 'El formulario no ha podido ser enviado, intenta de nuevo!', 'error');
    }
  };
  return (
    <div className="form-container" id="form">
      <h1 className="form-tittle">Comunícate con nosotros</h1>
      <div className="form-wrapper">
        <form action={saveContactInfo} className="p-10" id="form">
          <h2>Comunícate con nosotros.</h2>

          <input
            className="w-full md:w-[600px]"
            placeholder="Nombre"
            type="text"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p style={styles.error}>{errors.name}</p>}

          <input
            className="w-full md:w-[600px]"
            placeholder="Correo Electrónico"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}

          <textarea
            className=" message-input w-full md:w-[600px]"
            placeholder="Mensaje"
            value={message}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            type="message"
          />
          {errors.message && <p style={styles.error}>{errors.message}</p>}
          <div className="button-Section">
            <button
              className="btn-form bg-black text-white rounded-lg"
              type="submit"
              value="Enviar"
              disabled={!isFormValid}
              onClick={handleSubmit}
            >
              Enviar
            </button>
          </div>
        </form>

        <div className="form-info">
          <p>19 av. 4-70, sector 5 Las Magnolias, Residenciales Alamedas de Santa Clara, zona 3</p>
          <p>Villa Nueva, Guatemala</p>
          <h2>DoggyTech</h2>
          <h2>Horario</h2>
          <p>lun 09:00 a. m. – 05:00 p. m.</p>
          <p>mar 09:00 a. m. – 05:00 p. m.</p>
          <p>mié 09:00 a. m. – 05:00 p. m.</p>
          <p>jue 09:00 a. m. – 05:00 p. m.</p>
          <p>vie 09:00 a. m. – 05:00 p. m.</p>
          <p>
            sáb <strong>Cerrado</strong>
          </p>
          <p>
            dom <strong>Cerrado</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  error: {
    color: '#3D3B40',
    fontSize: '14px',
    marginBottom: '2px',
    textAlign: 'left',
  },
};
