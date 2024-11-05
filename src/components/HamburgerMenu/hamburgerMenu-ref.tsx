import React, { useState } from "react";
import styled from "styled-components";
import { NavItems } from "../../datas/appDatas";
import { INavItem } from "../../utilities/interfaces";
import { Close } from "@mui/icons-material";
import MobileDrop from "../dropdown/mobile-dropdown";
import {
  ALMOST_WHITE,
  BLACK,
  MEDIUM_GREY,
  WHITE,
} from "../../utilities/colors";

const CustomButton = styled.button`
  color: ${MEDIUM_GREY};
  &:hover {
    color: ${BLACK};
    background-color: ${ALMOST_WHITE}!important;
  }
  &:active {
    color: black;
  }
`;

const SideMenu = styled.div`
  .hamburger-icon {
    cursor: pointer;
    padding: 10px;
  }

  .hamburger-lines .line {
    width: 25px;
    height: 3px;
    background-color: #333;
    margin: 5px 0;
  }

  /* Sidebar */
  .sidebar {
    position: fixed;
    top: 0;
    right: 0;
    width: 0;
    height: 100%;
    background-color: ${WHITE};
    overflow-x: hidden;
    transition: width 0.3s;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
    z-index: 1000;
  }

  .sidebar.open {
    width: 240px;
  }

  .menu-items {
    list-style: none;
    padding: 20px;
  }

  .menu-items li {
    margin: 15px 0;
    cursor: pointer;
    font-size: 18px;
  }
`;

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <SideMenu>
      {/* Icona hamburger o X */}
      <div className="hamburger-icon" onClick={toggleSidebar}>
        {isOpen ? (
          <></>
        ) : (
          <div className="hamburger-lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        )}
      </div>

      {/* inserire x chiusura + iterazione sui menu */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button onClick={toggleSidebar}>
          <Close
            style={{
              position: "absolute",
              top: "5px",
              right: "5px",
              fontSize: "40px",
              fontWeight: 400,
            }}
          />
        </button>
        <ul className="menu-items mt-10">
          {NavItems.map((section: INavItem) => {
            return (
              <>
                {" "}
                <MobileDrop key={section.id} data={section} />
              </>
            );
          })}
        </ul>
        <div className="p-2 flex flex-col">
          <CustomButton
            className="btn shadow-none border-0 bg-white font-medium"
            style={{}}
          >
            Login
          </CustomButton>
          <CustomButton className="btn border-2 bg-white border-gray-400 rounded-xl  hover:border-black font-medium">
            Register
          </CustomButton>
        </div>
      </div>
    </SideMenu>
  );
};

export default Sidebar;
