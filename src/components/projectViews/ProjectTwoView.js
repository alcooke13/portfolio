import React from 'react'
import styled from 'styled-components';

function ProjectTwoView() {
  return (
    <ProjectContainer>
        <H2>Climate Quiz</H2>
        <p>An educational game in the form of a quiz on the topic of climate change. The goal of the project was to create an interactive app that incorporated various question types, enabling users to explore the factors and consequences of climate change. Working as a team of four, we successfully completed the project within a week. We created APIs for the main features of the app to work such as the questions, users and keeping track of user’s score as they played the game. I enjoyed the experience of collaborating with my teammates, employing techniques such as pair programming and mob programming to tackle issues. As well as the workflow of using GitHub and Trello to divide tasks and merge our work. </p>
        <h3>Technologies</h3>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>MongoDB</li>
          <li>Express</li>
        </ul>
        <a href='https://github.com/alcooke13/climate_quiz' target="_blank">
          <button>Project Link</button>
        </a>
    </ProjectContainer>
  );
};


const H2 = styled.h2`
  text-align: center;
  margin-bottom: 0.5em;
`

const ProjectContainer = styled.div`
`

export default ProjectTwoView;