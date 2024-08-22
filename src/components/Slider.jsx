import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import { Navigation } from "swiper/modules";
import data from "../assets/data.json";
import { NextArrow, PrevArrow } from "./SVG";
import { useEffect } from "react";

export default function Slider({ activeChar, setActiveChar }) {
  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.realIndex;
    const activeSlide = data[activeIndex];
    setActiveChar(activeSlide.name);
  };

  useEffect(() => {
    const swiper = document.querySelector(".swiper").swiper;

    swiper.slides.forEach((slide) => {
      slide.onclick = () => {
        const index = slide.dataset.swiperSlideIndex;
        swiper.slideToLoop(index);
      };
    });
  }, []);

  console.log(activeChar);

  return (
    <div className="header__swiper">
      <div className="swiper-button swiper-button-next">
        <NextArrow />
      </div>
      <div className="swiper-button swiper-button-prev">
        <PrevArrow />
      </div>
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        modules={[Navigation]}
        className="swiper"
        slidesPerView={5}
        spaceBetween={26}
        centeredSlides={true}
        loop={true}
        onSlideChange={handleSlideChange}
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index} data-swiper-slide-index={index}>
            <div className="swiper-clip">
              <img src={slide.icon} alt={slide.name} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

Slider.propTypes = {
  activeChar: PropTypes.string.isRequired,
  setActiveChar: PropTypes.func.isRequired,
};
