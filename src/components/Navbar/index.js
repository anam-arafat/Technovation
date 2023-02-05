import React, {useEffect, useState} from 'react';
import { IconContext } from 'react-icons/lib';
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll'; 
import {
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks} 
  from './NavbarElements';

const Navbar = ({toggle}) => {
  const[scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect (() => {
    window.addEventListener('scroll',changeNav)
  },[]);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
    <IconContext.Provider value = {{color: 'white'}}>
    <Nav scrollNav = {scrollNav}>
        <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>Technovation</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks 
                  to="about" 
                  smooth = {true} 
                  duration = {500} 
                  spy = {true} 
                  exact = 'true' 
                  offset={-80}
                  >
                  About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks 
                  to="segments"
                  smooth = {true} 
                  duration = {500} 
                  spy = {true} 
                  exact = 'true' 
                  offset={-80}
                >Segments</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks 
                  to="speakers"
                  smooth = {true} 
                  duration = {500} 
                  spy = {true} 
                  exact = 'true' 
                  offset={-80}
                >Speakers</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks 
                  to="partner"
                  smooth = {true} 
                  duration = {500} 
                  spy = {true} 
                  exact = 'true' 
                  offset={-80}
                >Partner</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks 
                  to="faq"
                  smooth = {true} 
                  duration = {500} 
                  spy = {true} 
                  exact = 'true' 
                  offset={-80}
                >FAQs</NavLinks>
              </NavItem>
            </NavMenu>
        </NavbarContainer>
    </Nav>
    </IconContext.Provider>
    </>
  );
};

export default Navbar;
