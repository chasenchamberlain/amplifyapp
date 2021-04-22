import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SideBarRoute } from './SidebarElements'

function Sidebar({ isOpen, toggle }) {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                        <SidebarLink to="skills" onClick={toggle}>Skills</SidebarLink>
                        <SidebarLink to="discover" onClick={toggle}>Hobbies</SidebarLink>
                        <SidebarLink to="contact" onClick={toggle}>Contact</SidebarLink>
                    </SidebarMenu>
                    {/* <SideBtnWrap>
                        <SideBarRoute to="contact">Contact</SideBarRoute>
                    </SideBtnWrap> */}
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
