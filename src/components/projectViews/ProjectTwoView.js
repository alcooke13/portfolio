import React from 'react'
import styled from 'styled-components';
import imgHome from '../../../src/images/ss/climate_ss1.png'
import imgQuestion from '../../../src/images/ss/climate_ss2.png'
import imgEnd from '../../../src/images/ss/climate_ss3.png'

const paragraphText1 = 'An educational game in the form of a quiz on the topic of climate change. The goal of the project was to create an interactive app that incorporated various question types, enabling users to explore the factors and consequences of climate change. Working as a team of four, we successfully completed the project within a week.'
const paragraphText2 = 'We created APIs for the main features of the app to work such as the questions, users and keeping track of user’s score as they played the game. I enjoyed the experience of collaborating with my teammates, employing techniques such as pair programming and mob programming to tackle issues. As well as the workflow of using GitHub and Trello to divide tasks and merge our work.'

function ProjectTwoView({goNextImgLess, goBackImgLess, imgNum}) {
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
        <ImgButtonBox>
        <button className='arrow-left' onClick={goBackImgLess}/>
        {imgNum === 1 ? <Img src={imgHome} alt='Product list page'/>: ""}
        {imgNum === 2 ? <Img src={imgQuestion} alt='Single product page'/>: ""}
        {imgNum === 3 ? <Img src={imgEnd} alt='Edit product page'/>: ""}
        <button className='arrow-right' onClick={goNextImgLess}/>
        </ImgButtonBox>
        <StyledDiv>
          <h3>Tools Used</h3>
          <InnerBox>
          <div>
            <li>JavaScript</li>
            <li>React</li>
          </div>
          <div>
            <li>MongoDB</li>
            <li>Express</li>
          </div>
          </InnerBox>
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
  justify-content: space-evenly;
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
    font-size: 1.4rem;
    justify-content: center;
    margin-bottom: 0.7em;
  }

  li {
    font-size: 1.3rem;
  }

`
const InnerBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4em;
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
export default ProjectTwoView;