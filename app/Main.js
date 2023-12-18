// import node modules
import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useImmerReducer } from "use-immer"
import Axios from "axios"
import Cookies from "js-cookie"

Axios.defaults.baseURL = "http://localhost:3000"
// Axios.defaults.withCredentials = true

import DispatchContext from "./DispatchContext"
import StateContext from "./StateContext"

// import components
//import Header from "./components/Header"
//import Login from "./components/Login"
//import ErrorPage from "./components/ErrorPage"
//import Footer from "./components/Footer"
//import Toast from "./components/Toast"
//import Profile from "./components/Profile"
//import Home from "./components/Home"
//import UserMgmt from "./components/UserMgmt"
//import TaskDashboard from "./components/TaskDashboard"

// immerReducer enables state to be accessed throughout app
// initial state is empty
