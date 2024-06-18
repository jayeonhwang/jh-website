import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';


export function Contact() {
  const form = useRef()
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsEmailSent(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsEmailSent(false);
        },
      );
    e.target.reset();
  };

  return (
    <div className="contact-section">
      <h2>Contact me</h2>

      {isEmailSent && <h1>Thank you for your message!</h1>}

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