import HamburgerMenu from "../HamburgerMenu/Hamburger";
import styled from "styled-components";
import { sectionList } from "../../utilities/db";
import { TABLET } from "../../utilities/queries";
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
  return (
    <>
      <NavWrapper>
        <MobileLayout>
          <HamburgerMenu datas={sectionList}></HamburgerMenu>
    
        </MobileLayout>
      </NavWrapper>
    </>
  );
};

export default NavBar;
