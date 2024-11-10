import styled from "styled-components";
import { MOBILE, TABLET } from "../../utilities/queries";
// Import Swiper React components
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import { ProdDatas } from "../../utilities/db";

import "../../../node_modules/swiper/swiper.css";
import "../../../node_modules/swiper/swiper-bundle.css"
import { BLACK, PURE_WHITE } from "../../utilities/colors";
import React from "react";


const MainImageContainer = styled.div`
  @media (max-width: ${TABLET}) {
    height: auto;
    border-radius: 20px;
  }
  @media (max-width: ${MOBILE}) {
    height: fit-content;
    width: 100%;
  }

  .swiper-button-next,
  .swiper-button-prev {
    height: 39px;
    z-index: 100;
    width: 38px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${PURE_WHITE};
    border-radius: 50%;
    &:hover {
      filter: brightness(0.8);
    }
    &::after {
      font-size: 20px;
      color: ${BLACK};
      font-weight: 900;
      border-width: 2px;
    }
  }
`;

const SliderImagesMobile = styled.img`
@media(max-width: ${TABLET}){
    width: 100%;
    max-height: 700px;
    border-radius: 5px;


}
@media(max-width: ${MOBILE}){
    width: 100%;
    height:auto ;
    max-height:600px;
    border-radius: 0px;

}
    
`

const MobileSlider: React.FC = () => {
  return (
    <MainImageContainer>
      <Swiper
        spaceBetween={0}
        modules={[Navigation]}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        {ProdDatas.productsImages.map((sliderContent, index) => (
          <>
            {" "}
            <SwiperSlide key={index} virtualIndex={index}>
              <SliderImagesMobile
                style={{  }}
                src={sliderContent}
              />
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </MainImageContainer>
  );
};

export default MobileSlider;
