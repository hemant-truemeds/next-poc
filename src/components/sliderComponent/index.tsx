import React from "react";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
  Keyboard,
  Scrollbar,
  A11y,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "@images/sliderImg1.webp";
import img2 from "@images/sliderImg2.webp";
import img3 from "@images/sliderImg3.webp";
import img4 from "@images/sliderImg4.webp";
import Image from "next/image";
import styles from "./slider.module.scss";

SwiperCore.use([EffectCoverflow, Pagination]);

const SliderComponents = () => {
  return (
    <div className={styles.swiperModalWrapper}>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        keyboard={true}
        loop
        modules={[Navigation, Pagination, A11y, Keyboard]}
      >
        <SwiperSlide>
          <Image loading="lazy" src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image loading="lazy" src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image loading="lazy" src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image loading="lazy" src={img4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderComponents;

// import React from "react";
// import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";

// SwiperCore.use([EffectCoverflow, Pagination]);

// const SliderComponents = () => {
//   return (
//     <div>
//       SliderComponents
//       <Swiper
//         cssMode={true}
//         navigation={true}
//         pagination={true}
//         mousewheel={true}
//         keyboard={true}
//         modules={[Navigation, Pagination, Mousewheel, Keyboard]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default SliderComponents;
