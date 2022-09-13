import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import "./index.css"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

export default function () {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
