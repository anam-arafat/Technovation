import React from 'react';
import {
  SidebarContainer, 
  Icon, 
  CloseIcon, 
  SidebarWrapper, 
  SidebarMenu, 
  SidebarLink} from './SidebarElements';

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                <SidebarLink to="segments" onClick={toggle}>Segments</SidebarLink>
                <SidebarLink to="speakers" onClick={toggle}>Speakers</SidebarLink>
                <SidebarLink to="partner" onClick={toggle}>Partner</SidebarLink>
                <SidebarLink to="faq" onClick={toggle}>FAQs</SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;
