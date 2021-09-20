import React from 'react'
import { FaGithub, FaLinkedin, FaSpotify, FaTwitch, FaTwitter } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLink, FooterLinkTitle, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, WebsiteRights, SocialMediaWrap } from './FooterElements.js'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>Chasen</SocialLogo>
                        <WebsiteRights>Chasen Chamberlain © {new Date().getFullYear()} All rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink target="_blank" href='https://www.linkedin.com/in/chasenchamberlain' aria-label="LinkedIn"><FaLinkedin /></SocialIconLink>
                            <SocialIconLink target="_blank" href="https://www.github.com/chasenchamberlain" aria-label="Github" ><FaGithub /></SocialIconLink>
                            <SocialIconLink target="_blank" href="https://www.twitter.com/chasennash" aria-label="Twitter" ><FaTwitter /></SocialIconLink>
                            <SocialIconLink target="_blank" href="https://www.twitch.tv/chasennash" aria-label="Twitch" ><FaTwitch /></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
                {/* <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">A</FooterLink>
                            <FooterLink to="/signin">B</FooterLink>
                            <FooterLink to="/signin">C</FooterLink>
                            <FooterLink to="/signin">D</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer> */}
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
