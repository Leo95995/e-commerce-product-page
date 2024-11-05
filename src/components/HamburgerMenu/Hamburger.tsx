import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { ISection } from "../../utilities/interfaces";
import { PURE_WHITE } from "../../utilities/colors";

const MenuCustom = styled.div`
z-index: 100;
position: absolute;
height: 100%;
top: 0;
left: 0;
width: 100vw;
background-color: ${PURE_WHITE};

`


interface IHamburger {
    datas: any
}

const HamburgerMenu: React.FC<IHamburger> = ({datas}) => {
  const [status, setStatus] = useState<boolean>(false);
  return (
    <>
      {!status && (
        <div style={{display:'flex', justifyContent:'end', cursor:'pointer'}} onClick={()=> setStatus(true)}>
          {" "}
          <MenuIcon />
        </div>
      )}
      {status && (
        <MenuCustom>
          <div style={{display:'flex', justifyContent:'end', cursor:'pointer'}} onClick={()=>setStatus(false)}><CloseIcon/></div>
            <ul style={{listStyleType:'none'}}>
                {datas.map((e:ISection)=> <li><a href={e.link} onClick={()=> setStatus(false)}>{e.title}</a> </li>)}
          </ul>
        </MenuCustom>
      )}
    </>
  );
};

export default HamburgerMenu;
