import HamburgerMenu from "../HamburgerMenu/Hamburger";
import styled from "styled-components";
import { sectionList } from "../../utilities/db";
import { TABLET } from "../../utilities/queries";
import { cartStore } from "../../zustandStore/store";
import profilePic from "../../assets/images/image-avatar.png";
import cartIcon from "../../assets/images/icon-cart.svg";
import logo from "../../assets/images/logo.svg";
import { CUSTOM_ORANGE, FAKE_WHITE, PRIMARY_GRAY } from "../../utilities/colors";
import { useState } from "react";
import CartModal from "../CartModal/cartModal";

const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 120px;
  @media(max-width: ${TABLET}){
  height: 68px;
  }

`;

const MobileLayout = styled.div`
  display: none;
  @media (max-width: ${TABLET}) {
    display: block;
  }
`;
const DesktopLayout = styled.div`
  display: block;
  @media (max-width: ${TABLET}) {
    display: none;
  }
`;

const ProfilePic = styled.img`
border: 3px solid transparent;
height: 30px;
width: auto;
&:hover{
  cursor: pointer;
  border: 3px solid ${CUSTOM_ORANGE};
  border-radius: 50%;
}
  
`

const NavDeskWrap = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 2px solid ${FAKE_WHITE};
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;

const NavBar: React.FC = () => {
  const cart = cartStore((state: any) => state.cartData);
  const [activeSection , setActiveSection ] = useState<number>()

  return (
    <>
      <NavWrapper>
        <MobileLayout>
          <HamburgerMenu cartData={cart} datas={sectionList}></HamburgerMenu>
        </MobileLayout>

        <DesktopLayout>
          <NavDeskWrap>
            <div style={{display:'flex', alignItems:'center'}}>
            <img src={logo} alt="logo" />
            <ul style={{ display: "flex", gap: "20px" , listStyleType:'none'}}>
              {sectionList.map((section, index ) => {
                return <li onClick={()=> setActiveSection(index)} style={{textTransform:'capitalize',padding:'32px 0px', transition:'all 100ms ease-in' ,borderBottom: activeSection=== index ? `4px solid ${CUSTOM_ORANGE}`: '4px solid transparent' }}><a style={{color:PRIMARY_GRAY, fontSize:"15px"}} href={section.link}>{section.title}</a></li>;
              })}
            </ul>
            </div>
            <div style={{display:'flex', alignItems:'center', gap:'0px'}}>
            <CartModal cartData={cart}/>
            <ProfilePic
              src={profilePic}
              ></ProfilePic>
            </div>
          </NavDeskWrap>
        </DesktopLayout>
      </NavWrapper>
    </>
  );
};

export default NavBar;
