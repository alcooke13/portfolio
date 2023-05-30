import styled from "styled-components"

function NavBar({setPageContent}) {
    const onAboutMeClick = () => {
        setPageContent("aboutMe");
    };

    const onProjectsClick = () => {
        setPageContent("projects");
    };

    const onCvClick = () => {
        setPageContent("cv");
    };

    const onContactsClick = () => {
        setPageContent("contacts");
    };

    return (
    
    <NavContainer>
            <Li onClick={onAboutMeClick}>About Me</Li >
            <Li onClick={onProjectsClick}>Projects</Li>
            <Li onClick={onCvClick}>Skills</Li>
            <Li onClick={onContactsClick}>Links</Li>
    </NavContainer>
  );
};

const NavContainer = styled.ul`
    display: flex;
    justify-content: space-evenly;
    gap: 1em;
    

    @media (max-width: 900px) {
    gap: 0.1em;
    }
`

const Li = styled.li`
    list-style: none;
    font-size: 1.7em;
`

export default NavBar;