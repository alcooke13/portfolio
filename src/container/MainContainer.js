import React, { useState } from "react"
import styled from "styled-components"
import NavBar from "../components/NavBar";
import profilePic from "../images/profilepic.jpg"
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";
import ProjectOneView from "../components/projectViews/ProjectOneView";
import ProjectTwoView from "../components/projectViews/ProjectTwoView";
import ProjectThreeView from "../components/projectViews/ProjectThreeView"
import ProjectFourView from "../components/projectViews/ProjectFourView";

function MainContainer() {
    const [pageContent, setPageContent] = useState("aboutMe");

    return (
        <Main>
            <Header>
                <PictureBlock>
                    <Img src={profilePic} alt='headshot of me' />
                    <H1>Alistair Cooke</H1>
                </PictureBlock>
                <NavBar setPageContent={setPageContent} />
            </Header>
            <Content>

                {pageContent === "aboutMe" ? <AboutMe /> : ""}

                {pageContent === "projects" ? <Projects setPageContent={setPageContent}/> : ""}

                {pageContent === "contacts" ? <Contacts /> : ""}
                
                {pageContent === "projectOne" ? <ProjectOneView /> : ""}
                
                {pageContent === "projectTwo" ? <ProjectTwoView /> : ""}
                
                {pageContent === "projectThree" ? <ProjectThreeView /> : ""}
                
                {pageContent === "projectFour" ? <ProjectFourView /> : ""}



            </Content>
        </Main>
    );
};

const Main = styled.main`
    min-height: 100vh;
    position: relative;

@media (max-width:900px) {
    min-width: fit-content;
    
}

`
const Header = styled.header`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 5px;
    
`

const PictureBlock = styled.div`
   display: flex;
   align-items: center;
   gap: 25px;
   margin-left: 5%;

@media (max-width: 900px) {
    margin-left: 2%;
}
`

const Img = styled.img`
    max-width: 125px;
    max-height: 125px;
    border-radius: 50%;
    
@media (max-width:900px) {
    max-width: 75px;
    max-height: 75px;
    
}
`

const H1 = styled.h1`
    margin: 0;
    padding: 0;
    font-size: 1.7em;

@media (max-width:900px) {
    font-size: 0.8em;
    
}

`
const Content = styled.div`
    margin-top: 0.5em;
    border: 2px solid red;
    min-height: 80vh;
    max-height: fit-content;

`

export default MainContainer;