import Button from "./Button"
import styled from "styled-components"

const StyledUl = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1em;
    

    @media (max-width: 900px) {
    display: flex;
    justify-content: left;
    flex-direction: row;
    }

`


function NavBar({onAboutMeClick, onCvClick, onProjectClick}) {
  return (
    <StyledUl>
        <div>
            <Button onClick={onAboutMeClick}>About Me</Button >
        </div>
        <div>
            <Button onClick={onProjectClick}>Projects</Button>
        </div>
        <div>
            <Button onClick={onCvClick}>Cv</Button>
        </div>
    </StyledUl>
  )
}

export default NavBar