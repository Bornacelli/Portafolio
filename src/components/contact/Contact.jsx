import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_522vtar', 
      'template_q479tps', 
      form.current, 
      'QRDNv73jMI_BmnuGs'
    ).then((result) => {
      // Mostrar notificación de éxito
      setNotification({
        show: true,
        message: "¡Mensaje enviado con éxito! Pronto me pondré en contacto contigo.",
        type: "success"
      });
      
      form.current.reset(); // Limpia el formulario
      
      // Ocultar la notificación después de 5 segundos
      setTimeout(() => {
        setNotification({ show: false, message: '', type: '' });
      }, 5000);
      
    }).catch((error) => {
      // Mostrar notificación de error
      setNotification({
        show: true,
        message: "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.",
        type: "error"
      });
      
      // Ocultar la notificación después de 5 segundos
      setTimeout(() => {
        setNotification({ show: false, message: '', type: '' });
      }, 5000);
    });
  };

  // Función para cerrar la notificación manualmente
  const closeNotification = () => {
    setNotification({ show: false, message: '', type: '' });
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Contáctame</h2>

      {/* Notificación */}
      {notification.show && (
        <div className={`notification ${notification.type}`}>
          <p>{notification.message}</p>
          <button className="notification__close" onClick={closeNotification}>
            &times;
          </button>
        </div>
      )}

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">💬 Hablemos...</h3>
          <p className="contact__details">
            ¿No te gustan los formularios? No hay problema! 📧 <br />
            Envíame un email y conversemos 🚀✨  
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" name="user_name" className="contact__form-input" placeholder='Ingresa tu Nombre' required />
            </div>

            <div className="contact__form-div">
              <input type="email" name="user_email" className="contact__form-input" placeholder='Ingresa tu Email' required />
            </div>
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea 
              name="message" 
              cols="30"
              rows="10"
              className='contact__form-input'
              placeholder='Escribe tu mensaje'
              required
            ></textarea>
          </div>

          <button type="submit" className="btn">Enviar Mensaje</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;