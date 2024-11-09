// Components
import Home from "./home"
import NavBar from "./components/NavBar/navBar"
// Styled Components
import styled from "styled-components"
import { MOBILE, TABLET } from "./utilities/queries"


const AppWrapper = styled.div`

padding: 0 8%;
@media(max-width: ${TABLET}) {
  padding: 0;
}


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
