import NavBar from "./NavBar"
import styled from "styled-components"

const Aside = styled.aside`
    border: solid 2px red;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

function Sidebar({onAboutMeClick, onCvClick, onProjectsClick}) {
  return (
    <Aside>
        <NavBar onAboutMeClick={onAboutMeClick} onCvClick={onCvClick} onProjectClick={onProjectsClick}/>
    </Aside>
  )
}

export default Sidebar