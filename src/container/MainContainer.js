import React, {useState} from "react"
import styled from "styled-components"
import NavBar from "../components/NavBar";
import profilePic from "../images/profilepic.jpg"
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";

function MainContainer() {
    const [pageContent, setPageContent] = useState("aboutMe");
    
    return (
    <Main>
        <Header>
            <PictureBlock>
                <Img src={profilePic} alt='headshot of me' />
                <H1>Alistair Cooke</H1>
            </PictureBlock>
            <NavBar setPageContent={setPageContent}/>
        </Header>
        <Content>

        {pageContent === "aboutMe" ?  <AboutMe /> : ""}
        
        {pageContent === "projects" ? <Projects /> : ""}
        
        {pageContent === "contacts" ? <Contacts /> : ""}

        </Content>
    </Main>
  );
};

const Main = styled.main`
    min-height: 100vh;

@media (max-width:900px) {
    
}

`

const PictureBlock = styled.div`
   display: flex;
   align-items: center;
   gap: 25px;
`

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    margin-left: 5%;
    margin-right: 5%;
    align-items: center;
`

const Img = styled.img`
    max-width: 125px;
    max-height: 125px;
    border-radius: 50%;
`

const H1 = styled.h1`
    margin: 0;
    padding: 0;
    font-size: 1.7em;
`
const Content = styled.div`
    border: 2px solid red;
    
`

export default MainContainer;