import MainPage from "../components/MainPage"
import Sidebar from "../components/Sidebar"
import React, {useState} from "react"
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
}

`




function MainContainer() {
    const [pageContent, setPageContent] = useState("aboutMe")

    const onAboutMeClick = () => {
        setPageContent("aboutMe")
    };

    const onProjectsClick = () => {
        setPageContent("projects")
    };

    const onCvClick = () => {
        setPageContent("cv")
    };

    return (
    <Section className="MainContainer">
        <Sidebar onAboutMeClick={onAboutMeClick} onCvClick={onCvClick} onProjectsClick={onProjectsClick} />
        <MainPage pageContent= {pageContent}/>
    </Section>
  )
}

export default MainContainer