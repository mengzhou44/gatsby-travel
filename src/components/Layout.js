import React from "react"
import Header from "./Header"
import { GlobalStyle } from "../styles/GlobalStyle"
import Footer from "./Footer"
import styled from "styled-components"

const Layout = ({ children, isHomePage }) => {
  return (
    <>
      <Container>
        <GlobalStyle />
        <Header isHomePage={isHomePage}/>
        <main style={{ padding: "0 10px"}}>{children}</main>
      </Container>
      <Footer />
    </>
  )
}

export default Layout
 
const Container = styled.div`
  min-height: 100vh;
`
