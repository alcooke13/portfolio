import React from 'react'
import styled from 'styled-components';

const paragraphAboutMe1 =  "As a Junior Software Developer, I am embarking on a career transition from my previous career as a Flight Instructor. I have recently graduated from CodeClan’s Professional Software Development Course, an intensive coding bootcamp, where I acquired skills to kickstart my journey into the tech Industry."
const paragraphAboutMe2 = "During my time at CodeClan, I created a diverse range of projects, both working individually and collaboratively. These projects showcase my ability to work effectively both independently and as part of a team as well as showcase the skills and knowledge I acquired from my coding bootcamp journey."
const paragraphAboutMe3 = "I am excited to leverage this solid foundation and continue expanding my skill set within a professional setting. If you would like to learn more about these projects or discuss potential opportunities for collaboration, please don’t hesitate to reach out."

function AboutMe() {
  return (
    <AboutContainer>
      <AboutSection>
        <H2>About Me</H2>
        <P>
          {paragraphAboutMe1}
        </P>
        <br />
        <P>
          {paragraphAboutMe2}
        </P>
        <br />
        <P>
          {paragraphAboutMe3}
        </P>
      </AboutSection>
      <SkillsSection>
        <SkillCard>
          <h3>Programming Languages</h3>
          <ListContainer>
            <Li>Python</Li>
            <Li>JavaScript</Li>
            <Li>Java</Li>
            <Li>HTML</Li>
            <Li>CSS</Li>
          </ListContainer>
        </SkillCard>
        <SkillCard>
          <h3>Frameworks</h3>
          <ListContainer>
            <Li>Flask</Li>
            <Li>React</Li>
            <Li>Spring</Li>
            <Li>Express</Li>
          </ListContainer>
        </SkillCard>
        <SkillCard>
          <h3>Technologies</h3>
          <ListContainer>
            <Li>MongoDB</Li>
            <Li>PostgreSQL</Li>
            <Li>Insomnia</Li>
            <Li>Git</Li>
            <Li>GitHub</Li>
          </ListContainer>
        </SkillCard>
        <SkillCard>
          <h3>Skills</h3>
          <ListContainer>
            <Li>Test Driven Development</Li>
            <Li>Agile</Li>
          </ListContainer>
        </SkillCard>
      </SkillsSection>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  gap: 1em;
`
const H2 = styled.h2`
  text-align: center;
  margin-bottom: 0.6em;

`

const AboutSection = styled.section`

`

const SkillsSection = styled.section`
  margin-top: 1em;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;

  @media (max-width: 800px){
    display: flex;
    flex-direction: column;
  }

`

const P = styled.p`

`

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Li = styled.li`
  padding: 0.3em;
  text-align: center;
`

export default AboutMe;