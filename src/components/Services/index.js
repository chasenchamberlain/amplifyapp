import React from 'react'
import Icon1 from "../../images/svg-1.svg"
import Icon2 from "../../images/svg-2.svg"
import Icon3 from "../../images/svg-3.svg"
import { ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper, ServicesP, ServicesCard, ServicesIcon } from "./ServicesElements"

const Skills = ({ id }) => {
    return (
        <ServicesContainer id={id}>
            <ServicesH1>Skills</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Software Engineering</ServicesH2>
                    <ServicesP>C#, C, C++, Python, Java, Git</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Fullstack Web Dev</ServicesH2>
                    <ServicesP>Javascript, CSS, React, Node.js</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Game Development</ServicesH2>
                    <ServicesP>Unity, C#, Pico8, Aseprite</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Skills
