import { useRef } from "react";
import emailjs from '@emailjs/browser';


export function Contact() {

  const API_KEY_SERVICE = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const API_KEY_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const API_KEY_PUBLIC = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(API_KEY_SERVICE, API_KEY_TEMPLATE, form.current, {
        publicKey: API_KEY_PUBLIC,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    e.target.reset();
  };
  return (

    <div className="contact-section">
      <h2>contact</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">

        <p>Your email address</p>
        <input type="text" placeholder="name@email.com" name="sender-email" />

        <p>Name</p>
        <input type="text" placeholder="Full name" name="sender-name" />

        <p>Subject</p>
        <input type="text" placeholder="Subject" name="subject" />

        <p>Message: </p>

        <textarea className="message" name="message">
        </textarea>

        <div className="send-btn">
          <button type="submit" className="message-btn">Send Message</button>
        </div>

      </form>
    </div>

  )
}