import styled, { keyframes } from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { ISection } from "../../utilities/interfaces";
// Colors
import { FAKE_BLACK, PRIMARY_GRAY, PURE_WHITE } from "../../utilities/colors";

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



interface IHamburger {
  datas: any;
}

const HamburgerMenu: React.FC<IHamburger> = ({ datas }) => {
  const [status, setStatus] = useState<boolean>(false);
  return (
    <>
     {/* Nav here */}
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
            <img src={cart} style={{ height: "24px", width: "24px" }}></img>
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
