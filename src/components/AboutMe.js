import React from 'react'
import styled from 'styled-components';

function AboutMe() {
  return (
    <AboutContainer>
      <AboutSection>
      <H2>About Me</H2>
      <P>
      As a Junior Software Developer, I am embarking on a career transition from my previous career as a Flight Instructor. I have recently graduated from CodeClan’s Professional Software Development Course, an intensive coding bootcamp, where I acquired skills to kickstart my journey into the tech Industry. 
      </P>
      <br/>
      <P>
      During my time at CodeClan, I created a diverse range of projects, both working individually and collaboratively. These projects showcase my ability to work effectively both independently and as part of a team as well as showcase the skills and knowledge I acquired from my coding bootcamp journey. 
      </P>
      <br/>
      <P>
      I am excited to leverage this solid foundation and continue expanding my skill set within a professional setting. If you would like to learn more about these projects or discuss potential opportunities for collaboration, please don’t hesitate to reach out.
      </P>
      </AboutSection>
      <SkillsSection>
        <H2>Skills</H2>
      {/* section for languages */}
      <section>
        <h3>Programming Languages</h3>
        <P>To update</P>
        <ul>
          <Li>Python</Li>
          <Li>JavaScript</Li>
          <Li>Java</Li>
        </ul>
      </section>
      {/* section for frameworks */}
      <section>
        <h3>Frameworks</h3>
        <P>To update</P>
        <ul>
          <Li>Flask</Li>
          <Li>React</Li>
          <Li>Spring</Li>
        </ul>
      </section>
      {/* section for  */}
      <section>
        <h3>Testing</h3>
        <P>To update</P>
        <ul>
          <Li>Mocha</Li>
          <Li>Cypress</Li>
        </ul>
      </section>
      {/* section for databases */}
      <section>
        <h3>Databases</h3>
        <P>To update</P>
        <ul>
          <Li>MongoDB</Li>
          <Li>PostgreSQL</Li>
        </ul>
      </section>
      </SkillsSection> 
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
`
const H2 = styled.h2`
  text-align: center;
  margin-bottom: 0.6em;

`

const AboutSection = styled.section`

`

const SkillsSection = styled.section`
  margin-top: 1em;
`

const P = styled.p`

`

const Li = styled.li`
  list-style: none;
  padding: 0.3em;
`

export default AboutMe;