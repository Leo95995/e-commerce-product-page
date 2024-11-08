// Components
import Home from "./home"
import NavBar from "./components/NavBar/navBar"
// Styled Components
import styled from "styled-components"
import { MOBILE } from "./utilities/queries"


const AppWrapper = styled.div`
  /* @media(max-width: ${MOBILE}){
padding: 0px 20px;
  } */


`

function App() {

  return (
    <>
    <AppWrapper>
    <NavBar/>
    <Home></Home>
    </AppWrapper>
    </>
  )
}

export default App
