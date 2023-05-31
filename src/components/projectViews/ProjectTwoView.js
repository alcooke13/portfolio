import React from 'react'
import styled from 'styled-components';
import testImg from '../../images/placeholder.png'

function ProjectTwoView() {
  return (
    <ProjectContainer>
      <Text>
        <H2>Climate Quiz</H2>
        <p>An educational game in the form of a quiz on the topic of climate change. The goal of the project was to create an interactive app that incorporated various question types, enabling users to explore the factors and consequences of climate change. Working as a team of four, we successfully completed the project within a week. We created APIs for the main features of the app to work such as the questions, users and keeping track of user’s score as they played the game. I enjoyed the experience of collaborating with my teammates, employing techniques such as pair programming and mob programming to tackle issues. As well as the workflow of using GitHub and Trello to divide tasks and merge our work. </p>
      </Text>
      <Img src={testImg} alt={"Project Picture"} />
      <StyledDiv>
        <h3>Tools Used</h3>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>MongoDB</li>
          <li>Express</li>
        </ul>
      </StyledDiv>
      <a href='https://github.com/alcooke13/climate_quiz' target="_blank" rel='noopener'>
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
export default ProjectTwoView;