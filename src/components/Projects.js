import React from 'react'
import styled from 'styled-components';
import projectOneImg from '../images/project_one_img.png'
import projectTwoImg from '../images/project_two_img.png'
import projectThreeImg from '../images/project_three_img.png'
import testImg from '../../src/images/placeholder.png'

function Projects({ setPageContent }) {
    return (
        <ProjectBox>
            <H2>Projects</H2>
            <ProjectContainer>
                <Li>
                    <InsideContainer>
                        <Header>
                            <H3>Fantasy Store</H3>
                            <Img src={projectOneImg} alt='Logos of Python, Css, Html, Flask and Postgres' />
                        </Header>
                        <p>
                            A web app which simplifies the management of a fantasy themed store selling products enabling seamless inventory control.
                        </p>
                        <ImgTest src={testImg} alt='Test image'/>
                        <Button onClick={() => setPageContent('projectOne')}>View Project</Button>
                    </InsideContainer>
                </Li>
                <Li>
                    <InsideContainer>
                        <Header>
                            <H3>Climate Quiz</H3>
                            <Img src={projectTwoImg} alt='Logos of JavaScript, React, MongoDB and Express' />
                        </Header>
                        <p>
                            A full stack app in the form of an educational quiz on climate change and the different factors which affect it.
                        </p>
                        <ImgTest src={testImg} alt='Test image'/>
                        <Button onClick={() => setPageContent('projectTwo')}>View Project</Button>
                    </InsideContainer>
                </Li>
                <Li>
                    <InsideContainer>
                        <Header>
                            <H3>Group Up</H3>
                            <Img src={projectThreeImg} alt='Logos of TypeScript, Java, React Native, Postgres and Spring Boot' />
                        </Header>
                        <p>
                            A mobile app designed to ease planning events and group gatherings with friends. With interactive features such as polls to ease the decision making process when planning a new gathering.
                        </p>
                        <ImgTest src={testImg} alt='Test image'/>
                        <Button onClick={() => setPageContent('projectThree')}>View Project</Button>
                    </InsideContainer>
                </Li>
                <Li>
                    <InsideContainer>
                        <Header>
                            <H3>Fantasy Store 2.0</H3>
                            <Img src={projectThreeImg} alt='Logos JavaScript, Java, React, Postgres and Spring Boot' />
                        </Header>
                        <p>
                            An updated and improved version of my first project. Which continues to simplify the management of a fantasy-themed store selling products using different programming languages and technologies.
                        </p>
                        <ImgTest src={testImg} alt='Test image'/>
                        <Button onClick={() => setPageContent('projectFour')}>View Project</Button>
                    </InsideContainer>
                </Li>
            </ProjectContainer>
        </ProjectBox>
    );
};

const ProjectBox = styled.div`

`

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`


const H2 = styled.h2`
    text-align: center;
    font-size: 2em;

`

const Img = styled.img`
    width: 125px;
`

const ImgTest = styled.img`
    width: 250px;
    height: 250px;
    align-self: center;
    border-radius: 0.3em;

@Media (max-width: 800px){
    width: 200px;
    height: 200px;
}
`

const H3 = styled.h3`
    margin-bottom: 0.25em;
    font-size: 1.5em;
`

const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const InsideContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    border: solid 2px black;
    border-radius: 0.3em;
    padding: 1em;
    background-color: rgb(207, 207, 252);
p{
    font-size: 1.3em;
}

`

const Li = styled.div`
    padding: 1em;
`

const Button = styled.button`
    background:linear-gradient(to left, hsl(271, 70%, 40%), hsl(200, 100%, 30%));
    color: #fff;
    padding: 0.5em 1em;
    border-radius: .3em;
    cursor: pointer;
    align-self: center;
    height: 4em;
    width: 12em;

    &:hover {
    border-color: black;
    box-shadow:0 0 5px 0 black;

  }
`

export default Projects