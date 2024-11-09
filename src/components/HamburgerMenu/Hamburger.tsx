import styled, { keyframes } from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { ISection } from "../../utilities/interfaces";
// Colors
import { FAKE_BLACK, FAKE_WHITE, PRIMARY_GRAY, PURE_WHITE } from "../../utilities/colors";

// Assets
import profilePic from "../../assets/images/image-avatar.png";
import logo from "../../assets/images/logo.svg";
import cart from "../../assets/images/icon-cart.svg";
import closeIcon from '../../assets/images/icon-close.svg'


const entranceAnimista = keyframes`
  from {
    transform: translateX(-250px);
  }
  to {
    transform: translateX(0);
  }

`

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
&:hover{
  color: ${PRIMARY_GRAY};
}
`

const MobileCartModal = styled.div`
  width: 92%;
  background-color: transparent;
  height: 300px;
  left: 0;
  top: 0;
  position:absolute; 
  top: 65px;
  z-index: 200;
  padding:4%;
`

const CartModalContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${PURE_WHITE};
  z-index: 200;
  border-radius: 8px;
  box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.4);
`
const CartVal  =styled.span`
  position: absolute;
  top: -12px;
  right: -6px;
`

interface IHamburger {
  datas: any;
  cartData:any
}

const HamburgerMenu: React.FC<IHamburger> = ({ datas, cartData }) => {
  const [status, setStatus] = useState<boolean>(false);
  const [cartModal, setCartModal] = useState<boolean>(false)

  return (
    <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            cursor: "pointer",
            alignItems: "center",
            padding:"0px 20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap:"10px"}}>
            <div onClick={() => setStatus(true)} style={{display:'flex', alignItems:'center'}}>
              <MenuIcon style={{fill:PRIMARY_GRAY}}/>
            </div>
            <div>
            <img src={logo}></img>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" , gap:'25px'}}>
            <div style={{position:'relative'}}>
              <CartVal>{cartData.length ? cartData.length: 0}</CartVal>
            <img src={cart} onClick={()=>setCartModal((prev)=> !prev)} style={{ height: "24px", width: "24px" }}></img>
            </div>
            {cartModal && <MobileCartModal>
              <CartModalContent>
              <div style={{height:"30%",borderBottom:`3px solid ${FAKE_WHITE}` , padding: '10px 24px'}}>
                <h5>Cart</h5>
              </div>
              </CartModalContent>
            </MobileCartModal>}
            <img
              src={profilePic}
              style={{ height: "28px", width: "28px" }}
            ></img>
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
              padding:'30px 0px 40px 0px'
            }}
            onClick={() => setStatus(false)}
          >
          <img src={closeIcon}></img>
          </div>
          <ul style={{ listStyleType: "none", margin:0, padding:0}}>
            {datas.map((e: ISection) => (
              <li style={{padding:'22px 0px', textTransform:'capitalize', color:FAKE_BLACK}}>
                <CustomLink href={e.link} onClick={() => setStatus(false)}>
                  {e.title}
                </CustomLink>{" "}
              </li>
            ))}
          </ul>
        </MenuCustom>
        <div style={{position:'absolute', width:'100%', height:'100%',background:'black', top:0, left:0, opacity:0.5, zIndex:50}} onClick={(()=>setStatus(false))}></div>
        </>
      )}
    </>
  );
};

export default HamburgerMenu;
