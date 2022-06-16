import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { FaRegLightbulb } from "react-icons/fa"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"

import styled from "styled-components"

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["testimonial-1", "testimonial-2"] }
        }
      ) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  return (
    <TestimonialsContainer>
      <TopLine>Testimonials</TopLine>
      <Description>What People are Saying</Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
            <IconCheckmarkCircle />
            <h3>Sean Michaels</h3>
            <p>
              The greatest experience in my life! It is so much fun exploring
              mountains and they made it super easy to book my trip and
              accomodation!
            </p>
          </Testimonial>

          <Testimonial>
            <IconLightbulb />
            <h3>Sarah Keith</h3>
            <p>
              The greatest experience in my life! It is so much fun exploring
              mountains and they made it super easy to book my trip and
              accomodation!
            </p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>
          {data.allFile.edges.map(edge => (
            <Image
              key={edge.node.id}
              image={edge.node.childImageSharp.gatsbyImageData}
              alt="alt"
            />
          ))}
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialsContainer>
  )
}

export default Testimonials

const TestimonialsContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((110vw - 1300px) / 2);
  height: 100%;
`
const TopLine = styled.p`
  font-size: 1rem;
  color: #077bf1;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`
const Description = styled.p`
  text-align: start;
  padding-left: 2rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
  margin-bottom: 4rem;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`
const Testimonial = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
  }

  p {
    color: #3b3b3b;
  }
`
const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const Image = styled(GatsbyImage)`
  border-radius: 10px;
  height: 100%;
`

const IconLightbulb = styled(FaRegLightbulb)`
  color: #f9b19b;
  font-size: 2rem;
  margin-bottom: 1rem;
`

const IconCheckmarkCircle = styled(IoMdCheckmarkCircleOutline)`
  color: #3fffa8;
  font-size: 2rem;
  margin-bottom: 1rem;
`
