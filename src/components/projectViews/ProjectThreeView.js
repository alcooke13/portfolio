import React from 'react'
import styled from 'styled-components';

function ProjectThreeView() {
  return (
    <ProjectContainer>
    <H2>Group Up</H2>
    <p>
    For our capstone project, we created a mobile app designed to simplify the planning process for group gatherings among friends. We implemented functionalities such as polling for locations, activities, and dates. To accomplish this, we developed our own backend API using Java and Spring Boot. For the frontend we used TypeScript and React Native Expo. We developed this app as a team of four and successfully completed the project in two weeks. 
    <p>This was a challenging project as we decided to use TypeScript and React Native Expo which were not covered in the CodeClan curriculum. Although challenging, I enjoyed the experience of building upon the foundation provided by CodeClan and taking the initiative to self-learn these additional technologies. Through this experience, I was able to consolidate my knowledge and skills, ultimately resulting in the creation of an app that I am truly proud of. 
    </p>
    </p>
    <h3>Technologies</h3>
    <ul>
      <li>TypeScript</li>
      <li>Java</li>
      <li>React Native</li>
      <li>PostgreSQL</li>
      <li>Spring Boot</li>
    </ul>
    <a href='https://github.com/alcooke13/group_app' target="_blank" rel='noopener'>
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

export default ProjectThreeView;