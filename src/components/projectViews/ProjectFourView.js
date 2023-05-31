import React from 'react'
import styled from 'styled-components';
import testImg from '../../images/placeholder.png'

function ProjectFourView() {
  return (
    <ProjectContainer>
      <Text>
        <H2>Fantasy Store 2.0</H2>
        <p>
          A web application which updates and improves upon my first project. My goal for this project was to review and consolidate the knowledge and skills that I acquired during my time at CodeClan. To achieve this I chose to build a new code base using different technologies compared to version 1.0. This allowed me to further master tools such as  React, JavaScript, Java and Spring Boot. One specific aspect I wanted to focus on in this project was enhancing the user interface of the site. To accomplish this I completed a short course on CSS to sharpen my skills and applied what I learned to this new version. I am satisfied with the outcome of the project, as I was able to compare it with my first project and witness firsthand how much I have grown.
        </p>
      </Text>
      <Img src={testImg} alt={"Project Picture"} />
      <StyledDiv>
        <h3>Technologies</h3>
        <ul>
          <li>JavaScript</li>
          <li>Java</li>
          <li>React</li>
          <li>PostgreSQL</li>
          <li>Spring Boot</li>
        </ul>
      </StyledDiv>
      <a href='https://github.com/alcooke13/Fantasy_StoreV2' target="_blank" rel='noopener'>
        <Button>Project Link</Button>
      </a>
    </ProjectContainer>
  );
};


const H2 = styled.h2`
text-align: center;
margin-bottom: 0.5em;
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
`

const Button = styled.button`
  background:linear-gradient(to left, hsl(271, 70%, 40%), hsl(200, 100%, 30%));
  color: #fff;    
  padding: 0.5em 1em;
  border-radius: .3em;
  cursor: pointer;

  &:hover {
  border-color: black;
  box-shadow:0 0 5px 0 black;
  }
`

const StyledDiv = styled.div`
  align-self: flex-start;
`

const Img = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 0.4em;
`
export default ProjectFourView;