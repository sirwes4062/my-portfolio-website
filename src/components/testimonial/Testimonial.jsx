import React from "react";
import "./testimonial.css";
import AVR1 from "../../assets/avatar1.jpg";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Reviews from client</h5>
      <h2>Testimonies</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVR1} alt="avatar1" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            consequatur ab blanditiis adipisci corporis sint iste veritatis
            consequuntur aliquam, aperiam molestiae eos quaerat ipsum vel saepe
            expedita laudantium et deleniti?
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVR1} alt="avatar1" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            consequatur ab blanditiis adipisci corporis sint iste veritatis
            consequuntur aliquam, aperiam molestiae eos quaerat ipsum vel saepe
            expedita laudantium et deleniti?
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVR1} alt="avatar1" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            consequatur ab blanditiis adipisci corporis sint iste veritatis
            consequuntur aliquam, aperiam molestiae eos quaerat ipsum vel saepe
            expedita laudantium et deleniti?
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVR1} alt="avatar1" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            consequatur ab blanditiis adipisci corporis sint iste veritatis
            consequuntur aliquam, aperiam molestiae eos quaerat ipsum vel saepe
            expedita laudantium et deleniti?
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonial;
