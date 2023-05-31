import React from 'react'
import styled from 'styled-components';

function ProjectOneView() {
  return (
    <ProjectContainer>
        <H2>Fantasy Store</H2>
        <p>A full stack web application that I created using Flask. I drew inspiration from enjoying media in a fantasy setting  particularly games. The main goal of my project was to assist a merchant in a fantasy world with managing their products. The application allows users to easily create new products, modify details of existing ones and delete products from their inventory all while keeping track of stock. It was a challenging but fulfilling week as I applied the knowledge gained from the first module in CodeClan. I thoroughly enjoyed the experience and I’m proud of what I have accomplished as my first coding project.</p>
        <h3>Technologies</h3>
        <ul>
          <li>Python</li>
          <li>CSS</li>
          <li>HTML</li>
          <li>Flask</li>
          <li>PostgreSQL</li>
        </ul>
        <a href='https://github.com/alcooke13/fantasy_story_project'>
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

export default ProjectOneView;