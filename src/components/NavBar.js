import Button from "./Button"
import styled from "styled-components"

const ButtonsContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1em;
    

    @media (max-width: 900px) {
    gap: 0.1em;
    }

`


function NavBar({onAboutMeClick, onCvClick, onProjectClick, onContactsClick}) {
  return (
    
    <ButtonsContainer>
        <div>
            <Button onClick={onAboutMeClick}>About Me</Button >
        </div>
        <div>
            <Button onClick={onProjectClick}>Projects</Button>
        </div>
        <div>
            <Button onClick={onCvClick}>Skills</Button>
        </div>
        <div>
            <Button onClick={onContactsClick}>Links</Button>
        </div>
    </ButtonsContainer>
  )
}

export default NavBar