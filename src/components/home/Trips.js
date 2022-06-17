import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { ImLocation } from "react-icons/im"
import { Button } from "../Button"

const Trips = ({ heading }) => {
  const data = useStaticQuery(graphql`
    query GetAllTrips {
      allTripsDataJson {
        edges {
          node {
            button
            id
            name
            alt
            img {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  `)

  const trips = data.allTripsDataJson.edges.map(edge => {
    return (
      <ProductCard key={edge.node.id}>
        <ProductImage
          image={edge.node.img.childImageSharp.gatsbyImageData}
          alt={edge.node.alt}
        />
        <ProductInfo>
          <TextWrap>
            <ImLocation />
            <ProductTitle>{edge.node.name}</ProductTitle>
          </TextWrap>
          <Button
            to="/trips"
            primary="true"
            round="true"
            css={{ padding: "10px" }}
          >
            {edge.node.button}
          </Button>
        </ProductInfo>
      </ProductCard>
    )
  })

  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductsWrapper>{trips}</ProductsWrapper>
    </ProductsContainer>
  )
}

export default Trips

const ProductsContainer = styled.div`
  padding-top: 20px;
  min-height: 100vh;
  background: #fff;
  color: #fff;

  @media screen and (max-width: 600px) {
    margin-top: -3rem;
  }
`

const ProductsHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;

  @media screen and (max-width: 600px) {
    margin-bottom: 3rem;
  }
`

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const ProductCard = styled.div`
  line-height: 2;
  height: 500px;
  width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;
  @media screen and (max-width: 868px) {
    height: 300px;
    width: 100%;
    object-fit: cover;
  }
`

const ProductImage = styled(GatsbyImage)`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border-radius: 10px;
  height: 100%;
  max-width: 100%;
  z-index: 0;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    filter: brightness(100%);
  }
`
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;
  min-height: 100px;
  width: 100%;
  z-index: 3;
  position: absolute;
  left: 0;
  bottom: 0;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`
const TextWrap = styled.div`
  display: flex;
  align-items: center;
`
const ProductTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
`
