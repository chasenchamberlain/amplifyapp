import React from 'react'
import { FaGithub, FaLinkedin, FaTwitch, FaTwitter } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLink, FooterLinkTitle, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, WebsiteRights, SocialMediaWrap } from './FooterElements.js'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                {/* <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">A</FooterLink>
                            <FooterLink to="/signin">B</FooterLink>
                            <FooterLink to="/signin">C</FooterLink>
                            <FooterLink to="/signin">D</FooterLink>
                            <FooterLink to="/signin">E</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Other Things</FooterLinkTitle>
                            <FooterLink to="/signin">A</FooterLink>
                            <FooterLink to="/signin">B</FooterLink>
                            <FooterLink to="/signin">C</FooterLink>
                            <FooterLink to="/signin">D</FooterLink>
                            <FooterLink to="/signin">E</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Yeehaw Energy</FooterLinkTitle>
                            <FooterLink to="/signin">A</FooterLink>
                            <FooterLink to="/signin">B</FooterLink>
                            <FooterLink to="/signin">C</FooterLink>
                            <FooterLink to="/signin">D</FooterLink>
                            <FooterLink to="/signin">E</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Stuff</FooterLinkTitle>
                            <FooterLink to="/signin">A</FooterLink>
                            <FooterLink to="/signin">B</FooterLink>
                            <FooterLink to="/signin">C</FooterLink>
                            <FooterLink to="/signin">D</FooterLink>
                            <FooterLink to="/signin">E</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer> */}
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>Yeehaw</SocialLogo>
                        <WebsiteRights>Chasen Chamberlain © {new Date().getFullYear()} All rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.linkedin.com/in/chasenchamberlain/" target="_blank" aria-label="LinkedIn" /><FaLinkedin />
                            <SocialIconLink href="//www.twitter.com/chasennash" target="_blank" aria-label="Twitter" /><FaTwitter />
                            <SocialIconLink href="//www.twitch.tv/nashpotatoz" target="_blank" aria-label="Twitch" /><FaTwitch />
                            <SocialIconLink href="//www.github.com/chasenchamberlain" target="_blank" aria-label="Github" /><FaGithub />
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
