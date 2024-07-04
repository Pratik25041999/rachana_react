// src/Menu.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

const MenuContainer = styled.div`
  position: fixed;
  top: 65px;
  left: 0;
  width: 100%;
  height: ${(props) => (props.isOpen ? '265px' : '0')};
  background-image: radial-gradient(#8e0631,#600223);
  overflow-y: hidden;
  transition: height 0.3s ease-in-out;
  z-index: 1;

  @media (max-width: 1024px) {
    display: block;
  }

  @media (min-width: 1025px) {
    display: none;
  }
`;

const MenuButton = styled.div`
  position: fixed;
  top: 15px;
  right: 15px;
  font-size: 24px;
  cursor: pointer;
  z-index: 2;

  @media (max-width: 1024px) {
    display: block;
  }

  @media (min-width: 1025px) {
    display: none;
  }
`;

const MenuItems = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  padding: 0px 25px;
  color: #d1b8a0;
`;

const MenuItem = styled.a`
  padding: 8px 0;
  text-decoration: none;
  font-size: 18px;
  color: #d1b8a0;
  display: block;
  transition: 0.3s;
  
  &:hover {
    color: #f1f1f1;
  }
`;

const Menu = ({ showView }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const [active, setActive] = useState(null);

    const handleClick = (index) => {
        setActive(index);
        showView(index);
        toggleMenu();
    };
    return (
        <>
            <MenuButton onClick={toggleMenu}>
                <FaBars color="#fff" />
            </MenuButton>
            <MenuContainer isOpen={isOpen}>
                <MenuItems isOpen={isOpen}>
                    <div
                        className={`menu-item ${active === "HOME" ? "active" : ""}`}
                        onClick={() => handleClick("HOME")}
                    >
                        HOME
                    </div>
                    <div
                        className={`menu-item ${active === "OVERVIEW" ? "active" : ""}`}
                        onClick={() => handleClick("OVERVIEW")}
                    >
                        OVERVIEW
                    </div>
                    <div
                        className={`menu-item ${active === "AMENITIES" ? "active" : ""}`}
                        onClick={() => handleClick("AMENITIES")}
                    >
                        AMENITIES
                    </div>
                    <div
                        className={`menu-item ${active === "PLANS" ? "active" : ""}`}
                        onClick={() => handleClick("PLANS")}
                    >
                        PLANS
                    </div>
                    <div
                        className={`menu-item ${active === "LOCATION" ? "active" : ""}`}
                        onClick={() => handleClick("LOCATION")}
                    >
                        LOCATION
                    </div>
                    <div
                        className={`menu-item ${active === "CONTACT US" ? "active" : ""}`}
                        onClick={() => handleClick("CONTACT US")}
                    >
                        CONTACT US
                    </div>
                </MenuItems>
            </MenuContainer>
        </>
    );
};

export default Menu;
