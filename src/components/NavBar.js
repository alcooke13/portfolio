import styled from "styled-components"

function NavBar({setPageContent}) {
    const onAboutMeClick = () => {
        setPageContent("aboutMe");
    };

    const onProjectsClick = () => {
        setPageContent("projects");
    };

    return (
    
    <NavContainer>
        <Li onClick={onAboutMeClick}>About</Li >
        <Li onClick={onProjectsClick}>Projects</Li>
    </NavContainer>
  );
};

const NavContainer = styled.ul`
    display: flex;
    justify-content: space-evenly;
    gap: 1em;
    margin-right: 5%;

    @media (max-width: 900px) {
    margin-right: 2%;
    font-size: 0.5em;
    }
`

const Li = styled.li`
    list-style: none;
    font-size: 1.7em;
    cursor: pointer;

`

export default NavBar;