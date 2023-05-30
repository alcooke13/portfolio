import React, {useState} from "react"
import AboutMe from "./AboutMe"
import Projects from "./Projects"
import Cv from "./Skills"
import styled from "styled-components"
import Contacts from "./Contacts"

const StyledMainpage = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2em;
    border: green solid 3px;
    /* overflow-y: scroll; */
`



function MainPage({pageContent}) {
    
    
    return (
    <StyledMainpage className="mainpage">
        {pageContent === "aboutMe" ?  <AboutMe /> : ""}
        
        {pageContent === "projects" ? <Projects /> : ""}

        {pageContent === "cv" ? <Cv /> : ""}
        
        {pageContent === "contacts" ? <Contacts /> : ""}
    </StyledMainpage>
  )
}

export default MainPage