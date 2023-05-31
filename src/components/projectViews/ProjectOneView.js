import React from 'react'
import styled from 'styled-components';
import testImg from '../../images/placeholder.png'

function ProjectOneView() {
  return (
    <ProjectContainer>
      <Text>
        <H2>Fantasy Store</H2>
        <p>A full stack web application that I created using Flask. I drew inspiration from enjoying media in a fantasy setting  particularly games. The main goal of my project was to assist a merchant in a fantasy world with managing their products. The application allows users to easily create new products, modify details of existing ones and delete products from their inventory all while keeping track of stock. It was a challenging but fulfilling week as I applied the knowledge gained from the first module in CodeClan. I thoroughly enjoyed the experience and I’m proud of what I have accomplished as my first coding project.</p>
      </Text>
      <Img src={testImg} alt={"Project Picture"} />
      <StyledDiv>
        <h3>Tools Used</h3>
        <ul>
          <li>Python</li>
          <li>CSS</li>
          <li>HTML</li>
          <li>Flask</li>
          <li>PostgreSQL</li>
        </ul>
      </StyledDiv>
      <a href='https://github.com/alcooke13/fantasy_story_project' target="_blank" rel='noopener'>
        <Button>Project Link</Button>
      </a>
    </ProjectContainer>
  );
};


const H2 = styled.h2`
  text-align: center;
  margin-bottom: 0.5em;
`

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
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

export default ProjectOneView;