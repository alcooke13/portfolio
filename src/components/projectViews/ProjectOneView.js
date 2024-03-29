import React from 'react'
import styled from 'styled-components';
import imgAll from '../../images/ss/v1_fantasy.png'
import img2Single from '../../images/ss/V1_SS2.png'
import img3Edit from '../../images/ss/V1_SS3_50.png'

const paragraphText1 = 'A full stack web application that I created using Flask. I drew inspiration from enjoying media in a fantasy setting  particularly games. The main goal of my project was to assist a merchant in a fantasy world with managing their products. The application allows users to easily create new products, modify details of existing ones and delete products from their inventory all while keeping track of stock.'
const paragraphText2 = 'It was a challenging but fulfilling week as I applied the knowledge gained from the first module in CodeClan. I thoroughly enjoyed the experience and I’m proud of what I have accomplished as my first coding project.'

function ProjectOneView({goNextImgLess, goBackImgLess, imgNum}) {
  return (
    <Wrapper>
      <H2>Fantasy Store</H2>
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
        <button className='arrow arrow-left' onClick={goBackImgLess}/>
        {imgNum === 1 ? <Img src={imgAll} alt='Product list page'/>: ""}
        {imgNum === 2 ? <Img src={img2Single} alt='Single product page'/>: ""}
        {imgNum === 3 ? <Img src={img3Edit} alt='Edit product page'/>: ""}
        <button className='arrow arrow-right' onClick={goNextImgLess}/>
        </ImgButtonBox>
        <StyledDiv>
          <h3>Tools Used</h3>
          <InnerBox>
            <div>
            <li>Python</li>
            <li>CSS</li>
            </div>
            <div>
            <li>HTML</li>
            <li>Flask</li>
            </div>
            <div>
            <li>PostgreSQL</li>
            </div>
          </InnerBox>
        </StyledDiv>
        <a href='https://github.com/alcooke13/fantasy_story_project' target="_blank" rel="noreferrer">
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
  padding: 1em;
  background-color: rgb(207, 207, 252);
`

const ImgButtonBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%;
  @media(max-width: 800px) {
  gap: 0;
}

`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

  p {
    font-size: 1.3rem;
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
  grid-template-columns: repeat(3, 1fr);
  gap: 2em;
`

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
    width: 100%;
    height: auto;
    align-self: center;
    border-radius: 0.3em;
`

export default ProjectOneView;