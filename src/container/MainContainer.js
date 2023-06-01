import React, { useState } from "react"
import styled from "styled-components"
import NavBar from "../components/NavBar";
import profilePic from "../images/profilepic.jpg"
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import ProjectOneView from "../components/projectViews/ProjectOneView";
import ProjectTwoView from "../components/projectViews/ProjectTwoView";
import ProjectThreeView from "../components/projectViews/ProjectThreeView"
import ProjectFourView from "../components/projectViews/ProjectFourView";
import gitHubLogo from '../../src/images/logos/github_logo.png'
import linkedInLogo from '../../src/images/logos/linkedin_logo.png'


function MainContainer() {
    const [pageContent, setPageContent] = useState("aboutMe");
    const [imgNum, setImgNum] = useState(1);


    const goNextImg = () => {
      if(imgNum <= 3){
        setImgNum(number => number + 1);   
      }
    };
  
    const goBackImg = () => {
      if(imgNum > 1){
        setImgNum(number => number - 1);
      }
    };

    const goNextImgLess = () => {
        if(imgNum <= 2){
          setImgNum(number => number + 1);
        }
      };
    
      const goBackImgLess = () => {
        if(imgNum > 1){
          setImgNum(number => number - 1);
        }
      };

    return (
        <Main>
            <Header className="header">
                <PictureBlock>
                    <Img src={profilePic} alt='headshot of me' />
                    <H1>Alistair Cooke</H1>
                </PictureBlock>
                <LogoWrapper>
                    <a href="https://github.com/alcooke13" target="_blank" rel="noreferrer">
                    <img src={gitHubLogo} alt='github' />
                    </a>
                    <a href="https://www.linkedin.com/in/alistair-cooke-860a98195/" target="_blank" rel="noreferrer">
                    <img src={linkedInLogo} alt='LinkedIn' />
                    </a>
                </LogoWrapper>
                
                <NavBar setPageContent={setPageContent} />
            </Header>
            <Content className="content">

                {pageContent === "aboutMe" ? <AboutMe /> : ""}

                {pageContent === "projects" ? <Projects setImgNum = {setImgNum} setPageContent={setPageContent}/> : ""}
                
                {pageContent === "projectOne" ? <ProjectOneView goBackImgLess={goBackImgLess} goNextImgLess={goNextImgLess} imgNum={imgNum} /> : ""}
                
                {pageContent === "projectTwo" ? <ProjectTwoView goBackImgLess={goBackImgLess} goNextImgLess={goNextImgLess} imgNum={imgNum} /> : ""}
                
                {pageContent === "projectThree" ? <ProjectThreeView imgNum={imgNum} goBackImg={goBackImg} goNextImg={goNextImg}/> : ""}
                
                {pageContent === "projectFour" ? <ProjectFourView imgNum={imgNum} goBackImg={goBackImg} goNextImg={goNextImg}/> : ""}
            </Content>
            <Footer>
                <h4>Made by Alistair Cooke</h4>
            </Footer>
        </Main>
    );
};

const Main = styled.main`
    min-height: 100vh;
    position: relative;
    background-color: hsl(240, 90%, 96%);

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
    background:linear-gradient(to left, hsl(271, 70%, 40%), hsl(200, 100%, 30%));
    padding: 5px;
    color: #fff;
`

const Footer = styled.footer`
    display: flex;
    justify-content: center;
    padding: 1em;
    background:linear-gradient(to left, hsl(271, 70%, 40%), hsl(200, 100%, 30%));
    position: relative;
    bottom: 0;
    color: white;
`

const PictureBlock = styled.div`
   display: flex;
   align-items: center;
   gap: 25px;
   margin-left: 5%;

`

const LogoWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-left: -5%;
    
    @media (max-width:900px) {
    gap: 3px;
    margin-left: 0;
    }

    img {
        height: 40px;
        width: 40px;
    }
`

const Img = styled.img`
    max-width: 100px;
    max-height: 100px;
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
    display: none;
    
}

`
const Content = styled.div`
    min-height: 80vh;
    max-height: fit-content;
    padding: 1em;
    max-width: 50em;
    margin: auto;
    width: 90%;
`

export default MainContainer;