import NavBar from "./NavBar"
import styled from "styled-components"



const Img = styled.img`
width: 200px;
`

const NavBarContainer = styled.div`

`

const ImageBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 15%;

@media (max-width: 900px){
  display: none;
}
`

const SidebarContent = styled.div`
    border: solid 2px red;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 8em;
`

function Sidebar({onAboutMeClick, onCvClick, onProjectsClick, onContactsClick}) {
  return (
    <Aside>
        <SidebarContent>
          <ImageBox>
          <Img src="https://www.seekpng.com/png/full/966-9665317_placeholder-image-person-jpg.png" alt="picture of me" />
          </ImageBox>
          <NavBarContainer>
            <NavBar onAboutMeClick={onAboutMeClick} onCvClick={onCvClick} onProjectClick={onProjectsClick} onContactsClick={onContactsClick}/>
          </NavBarContainer>
        </SidebarContent>
    </Aside>
  )
}


const Aside = styled.aside`
   
`

export default Sidebar;