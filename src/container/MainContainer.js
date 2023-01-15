import MainPage from "../components/MainPage"
import Sidebar from "../components/Sidebar"

function MainContainer() {
  return (
    <div className="MainContainer">
        <h2>The Main Container</h2>
        <Sidebar />
        <MainPage />
    </div>
  )
}

export default MainContainer