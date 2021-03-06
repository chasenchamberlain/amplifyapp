import React, { useState } from 'react'
import Video from '../../videos/retroVideo.mp4'
import { Button } from '../ButtonElements.js'
import Image from '../../images/monument_valley.jpg'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ImgBg, ArrowForward, ArrowRight } from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }
    return (
        <>
            <HeroContainer>
                <HeroBg>
                    {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4' /> */}
                    <ImgBg src={Image} alt={'Mountain'} />
                </HeroBg>
                <HeroContent>
                    <HeroH1>Chasen Chamberlain</HeroH1>
                    <HeroP>I am a Software Engineer who loves to program and bake bread.</HeroP>
                    <HeroBtnWrapper>
                        {/* <Button to='/signup' onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                            Check it out {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button> */}
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSection

