import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import Container from "../Container"
import HeaderLoggedIn from "./HeaderLoggedIn"
import StateContext from "../StateContext"

function Header(props) {
  const appState = useContext(StateContext)
  const navigate = useNavigate()

  return (
    <Container class={"header-bar bgclr-accent colr-dark"}>
      <div className="header-container">
        <span onClick={() => navigate("/apps")} className="logo">
          TMS
        </span>
        {appState.user && <HeaderLoggedIn />}
      </div>
    </Container>
  )
}

export default Header
