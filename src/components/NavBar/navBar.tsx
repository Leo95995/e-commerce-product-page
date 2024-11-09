import HamburgerMenu from "../HamburgerMenu/Hamburger";
import styled from "styled-components";
import { sectionList } from "../../utilities/db";
import { TABLET } from "../../utilities/queries";
import { cartStore } from "../../zustandStore/store";
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
const DesktopLayout = styled.div``;


const NavBar: React.FC = () => {
  const cart = cartStore((state: any) => state.cart);
console.log(cart);
  return (
    <>
      <NavWrapper>
        <MobileLayout>
          <HamburgerMenu cartData={cart} datas={sectionList}></HamburgerMenu>
    
        </MobileLayout>
      </NavWrapper>
    </>
  );
};

export default NavBar;
