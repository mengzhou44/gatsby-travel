import React from "react"
import styled from "styled-components"
import { Button } from "../Button"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <StaticImage
          src="../../assets/images/hero.jpg"
          alt="images"
          placeholder="blurred"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1>Unreal Destinations</HeroH1>
          <HeroP>Out of this world</HeroP>
          <Button round="true" primary="true" big="true" to="/trips">
            Travel now
          </Button>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  background: #0c0c0c;
  color: #fff;
  padding: 0 1rem;
  height: 100vh;
  margin-top: -80px;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`
const HeroBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const HeroContent = styled.div`
  z-index: 3;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  font-weight: bold;
  line-height: 1.1;
`
const HeroH1 = styled.div`
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0 1rem;
`
const HeroP = styled.div`
  font-size: clamp(1rem, 3vw, 2rem);
  margin-bottom: 2rem;
  font-weight: 400;
`
