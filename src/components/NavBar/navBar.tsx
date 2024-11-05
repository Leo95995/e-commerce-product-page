import HamburgerMenu from "../HamburgerMenu/Hamburger";
import styled from "styled-components";
import { sectionList } from "../../utilities/db";

const NavWrapper = styled.div`
  border: 1px solid red;
  width: 100%;
`;

const MobileLayout = styled.div``;
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
