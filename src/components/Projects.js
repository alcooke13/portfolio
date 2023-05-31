import React from 'react'
import styled from 'styled-components';
import projectOneImg from '../images/project_one_img.png'
import projectTwoImg from '../images/project_two_img.png'
import projectThreeImg from '../images/project_three_img.png'

function Projects({setPageContent}) {
    return (
        <ProjectBox>
            <H2>Projects</H2>
            <ProjectContainer>

                <Li>
                    <Header>
                        <H3>Fantasy Store</H3>
                        <Img src={projectOneImg} alt='Logos of Python, Css, Html, Flask and Postgres' />
                    </Header>
                    <p>
                        A web app which simplifies the management of a fantasy themed store selling products enabling seamless inventory control.
                    </p>
                    <button onClick={() => setPageContent('projectOne')}>View Project</button>
                </Li>
                <Li>
                    <Header>
                        <H3>Climate Quiz</H3>
                        <Img src={projectTwoImg} alt='Logos of JavaScript, React, MongoDB and Express' />
                    </Header>
                    <p>
                        A full stack app in the form of an educational quiz on climate change and the different factors which affect it.
                    </p>
                    <button onClick={() => setPageContent('projectTwo')}>View Project</button>
                </Li>
                <Li>
                    <Header>
                        <H3>Group Up</H3>
                        <Img src={projectThreeImg} alt='Logos of TypeScript, Java, React Native, Postgres and Spring Boot' />
                    </Header>
                    <p>
                        A mobile app designed to ease planning events and group gatherings with friends. With interactive features such as polls to ease the decision making process when planning a new gathering.
                    </p>
                    <button onClick={() => setPageContent('projectThree')}>View Project</button>
                </Li>
                <Li>
                    <Header>
                        <H3>Fantasy Store 2.0</H3>
                        <Img src={projectThreeImg} alt='Logos JavaScript, Java, React, Postgres and Spring Boot' />
                    </Header>
                    <p>
                    An updated and improved version of my first project. Which continues to simplify the management of a fantasy-themed store selling products using different programming languages and technologies.
                    </p>
                    <button onClick={() => setPageContent('projectFour')}>View Project</button>
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
    margin-bottom: 0.5em;
`


const H2 = styled.h2`
    text-align: center;

`

const Img = styled.img`
    width: 125px;
`

const H3 = styled.h3`
    margin-bottom: 0.25em;
`

const ProjectContainer = styled.div`

`

const Li = styled.div`
    padding: 1em;
`

export default Projects