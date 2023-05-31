import React from 'react'
import styled from 'styled-components';
import testImg from '../../images/placeholder.png'

const paragraphText1 = 'An educational game in the form of a quiz on the topic of climate change. The goal of the project was to create an interactive app that incorporated various question types, enabling users to explore the factors and consequences of climate change. Working as a team of four, we successfully completed the project within a week.'
const paragraphText2 = 'We created APIs for the main features of the app to work such as the questions, users and keeping track of user’s score as they played the game. I enjoyed the experience of collaborating with my teammates, employing techniques such as pair programming and mob programming to tackle issues. As well as the workflow of using GitHub and Trello to divide tasks and merge our work.'

function ProjectTwoView() {
  return (
    <Wrapper>
      <H2>Climate Quiz</H2>
      <ProjectContainer>
        <Text>
          <p>
            {paragraphText1}
          </p>
          <p>
            {paragraphText2}
          </p>
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
        <a href='https://github.com/alcooke13/climate_quiz' target="_blank" rel="noreferrer">
          <Button>Project Link</Button>
        </a>
      </ProjectContainer>
    </Wrapper>
  );
};


const H2 = styled.h2`
  text-align: center;
  margin-bottom: 0.5em;
  font-size: 2rem;
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

  p{
    font-size: 1.3rem;
  }
`

const ProjectContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
  padding: 1em;
  border: solid 2px black;
  border-radius: 0.3em;
  padding: 1em;
  background-color: rgb(207, 207, 252);
`

const Button = styled.button`
  background:linear-gradient(to left, hsl(271, 70%, 40%), hsl(200, 100%, 30%));
  color: #fff;    
  padding: 0.5em 1em;
  border-radius: .3em;
  cursor: pointer;
  height: 3em;
  width: 10em;
  font-size: 1.3rem;

  &:hover {
  border-color: black;
  box-shadow:0 0 5px 0 black;
  }
`

const StyledDiv = styled.div`
  align-self: flex-start;
  
  h3 {
    font-size: 1.4rem;
  }

  li {
    font-size: 1.3rem;
  }

`

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 0.4em;
  padding: 1em;
`
export default ProjectTwoView;