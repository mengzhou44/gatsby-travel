import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/menu-data"
import { Button } from "./Button"

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const listener = () => setShowMobileMenu(false)

  useEffect(() => {
    window.addEventListener("resize", listener)

    return () => {
      window.removeEventListener("resize", listener)
    }
  }, [])

  return (
    <Nav>
      <NavLink to="/">EXPLORIX</NavLink>
      <Bars
        onClick={() => {
          setShowMobileMenu(!showMobileMenu)
          console.log(showMobileMenu)
        }}
      />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink key={index} to={item.link}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      {showMobileMenu === true && (
        <MobileMenu>
          {menuData.map((item, index) => (
            <NavLink key={index} to={item.link}>
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
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
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
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 3;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;

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
    height: 200px;
    width: 50%;
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
