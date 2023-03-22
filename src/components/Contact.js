import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { HashScroll } from 'react-hash-scroll';

const Contact = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_y44xj9m',
        'template_x0xpkdd',
        form.current,
        'Il6zOKQWcq2oTh0H9'
      )
      .then(
        (result) => {
          props.setStatusMessage('¡Email enviado correctamente!');
        },
        (error) => {
          props.setStatusMessage('Por favor vuelve a intentarlo.');
        }
      );
  };
  return (
    <HashScroll hash="contact" position="start">
      <section id="contact" className="contactSection">
        <h2 className="contactSection_title">Contacto</h2>
        <div className="contactSection_form">
          <form ref={form} onSubmit={sendEmail} className="form" action="">
            <div className="form_section">
              <label className="form_section-legend" htmlFor="fullname">
                Nombre Completo
              </label>
              <input
                className="form_section-input"
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Aquí tu nombre"
                required
              />
            </div>
            <div className="form_section">
              <label className="form_section-legend" htmlFor="email">
                Email
              </label>
              <input
                className="form_section-input"
                type="email"
                name="email_id"
                id="email_id"
                placeholder="nombre.apellido@gmail.com"
                required
              />
            </div>
            <div className="form_section">
              <label className="form_section-legend" htmlFor="message">
                Mensaje
              </label>
              <textarea
                className="form_section-textarea"
                type="text"
                name="message"
                id="message"
                placeholder="¿En qué te puedo ayudar?"
                required
              />
            </div>
            <div className="form_section">
              <input
                className="form_section-btn"
                type="submit"
                id="submit"
                value="Enviar"
              ></input>
            </div>
            <p className="statusText">{props.statusMessage}</p>
          </form>
        </div>
      </section>
    </HashScroll>
  );
};
export default Contact;
