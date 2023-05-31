import React from 'react'
import styled from 'styled-components';

function ProjectFourView() {
  return (
    <ProjectContainer>
    <H2>Fantasy Store 2.0</H2>
    <p>
    A web application which updates and improves upon my first project. My goal for this project was to review and consolidate the knowledge and skills that I acquired during my time at CodeClan. To achieve this I chose to build a new code base using different technologies compared to version 1.0. This allowed me to further master tools such as  React, JavaScript, Java and Spring Boot. One specific aspect I wanted to focus on in this project was enhancing the user interface of the site. To accomplish this I completed a short course on CSS to sharpen my skills and applied what I learned to this new version. I am satisfied with the outcome of the project, as I was able to compare it with my first project and witness firsthand how much I have grown. 
    </p>
    <h3>Technologies</h3>
    <ul>
      <li>JavaScript</li>
      <li>Java</li>
      <li>React</li>
      <li>PostgreSQL</li>
      <li>Spring Boot</li>
    </ul>
    <a href='https://github.com/alcooke13/Fantasy_StoreV2' target="_blank" rel='noopener'>
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

export default ProjectFourView;