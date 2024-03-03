// import node modules
import React, { useContext, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

// import components
import Container from "../Container"
import StateContext from "../StateContext"

function Sidebar() {
  const appState = useContext(StateContext)
  // const appDispatch = useContext(DispatchContext)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <Container class="sidebar bgclr-light2">
      <div className="sidebar-container">
        <nav>
          <h2>Dashboard</h2>
          <span onClick={() => navigate("/apps")} className={pathname.startsWith("/apps") ? "selected-nav" : undefined}>
            Apps
          </span>
          {appState.admin && (
            <span onClick={() => navigate("/usermgmt")} className={pathname === "/usermgmt" ? "selected-nav" : undefined}>
              Users Management
            </span>
          )}
        </nav>
      </div>
    </Container>
  )
}

export default Sidebar
