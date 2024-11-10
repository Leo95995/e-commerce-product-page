import styled from "styled-components";
import { MOBILE, TABLET } from "../../utilities/queries";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProdDatas } from "../../utilities/db";
import "../../../node_modules/swiper/swiper.css";
import "../../../node_modules/swiper/swiper-bundle.css";
import { BLACK, CUSTOM_ORANGE, PURE_WHITE } from "../../utilities/colors";
import React, { useState, useRef, useEffect } from "react";
import closeIcon from "../../assets/images/icon-close-thumbnails.svg";

const MainImageContainer = styled.div`
  border-radius: 20px;
  max-height: 500px;
  max-width: 600px;
`;

const CustomCloser = styled.img`
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  &:active{
    transform: scale(0.98);
  }
`;

const FixedWrapper = styled.div`
  border-radius: 20px;
  max-height: fit-content;
  max-width: 600px;
  position: fixed;
  top: 20%;
  left: 30%;
  z-index: 1000;
  .swiper-button-next,
  .swiper-button-prev {
    height: 20px;
    z-index: 100;
    margin: -70px -38px;
    width: 20px;
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
      font-size: 16px;
      color: ${BLACK};
      font-weight: 900;
      border-width: 2px;
    }
  }
`;

const SliderImagesMobile = styled.img`
  border-radius: 20px;
  max-height: 500px;
  max-width: 600px;
  width: 100%;
  @media (max-width: ${TABLET}) {
    width: 100%;
    max-height: 700px;
    border-radius: 5px;
  }
  @media (max-width: ${MOBILE}) {
    width: 100%;
    height: auto;
    max-height: 600px;
    border-radius: 0px;
  }
`;

const ThumbsContainer = styled.div`
  &:hover {
    filter: brightness(0.8);
  }
`;

const DesktopSlider: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [activeThumb, setActiveThumb] = useState(activeImage);

  const [modalOpen, setModalOpen] = useState(false);
  const swiperRef = useRef<any>(null);
  const swiperRef2 = useRef<any>(null);
  

 

  const handleThumbnailClick = (index: number) => {
    setActiveImage(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  const handleThumbnailClickThumbs = (index: number) => {
    setActiveThumb(index);
    if (swiperRef2.current) {
      swiperRef2.current.slideTo(index);
    }
  };

  const HandleModalOpen = (mode: boolean) => {
    if (mode) {
      document.body.style.overflow = "hidden";
      setModalOpen(true);
    } else {
      setModalOpen(false);
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      <MainImageContainer>
        <Swiper
          onClick={() => HandleModalOpen(true)}
          style={{
            borderRadius: "20px",
            maxHeight: "500px",
            cursor: "pointer",
          }}
          ref={swiperRef}
          spaceBetween={0}
          modules={[Navigation]}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          onSlideChange={(swiper) => setActiveImage(swiper.activeIndex)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {ProdDatas.productsImages.map((sliderContent, index) => (
            <SwiperSlide key={index} style={{ borderRadius: "20px" }}>
              <SliderImagesMobile src={sliderContent} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            paddingTop: "30px",
          }}
        >
          {ProdDatas.prodThumbs.map((thumb, index) => (
            <ThumbsContainer
              key={index}
              style={{
                borderRadius: "12%",
                cursor: "pointer",
              }}
              onClick={() => handleThumbnailClick(index)}
            >
              <img
                src={thumb}
                style={{
                  borderRadius: "10%",
                  height: "88px",

                  border:
                    activeImage === index ? `5px solid ${CUSTOM_ORANGE}` : "",
                }}
              />
            </ThumbsContainer>
          ))}
        </div>
      </MainImageContainer>
      {modalOpen && (
        <>
          <div
            style={{
              position: "fixed",
              right: 0,
              bottom: 0,
              zIndex: "999",
              overflow: "hidden",
              width: "100%",
              background: "black",
              opacity: 0.7,
              left: 0,
              top: 0,
              height: "100%",
              display: "block",
            }}
          ></div>
          <FixedWrapper>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                padding: "10px",
              }}
            >
              <CustomCloser
                onClick={() => HandleModalOpen(false)}
                src={closeIcon}
                style={{ alignSelf: "end", height: "24px" }}
              />
            </div>
            <Swiper
              style={{
                borderRadius: "20px",
                maxHeight: "500px",
                cursor: "pointer",
              }}
              ref={swiperRef2}
              spaceBetween={0}
              modules={[Navigation]}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              onSlideChange={(swiper) => setActiveThumb(swiper.activeIndex)}
              onSwiper={(swiper) => (swiperRef2.current = swiper)}
            >
              {ProdDatas.productsImages.map((sliderContent, index) => (
                <SwiperSlide key={index} style={{ borderRadius: "20px" }}>
                  <SliderImagesMobile src={sliderContent} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                paddingTop: "30px",
              }}
            >
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
              {ProdDatas.prodThumbs.map((thumb, index) => (
                <ThumbsContainer
                  key={index}
                  style={{
                    borderRadius: "12%",
                    cursor: "pointer",
                  }}
                  onClick={() => handleThumbnailClickThumbs(index)}
                >
                  <img
                    src={thumb}
                    style={{
                      borderRadius: "10%",
                      height: "88px",

                      border:
                        activeThumb === index
                          ? `5px solid ${CUSTOM_ORANGE}`
                          : "",
                    }}
                  />
                </ThumbsContainer>
              ))}
            </div>
          </FixedWrapper>
        </>
      )}
    </>
  );
};

export default DesktopSlider;
