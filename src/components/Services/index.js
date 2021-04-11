import React from 'react'
import Icon1 from "../../images/svg-1.svg"
import Icon2 from "../../images/svg-2.svg"
import Icon3 from "../../images/svg-3.svg"
import { ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper, ServicesP, ServicesCard, ServicesIcon } from "./ServicesElements"

const Services = () => {
    return (
        <ServicesContainer>
            <ServicesH1>Skills</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Javascript</ServicesH2>
                    <ServicesP>Im good at oh shucks</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>C#</ServicesH2>
                    <ServicesP>I and yee and then haw bb.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Team Player</ServicesH2>
                    <ServicesP>Dirty goblin boy</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
