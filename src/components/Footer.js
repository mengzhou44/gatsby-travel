import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterDesc>
          <h1>Explorix</h1>
          <p> We strive to create best experiences for our customers </p>
        </FooterDesc>
        <FooterLinkItems>
          <FooterLinkTitle>Contact Us</FooterLinkTitle>
          <FooterLink to="/page-2">Support</FooterLink>
          <FooterLink to="/page-2">Destinations</FooterLink>
          <FooterLink to="/page-2">Sponsorships</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
      <FooterLinksWrapper>
        <FooterLinkItems>
          <FooterLinkTitle>Videos</FooterLinkTitle>
          <FooterLink to="/page-2">Submit Videos</FooterLink>
          <FooterLink to="/page-2">Ambassadors</FooterLink>
          <FooterLink to="/page-2">Agency</FooterLink>
          <FooterLink to="/page-2">Influence</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle>Social Media</FooterLinkTitle>
          <FooterLink to="/page-2">Instagram</FooterLink>
          <FooterLink to="/page-2">Youtube</FooterLink>
          <FooterLink to="/page-2">Facebook</FooterLink>
          <FooterLink to="/page-2">Twitter</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  padding: 5rem calc((100vw-1100px) / 2);
  padding-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: #000;
  background: #fafafb;
`
const FooterDesc = styled.div`
  padding: 0 2rem;
  h1 {
    margin-bottom: 3rem;
    color: #f26a2e;
  }

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`
const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`
const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`
const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #3d3d4e;

  :hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`
const FooterLinkTitle = styled.h2`
  font-size: 16px;
  margin-bottom: 14px;
`
