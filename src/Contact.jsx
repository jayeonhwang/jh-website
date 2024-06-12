import { useRef } from "react";


export function Contact() {
  const form = useRef()

  const sendEmail = () => {

  }
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