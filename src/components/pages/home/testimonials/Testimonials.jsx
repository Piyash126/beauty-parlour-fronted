// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import testimonialImg1 from "../../../../assets/images/Ellipse 90.png";
import testimonialImg2 from "../../../../assets/images/Ellipse 91.png";
import TestimonialPerSilde from "./testimonialPerSilde/TestimonialPerSilde";

const Testimonials = () => {
  return (
    <section className="container mx-auto text-center">
      <h1 className="container mx-auto text-center text-3xl my-8 font-bold">
        Testimonials
      </h1>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        // loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false, // keeps autoplay running after user interaction
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper mb-20"
      >
        <SwiperSlide>
          <TestimonialPerSilde
            img={testimonialImg1}
            name="Nash Katrik"
          ></TestimonialPerSilde>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialPerSilde
            img={testimonialImg2}
            name="Mariom Barrom"
          ></TestimonialPerSilde>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialPerSilde
            img={testimonialImg2}
            name="Bria Malone"
          ></TestimonialPerSilde>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialPerSilde
            img={testimonialImg1}
            name="Nash Katrik"
          ></TestimonialPerSilde>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialPerSilde
            img={testimonialImg2}
            name="Mariom Barrom"
          ></TestimonialPerSilde>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialPerSilde
            img={testimonialImg2}
            name="Bria Malone"
          ></TestimonialPerSilde>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
