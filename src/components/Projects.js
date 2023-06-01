import React, {useEffect} from 'react'
import styled from 'styled-components';
import pythonLogo from '../../src/images/logos/python.png'
import htmlLogo from '../../src/images/logos/html.png'
import cssLogo from '../../src/images/logos/css.png'
import psqlLogo from '../../src/images/logos/psql.png'
import flaskLogo from '../../src/images/logos/flask.png'
import reactLogo from '../../src/images/logos/react.png'
import reactNativeLogo from '../../src/images/logos/native.png'
import mongoDBLogo from '../../src/images/logos/mongodb.png'
import expressLogo from '../../src/images/logos/express.png'
import jsLogo from '../../src/images/logos/jjs.png'
import springLogo from '../../src/images/logos/spring.png'
import javaLogo from '../../src/images/logos/java.png'
import tsLogo from '../../src/images/logos/typescript.png'
import fantasyImg from '../../src/images/ss/v1_fantasy.png'
import climateImg from '../../src/images/ss/climate_ss1.png'
import groupImg from '../../src/images/ss/group_1.png'
import fantasyV2Img from '../../src/images/ss/V2_all.png' 


function Projects({ setPageContent, setImgNum }) {
    useEffect(() => {
        setImgNum(1);
    });
    
    return (
        <ProjectBox>
            <H2>Projects</H2>
            <ProjectContainer>
                <Li>
                    <InsideContainer>
                        <Header>
                            <H3>Fantasy Store</H3>
                            <Box>
                            <Img src={pythonLogo} alt='Python Logo' />
                            <Img src={htmlLogo} alt='HTML Logo' />
                            <Img src={cssLogo} alt='CSS Logo' />
                            <Img src={flaskLogo} alt='FLASK Logo' />
                            <Img src={psqlLogo} alt='PostgreSQL Logo' />
                            </Box>
                        </Header>
                        <p>
                            A web app which simplifies the management of a fantasy themed store selling products enabling seamless inventory control.
                        </p>
                        <ImgTest src={fantasyImg} alt='Test image'/>
                        <Button onClick={() => setPageContent('projectOne')}>View Project</Button>
                    </InsideContainer>
                </Li>
                <Li>
                    <InsideContainer>
                        <Header>
                            <H3>Climate Quiz</H3>
                            <Box>
                            <Img src={jsLogo} alt='JavaScript Logo' />
                            <Img src={reactLogo} alt='React Logo' />
                            <Img src={expressLogo} alt='Express Logo'  id='express'/>
                            <Img src={mongoDBLogo} alt='MongoDB Logo' />
                            </Box>
                        </Header>
                        <p>
                            A full stack app in the form of an educational quiz on climate change and the different factors which affect it.
                        </p>
                        <ImgTest src={climateImg} alt='Test image'/>
                        <Button onClick={() => setPageContent('projectTwo')}>View Project</Button>
                    </InsideContainer>
                </Li>
                <Li>
                    <InsideContainer>
                        <Header>
                            <H3>Group Up</H3>
                            <Box>
                            <Img src={javaLogo} alt='Java Logo' />
                            <Img src={tsLogo} alt='TypeScript Logo' />
                            <Img src={reactNativeLogo} alt='React Native Logo' id='native'/>
                            <Img src={springLogo} alt='Spring Logo' />
                            <Img src={psqlLogo} alt='PostgreSQL Logo' />
                            </Box>
                        </Header>
                        <p>
                            A mobile app designed to ease planning events and group gatherings with friends. With interactive features such as polls to ease the decision making process when planning a new gathering.
                        </p>
                        <ImgTest src={groupImg} alt='Test image'/>
                        <Button onClick={() => setPageContent('projectThree')}>View Project</Button>
                    </InsideContainer>
                </Li>
                <Li>
                    <InsideContainer>
                        <Header>
                            <H3>Fantasy Store 2.0</H3>
                            <Box>
                            <Img src={javaLogo} alt='Java Logo' />
                            <Img src={jsLogo} alt='JavaScript Logo' />
                            <Img src={reactLogo} alt='React Logo' />
                            <Img src={springLogo} alt='Spring Logo' />
                            <Img src={psqlLogo} alt='PostgreSQL Logo' />
                            </Box>
                        </Header>
                        <p>
                            An updated and improved version of my first project. Which continues to simplify the management of a fantasy-themed store selling products using different programming languages and technologies.
                        </p>
                        <ImgTest src={fantasyV2Img} alt='Test image'/>
                        <Button onClick={() => setPageContent('projectFour')}>View Project</Button>
                    </InsideContainer>
                </Li>
            </ProjectContainer>
        </ProjectBox>
    );
};

const ProjectBox = styled.div`

`

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3{
        font-size: 1.4rem;
    }
`
const Box = styled.div`
    display: flex;
    gap: 0.5em;

    img:last-child {
        height: 37px;
    }

    #express {
        width: 60px;
        height: 40px;
    }
   
    #native {
        width: 50px;
    }

`

const H2 = styled.h2`
    text-align: center;
    font-size: 2rem;

`

const Img = styled.img`
    width: 35px;
    height: 35px;

    @media(max-width: 800px) {
    display: none;
}

`

const ImgTest = styled.img`
    width: 100%;
    height: auto;
    align-self: center;
    border-radius: 0.3em;

@Media (max-width: 800px){
    width: 200px;
    height: 200px;
}
`

const H3 = styled.h3`
    margin-bottom: 20em;
`

const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const InsideContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    border: solid 2px black;
    border-radius: 0.3em;
    padding: 1em;
    background-color: rgb(207, 207, 252);
p{
    font-size: 1.3em;
}

`

const Li = styled.div`
    padding: 1em;
`

const Button = styled.button`
    background:linear-gradient(to left, hsl(271, 70%, 40%), hsl(200, 100%, 30%));
    color: #fff;
    padding: 0.5em 1em;
    border-radius: .3em;
    cursor: pointer;
    align-self: center;
    height: 2.5em;
    width: 11em;
    font-size: 1.3rem;

    &:hover {
    border-color: black;
    box-shadow:0 0 5px 0 black;

  }
`

export default Projects