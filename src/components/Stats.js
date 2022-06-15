import React from "react"
import styled from "styled-components"

const Stats = () => {
  return (
    <StatsContainer>
      <Heading>Why Choose Us?</Heading>
      <Wrapper></Wrapper>
    </StatsContainer>
  )
}

export default Stats

const StatsContainer = styled.div`
  color: #000;
  background: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem calc((100vw-1300px) / 2);
`
const Heading = styled.h1`
  text-align: start;
  font-size: clamp(1.5rem, 5vw, 2rem);
  padding: 0 2rem;
  margin-bottom: 3rem;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
