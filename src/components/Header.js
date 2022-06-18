import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/menu-data"
import { Button } from "./Button"
import { AiOutlineCloseCircle } from "react-icons/ai"

function Header({ isHomePage }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const listener = () => setShowMobileMenu(false)

  useEffect(() => {
    window.addEventListener("resize", listener)
    return () => {
      window.removeEventListener("resize", listener)
    }
  }, [])

  return (
    <Nav isHomePage={isHomePage} showMobileMenu={showMobileMenu}>
      <HomeLink to="/">EXPLORIX</HomeLink>
      {showMobileMenu === false && (
        <Bars
          onClick={() => {
            setShowMobileMenu(true)
          }}
        />
      )}
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink key={index} to={item.link}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      {showMobileMenu === true && (
        <MobileMenu>
          <IconClose onClick={() => setShowMobileMenu(false)} />
          {menuData.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              onClick={() => setShowMobileMenu(false)}
            >
              {item.title}
            </NavLink>
          ))}
        </MobileMenu>
      )}

      <NavButton>
        <Button primary="true" round="true" to="/trips">
          Book a flight
        </Button>
      </NavButton>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: ${({ isHomePage }) => (isHomePage ? "transparent" : "#528BA7")};
  height: 80px; 
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`

const HomeLink = styled(Link)`
  color: #fff;
  height: 100%;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  position: absolute;
  top: 30px;
  left: 10px;
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  height: 100%;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
`

const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
    position: absolute;
    top: 5;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.5rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const MobileMenu = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 200px;
    padding-top: 10px;
    background: #528ba7;
    z-index: 3; 
  }
`
const NavButton = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const IconClose = styled(AiOutlineCloseCircle)`
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 2rem;
  color: #fefefe;
  cursor: pointer;
`
