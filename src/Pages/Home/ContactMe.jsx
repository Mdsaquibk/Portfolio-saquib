import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICEID, import.meta.env.VITE_T_ID, formRef.current, {
        publicKey: import.meta.env.VITE_KEY,
      })
      .then(
        () => {
          setSuccess(true);
          setError(false);
          formRef.current.reset();
        },
        (error) => {
          setError(true);
          setSuccess(false)
        }
      );
  };



  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        {error && "Error"}
          {success && "Success"}
      </div>
      <form className="contact--form--container" onSubmit={sendEmail} ref={formRef}>
        <div className="container">
          <label htmlFor="name" className="contact--label">
            <span className="text-md">Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="name"
              id="name"
              required
            />
          </label>
         
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
         
        </div>
        
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
        
      </form>
    </section>
  );
}
