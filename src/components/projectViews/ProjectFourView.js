import React from 'react'
import styled from 'styled-components';
import homeImg from '../../../src/images/ss/V2_all.png'
import singleImg from '../../../src/images/ss/v2_product_single.png'
import editImg from '../../../src/images/ss/v2_edit.png'
import stockImg from '../../../src/images/ss/v2_stock_count.png'

const paragraphText1 = 'A web application which updates and improves upon my first project. My goal for this project was to review and consolidate the knowledge and skills that I acquired during my time at CodeClan. To achieve this I chose to build a new code base using different technologies compared to version 1.0. This allowed me to further master tools such as  React, JavaScript, Java and Spring Boot.'
const paragraphText2 = 'One specific aspect I wanted to focus on in this project was enhancing the user interface of the site. To accomplish this I completed a short course on CSS to sharpen my skills and applied what I learned to this new version. I am satisfied with the outcome of the project, as I was able to compare it with my first project and witness firsthand how much I have grown.'

function ProjectFourView({goNextImg, goBackImg, imgNum}) {

  return (
    <Wrapper>
      <H2>Fantasy Store 2.0</H2>
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
        {imgNum === 2 ? <Img src={singleImg} alt='Page showing one product'/>: ""}
        {imgNum === 3 ? <Img src={editImg} alt='Page to edit product details'/>: ""}
        {imgNum === 4 ? <Img src={stockImg} alt='Modal for stock quantity'/>: ""}
        <button className='arrow arrow-right' onClick={goNextImg}/>
        </ImgButtonBox>
        <StyledDiv>
          <h3>Tools Useds</h3>
          <InnerBox>
            <div>
            <li>JavaScript</li>
            <li>Java</li>
            </div>
            <div>
            <li>React</li>
            <li>PostgreSQL</li>
            </div>
            <div>
            <li>Spring Boot</li>
            </div>
          </InnerBox>
        </StyledDiv>
        <a href='https://github.com/alcooke13/Fantasy_StoreV2' target="_blank" rel="noreferrer">
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
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1em;
  align-items: center;
  padding: 1em;
  border: solid 2px black;
  border-radius: 0.3em;
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
  font-size: 1.3em;

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
export default ProjectFourView;