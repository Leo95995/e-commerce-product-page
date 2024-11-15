import "../node_modules/swiper/swiper.css";
import "../node_modules/swiper/swiper-bundle.css";
import MobileSlider from "./components/Sliders/MobileSlider";
import styled from "styled-components";
import { MOBILE, TABLET } from "./utilities/queries";
import { DummyProd } from "./utilities/db";
import {
  CUSTOM_ORANGE,
  FAKE_BLACK,
  PRIMARY_GRAY,
  PURE_WHITE,
} from "./utilities/colors";
import CustomizedInput from "./components/Input/input";
import AddToCartButton from "./components/AddToCartButton/addToCart";
import React, { useState } from "react";
import { cartStore } from "./zustandStore/store";
import cartBlack from "./assets/images/icon-cart-black.svg";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import DesktopSlider from "./components/Sliders/DesktopSlider";

const MobileContent = styled.div`
  display: none;
  @media (max-width: ${TABLET}) {
    display: block;
    padding: 0 180px;
  }
  @media (max-width: ${MOBILE}) {
    padding: 0px 0px 20px 0px;
  }
`;

const DesktopContent = styled.div`
  display: block;
  @media (max-width: ${TABLET}) {
    display: none;
  }
`;

const Pretitle = styled.h4`
  color: ${PRIMARY_GRAY};
  font-weight: 600;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1.85px;
  margin: 0;
  padding-bottom: 20px;
`;

const TitleText = styled.h2`
  font-weight: 900;
  font-size: 28px;
  padding: 0;
  margin: 0;
`;

const PriceContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Contentful = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  height: 30px;
  border-radius: 6px;
  background-color: ${FAKE_BLACK};
  color: ${PURE_WHITE};
  font-weight: 600;
  margin-bottom: 20px;
`;

const customStyle: React.CSSProperties = {
  marginTop: "20px",
  background: CUSTOM_ORANGE,
  border: "none",
  borderRadius: "12px",
};

const customStyleDesk: React.CSSProperties = {
  background: CUSTOM_ORANGE,
  border: "none",
  borderRadius: "12px",
};

const Home: React.FC = () => {
  const AddItem = cartStore((state: any) => state.addItem);
  const sweetAlert = withReactContent(Swal);

  const [quantity, setQuantity] = useState<number>(0);

  const addToCart = (prod: any, quant: number) => {
    console.log(prod, quant);
    for (let x = 0; x < quant; x++) {
      AddItem(prod);
    }
    if(quant > 0){
    sweetAlert.fire({
      title: <p>Item added</p>,
      timer: 1000,
      icon: "success",
      confirmButtonColor: CUSTOM_ORANGE,
    })}else{
      sweetAlert.fire({
        title: <p>Please add at least 1 item</p>,
        timer: 1000,
        icon: "error",
        confirmButtonColor: CUSTOM_ORANGE,
      })
    }
  };

  return (
    <>
      <MobileContent>
        <MobileSlider />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "20px 20px",
          }}
        >
          <Pretitle>{DummyProd.text}</Pretitle>
          <TitleText>{DummyProd.title}</TitleText>
          <p style={{ color: PRIMARY_GRAY, lineHeight: "25px" }}>
            {DummyProd.description}
          </p>

          <PriceContent>
            <div
              style={{
                display: "flex",
                gap: "15px",
                alignItems: "center",
                position: "relative",
              }}
            >
              <p style={{ fontSize: "28px", margin: 0, fontWeight: 600 }}>
                {DummyProd.discPrice}
              </p>
              <Contentful>{DummyProd.discPerc}</Contentful>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "start",
                position: "relative",
              }}
            >
              <p
                style={{
                  textDecoration: "line-through",
                  margin: 0,
                  fontWeight: 600,
                  color: PRIMARY_GRAY,
                }}
              >
                {DummyProd.fullPrice}
              </p>
            </div>
          </PriceContent>
          <CustomizedInput
            increments={{ quant: quantity, setQuant: setQuantity }}
          />
          <AddToCartButton
            action={() => addToCart(DummyProd, quantity)}
            icon={cartBlack}
            text="Add to cart"
            additionalStyle={customStyle}
          />
        </div>
      </MobileContent>
      <DesktopContent>
        <div
          style={{
            width: "100%",
            minHeight: "80vh",
            position: "relative",
            marginTop: "91px",
            display: "flex",
          }}
        >
          <div style={{ width: "44%", height: "auto", padding: "0 3%" }}>
            <DesktopSlider />
          </div>
          <div
            style={{
              width: "46%",
              padding:'0 2%',
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "20px 20px",
                gap:'5px'
              }}
            >
              <Pretitle>{DummyProd.text}</Pretitle>
              <TitleText style={{fontSize:'44px'}}>{DummyProd.title}</TitleText>
              <p style={{ color: PRIMARY_GRAY, lineHeight: "25px", fontSize:'16px' }}>
                {DummyProd.description}
              </p>

              <PriceContent >
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                  }}
                >
                  <p style={{ fontSize: "28px", margin: 0, fontWeight: 600 }}>
                    {DummyProd.discPrice}
                  </p>
                  <Contentful>{DummyProd.discPerc}</Contentful>
                </div>
              </PriceContent>
              <p
                    style={{
                      textDecoration: "line-through",
                      margin: 0,
                      fontWeight: 600,
                      color: PRIMARY_GRAY,
                    }}
                  >
                    {DummyProd.fullPrice}
                  </p>
              <div style={{display:'flex', alignItems:'center', gap:'20px', padding:'20px 0px'}}>
              <CustomizedInput
                increments={{ quant: quantity, setQuant: setQuantity }}
              />
              <AddToCartButton
                action={() => addToCart(DummyProd, quantity)}
                icon={cartBlack}
                text="Add to cart"
                additionalStyle={customStyleDesk}
              />
              </div>
            </div>
          </div>
        </div>
      </DesktopContent>
    </>
  );
};

export default Home;
