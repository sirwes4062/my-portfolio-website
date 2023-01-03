import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { BsAwardFill } from "react-icons/bs";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="about_me" className="about__me-image" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAwardFill className="about__icon" />
              <h5>Experience</h5>
              <small>3yrs working experience </small>
            </article>
            <article className="about__card">
              <AiOutlineUsergroupAdd className="about__icon" />
              <h5>Clients</h5>
              <small>200+ worldwide </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>80+ </small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus cupiditate ipsum tempore, error vero, odio rerum quia,
            reiciendis tempora modi architecto perferendis. Soluta ea deserunt
            sequi autem quis sunt distinctio?
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
