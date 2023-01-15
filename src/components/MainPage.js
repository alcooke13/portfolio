import React, {useState} from "react"
import AboutMe from "./AboutMe"
import Projects from "./Projects"
import Cv from "./Cv"
import styled from "styled-components"

const StyledMainpage = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2em;
`



function MainPage({pageContent}) {
    
    
    return (
    <StyledMainpage className="mainpage">
        {pageContent === "aboutMe" ?  <AboutMe /> : ""}

        {pageContent === "projects" ? <Projects /> : ""}

        {pageContent === "cv" ? <Cv /> : ""}
    </StyledMainpage>
  )
}

export default MainPage