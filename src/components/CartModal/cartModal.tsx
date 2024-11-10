import styled from "styled-components";
import {  useState } from "react";
import { DummyProd } from "../../utilities/interfaces";
// Colors
import {
  FAKE_WHITE,
  PRIMARY_GRAY,
  PURE_WHITE,
  CUSTOM_ORANGE,
} from "../../utilities/colors";

// Assets

import cart from "../../assets/images/icon-cart.svg";
import cartBlack from "../../assets/images/icon-cart-black.svg";
import trash from "../../assets/images/icon-delete.svg";
import AddToCartButton from "../AddToCartButton/addToCart";
import { cartStore } from "../../zustandStore/store";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { MOBILE, TABLET } from "../../utilities/queries";

const MobileCartModal = styled.div`
  width: 92%;
  background-color: transparent;
  min-height: 200px;
  height: fit-content;
  position: absolute;
  z-index: 200;
  padding: 2% 4%;
  max-width: 450px;
  top: 80px;
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
  min-height: 300px;
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
  cartData: DummyProd[];
}



const CartModal: React.FC<IHamburger> = ({  cartData }) => {

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
        <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
          <div style={{ position: "relative" }}>
            {cartData.length > 0 && <CartVal>{cartData.length }</CartVal>}
            <img
              src={cartModal ? cartBlack : cart}
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
                      padding: "30px 0px",
                      color: PRIMARY_GRAY,
                      justifyContent:'center'
                    }}
                  >
           Your cart is Empty.
                  </p>
                )}
              </CartModalContent>
            </MobileCartModal>
          )}
        </div>
      </div>
   
    </>
  );
};

export default CartModal;
