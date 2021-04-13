import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection'
import { InfoSection, InfoSectionAbout } from '../components/InfoSection/index'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../components/InfoSection/Data'
import Skills from '../components/Services'
import Footer from '../components/Footer'

function Home() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSectionAbout {...homeObjOne} />
            <Skills {...homeObjFour} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <Footer />
        </>
    )
}

export default Home
