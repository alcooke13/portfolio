import MainPage from "../components/MainPage"
import Sidebar from "../components/Sidebar"
import React, {useState, useEffect} from "react"
import styled from "styled-components"

const Section = styled.section`
    border: blue solid 2px;
    display: grid;
    grid-template-columns: 25% 75%;
    margin: 5%;
    height: fit-content;
    min-height: 85vh;
    margin-bottom: 3em;

@media (max-width:900px) {
    display: flex;
    flex-direction: column;
    min-height: max-content;
}

`


function MainContainer() {
    const [pageContent, setPageContent] = useState("aboutMe");
    
    const onAboutMeClick = () => {
        setPageContent("aboutMe");
    };

    const onProjectsClick = () => {
        setPageContent("projects");
    };

    const onCvClick = () => {
        setPageContent("cv");
    };

    const onContactsClick = () => {
        setPageContent("contacts");
    };

    return (
    <Section className="MainContainer">
        <Sidebar onAboutMeClick={onAboutMeClick} onCvClick={onCvClick} onProjectsClick={onProjectsClick} onContactsClick={onContactsClick}/>
        <MainPage pageContent= {pageContent} className="mainPage"/>
    </Section>
  )
}

export default MainContainer