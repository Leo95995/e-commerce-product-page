import HamburgerMenu from "../HamburgerMenu/Hamburger";
import styled from "styled-components";
import { sectionList } from "../../utilities/db";
import { TABLET } from "../../utilities/queries";
import { cartStore } from "../../zustandStore/store";
import profilePic from "../../assets/images/image-avatar.png";
import cartIcon from "../../assets/images/icon-cart.svg";
import logo from "../../assets/images/logo.svg";
import { PRIMARY_GRAY } from "../../utilities/colors";

const NavWrapper = styled.div`
  width: 100%;
  height: 68px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const NavDeskWrap = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid red;
  align-items: center;
  justify-content: space-between;
`;

const NavBar: React.FC = () => {
  const cart = cartStore((state: any) => state.cartData);

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
              {sectionList.map((section) => {
                return <li style={{textTransform:'capitalize'}}><a style={{color:PRIMARY_GRAY, fontSize:"15px"}} href={section.link}>{section.title}</a></li>;
              })}
            </ul>
            </div>
            <div style={{display:'flex', alignItems:'center', gap:'20px'}}>
            <img src={cartIcon}></img>
            <img
              src={profilePic}
              style={{ height: "28px", width: "28px" }}
            ></img>
            </div>
          </NavDeskWrap>
        </DesktopLayout>
      </NavWrapper>
    </>
  );
};

export default NavBar;
