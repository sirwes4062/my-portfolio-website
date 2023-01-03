import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_c7ix0zp",
      "template_m9xfy6y",
      form.current,
      "BQV9LcfjBYF6NKz54"
    );

    e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <artcle className="contact__option">
            <MdOutlineEmail className="contact__options-icon" />
            <h4>Email</h4>
            <a href="mailto:williamseneojo@gmail.com">Send a message</a>
            <h5>williamseneojo@gmail.com</h5>
          </artcle>
          <artcle className="contact__option">
            <RiMessengerLine className="contact__options-icon" />
            <h4>Messenger</h4>
            <a href="https://m.me/sirwes4062">Send a message</a>
            <h5>Williams Eneojo Salifu</h5>
          </artcle>

          <artcle className="contact__option">
            <BsWhatsapp className="contact__options-icon" />
            <h4>Whatsapp</h4>
            <a href="https://api.whatsapp.com/send?phone=07083288530">
              Send a message
            </a>
            <h5>07083288530</h5>
          </artcle>
        </div>

        <form useRef={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            required
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
