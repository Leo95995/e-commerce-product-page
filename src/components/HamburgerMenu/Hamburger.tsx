import styled, { keyframes } from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import { DummyProd, ISection } from "../../utilities/interfaces";
// Colors
import {
  FAKE_BLACK,
  FAKE_WHITE,
  PRIMARY_GRAY,
  PURE_WHITE,
  CUSTOM_ORANGE,
} from "../../utilities/colors";

// Assets
import profilePic from "../../assets/images/image-avatar.png";
import logo from "../../assets/images/logo.svg";
import cart from "../../assets/images/icon-cart.svg";
import trash from "../../assets/images/icon-delete.svg";
import closeIcon from "../../assets/images/icon-close.svg";
import AddToCartButton from "../AddToCartButton/addToCart";
import { cartStore } from "../../zustandStore/store";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { MOBILE, TABLET } from "../../utilities/queries";

const entranceAnimista = keyframes`
  from {
    transform: translateX(-250px);
  }
  to {
    transform: translateX(0);
  }

`;

const MenuCustom = styled.div`
  z-index: 51;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  padding: 0 25px;
  width: 70%;
  box-shadow: 0px 0px 50px 1px ${PRIMARY_GRAY};
  background-color: ${PURE_WHITE};
  transition: all 500ms ease;
  animation: ${entranceAnimista} 500ms ease;
  font-weight: 600;
`;

const CustomLink = styled.a`
  &:hover {
    color: ${PRIMARY_GRAY};
  }
`;

const MobileCartModal = styled.div`
  width: 92%;
  background-color: transparent;
  height: 300px;

  position: absolute;
  top: 65px;
  z-index: 200;
  padding: 4%;
  max-width: 450px;
  top: 50px;
  right: 0;
  @media(max-width: ${TABLET}){

  }
  @media(max-width: ${MOBILE}){
    right: 0;
    top: 65px;
  }
`;

const CartModalContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${PURE_WHITE};
  z-index: 200;
  border-radius: 8px;
  box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.4);
`;
const CartVal = styled.span`
  position: absolute;
  top: -12px;
  background-color: ${CUSTOM_ORANGE};
  color: white;
  padding: 0px 6px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 50%;
  right: -6px;
`;

interface IHamburger {
  datas: any;
  cartData: DummyProd[];
}



const HamburgerMenu: React.FC<IHamburger> = ({ datas, cartData }) => {

  const [status, setStatus] = useState<boolean>(false);
  const [cartModal, setCartModal] = useState<boolean>(false);
  const clearCart = cartStore((state:any)=> state.clearCart)  
  const sweetAlert = withReactContent(Swal)




  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          cursor: "pointer",
          alignItems: "center",
          padding: "0px 20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            onClick={() => setStatus(true)}
            style={{ display: "flex", alignItems: "center" }}
          >
            <MenuIcon style={{ fill: PRIMARY_GRAY }} />
          </div>
          <div>
            <img src={logo}></img>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
          <div style={{ position: "relative" }}>
            <CartVal>{cartData.length}</CartVal>
            <img
              src={cart}
              onClick={() => setCartModal((prev) => !prev)}
              style={{ height: "24px", width: "24px" }}
            ></img>
          </div>
          {cartModal && (
            <MobileCartModal>
              <CartModalContent>
                <div
                  style={{
                    height: "18%",
                    borderBottom: `3px solid ${FAKE_WHITE}`,
                    padding: "10px 24px",
                  }}
                >
                  <h5>Cart</h5>
                </div>
                {cartData[0] && (
                  <div style={{ padding: "10px 24px" }}>
                    <div
                      style={{
                        display: "flex",
                        gap: "15px",
                        color: PRIMARY_GRAY,
                        paddingTop: "10px",
                      }}
                    >
                      <img
                        style={{ width: "50px", borderRadius: "4px" }}
                        src={cartData[0].baseImage}
                      />{" "}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "5px",
                        }}
                      >
                        <p style={{ padding: 0, margin: 0 }}>
                          {cartData[0].title}
                        </p>
                        <div
                          style={{
                            padding: "2px 0px",
                            display: "flex",
                            gap: "5px",
                          }}
                        >
                          <span>{cartData[0].discPrice} x</span>
                          <span>{cartData.length} </span>
                          <span style={{ color: "black", fontWeight: 600 }}>
                            $
                            {(
                              Number(cartData[0].discPrice.replace("$", "")) *
                              cartData.length
                            ).toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <div
                        style={{ alignContent: "center" }}
                        onClick={() => {  
                          sweetAlert.fire({
                            title: <p>Cart cleared with success</p>,
                            timer: 1000,
                            icon:'success',
                            confirmButtonColor: CUSTOM_ORANGE
                          })
                          clearCart()} }
                      >
                        <img style={{ height: "20px" }} src={trash} />
                      </div>
                    </div>
                    <div>
                      <AddToCartButton
                        text="Checkout"
                        additionalStyle={{
                          marginTop: "50px",
                          border: "none",
                          background: CUSTOM_ORANGE,
                          borderRadius: "12px",
                          height: "56px",
                        }}
                        action={() => {
                          clearCart()
                          sweetAlert.fire({
                            title: <p>Order successfully completed</p>,
                            timer: 1000,
                            icon:'success',
                            confirmButtonColor: CUSTOM_ORANGE
                          })
                        }}
                      ></AddToCartButton>
                    </div>
                  </div>
                )}
                {!cartData[0] && (
                  <p
                    style={{
                      fontWeight: "600",
                      display: "flex",
                      alignItems: "center",
                      padding: "10px 24px",
                    }}
                  >
                    Cart is actually empty. Add something to it
                  </p>
                )}
              </CartModalContent>
            </MobileCartModal>
          )}
          <img src={profilePic} style={{ height: "28px", width: "28px" }}></img>
        </div>
      </div>
      {status && (
        <>
          {/* Menu mobile */}
          <MenuCustom>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                cursor: "pointer",
                padding: "30px 0px 40px 0px",
              }}
              onClick={() => setStatus(false)}
            >
              <img src={closeIcon}></img>
            </div>
            <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
              {datas.map((e: ISection) => (
                <li
                  style={{
                    padding: "22px 0px",
                    textTransform: "capitalize",
                    color: FAKE_BLACK,
                  }}
                >
                  <CustomLink href={e.link} onClick={() => setStatus(false)}>
                    {e.title}
                  </CustomLink>{" "}
                </li>
              ))}
            </ul>
          </MenuCustom>
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background: "black",
              top: 0,
              left: 0,
              opacity: 0.5,
              zIndex: 50,
            }}
            onClick={() => setStatus(false)}
          ></div>
        </>
      )}
    </>
  );
};

export default HamburgerMenu;
