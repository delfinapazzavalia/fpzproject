import React, { useRef } from "react";
import "../contact/contact.css";
import emailjs from "emailjs-com";


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_gddc1sf",
          "template_hwcnt3c",
          form.current,
          "XOiG6z6U_qoGskMhJ"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  
  return (
    <>
      <div id="Contact" className="contact-form">
        <h2>CONTACT ME</h2>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="form_name" required />
          <label>eMail</label>
          <input type="email" name="form_email" required />
          <label>Message</label>
          <textarea name="message" required />
          <button type="submit" value="Send" style={{ cursor: "pointer" }}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
