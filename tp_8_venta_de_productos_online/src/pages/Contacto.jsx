import React from 'react';
import './Contacto.css';

function Contacto() {
  return (
    <section className="contacto">
      <h1>Contacto</h1>
      <form className="contact-form" onSubmit={e => e.preventDefault()}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contacto;
