import React from 'react'
import styled from 'styled-components';
import homeImg from '../../../src/images/ss/home_page_group.png'
import emptyImg from '../../../src/images/ss/group_empty.png'
import pollImg from '../../../src/images/ss/group_polls.png'
import calenderImg from '../../../src/images/ss/group_calender.png'

const paragraphText1 = 'For our capstone project, we created a mobile app designed to simplify the planning process for group gatherings among friends. We implemented functionalities such as polling for locations, activities, and dates. To accomplish this, we developed our own backend API using Java and Spring Boot. For the frontend we used TypeScript and React Native Expo. We developed this app as a team of four and successfully completed the project in two weeks.'
const paragraphText2 = 'This was a challenging project as we decided to use TypeScript and React Native Expo which were not covered in the CodeClan curriculum. Although challenging, I enjoyed the experience of building upon the foundation provided by CodeClan and taking the initiative to self-learn these additional technologies. Through this experience, I was able to consolidate my knowledge and skills, ultimately resulting in the creation of an app that I am truly proud of.'

function ProjectThreeView({goNextImg, goBackImg, imgNum}) {
 

  return (
    <Wrapper>
      <H2>Group Up</H2>
      <ProjectContainer>
        <Text>
          <p>
            {paragraphText1}
          </p>
          <p>
            {paragraphText2}
          </p>
        </Text>
        <ImgButtonBox>
        <button className='arrow arrow-left' onClick={goBackImg}/>
        {imgNum === 1 ? <Img src={homeImg} alt='Home page'/>: ""}
        {imgNum === 2 ? <Img src={emptyImg} alt='Group page no events planned'/>: ""}
        {imgNum === 3 ? <Img src={pollImg} alt='Group page with polls'/>: ""}
        {imgNum === 4 ? <Img src={calenderImg} alt='Calender View'/>: ""}
        <button className='arrow arrow-right' onClick={goNextImg}/>
        </ImgButtonBox>
        <StyledDiv>
          <h3>Tools Used</h3>
          <InnerBox>
            <div>
            <li>TypeScript</li>
            <li>Java</li>
          
            </div>
            <div>
            <li>React Native</li>
            <li>Spring Boot</li>
            </div>
            <div>
            <li>PostgreSQL</li>
            
            </div>
          </InnerBox>
        </StyledDiv>
        <a href='https://github.com/alcooke13/group_app' target="_blank" rel="noreferrer">
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

  p {
    font-size: 1.2rem;
  }
`

const ProjectContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-evenly;
  flex-direction: column;
  overflow-x: hidden;
  gap: 1em;
  align-items: center;
  border: solid 2px black;
  border-radius: 0.3em;
  padding: 1em;
  background-color: rgb(207, 207, 252);
`

const ImgButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%;
  @media(max-width: 800px) {
  gap: 0;
}
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
  justify-items: center;
  display: grid;

  h3 {
    font-size: 1.3rem;
    justify-content: center;
    margin-bottom: 0.7em;
  
  }

  li {
    font-size: 1.2rem;
  }

`

const InnerBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2em;
`

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Img = styled.img`
    width: 100%;
    height: auto;
    align-self: center;
    border-radius: 0.3em;

  @media(max-width: 800px) {
    object-fit: contain;
}
`
export default ProjectThreeView;