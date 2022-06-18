import React from "react"
import styled from "styled-components"
import { GiEarthAmerica } from "react-icons/gi"
import { MdAirplanemodeActive, MdTimer } from "react-icons/md"
import { FaMoneyCheck } from "react-icons/fa"

const statsData = [
  {
    icon: (
      <GiEarthAmerica
        style={{
          color: "#047fb1",
        }}
      />
    ),
    title: "Over 100 destinations",
    desc: "Travel to over 100 unique places",
  },
  {
    icon: (
      <MdAirplanemodeActive
        style={{
          color: "#f3a82e",
        }}
      />
    ),
    title: "1 Million trips made",
    desc: "Over one million trips made last year!",
  },
  {
    icon: (
      <MdTimer
        style={{
          color: "#3af576",
        }}
      />
    ),
    title: "Fatest support",
    desc: "Access our support 24/7",
  },
  {
    icon: (
      <FaMoneyCheck
        style={{
          color: "#047fb1",
        }}
      />
    ),
    title: "Best deals",
    desc: "We offer the best price",
  },
]

const Stats = () => {
  return (
    <StatsContainer>
      <Heading>Why Choose Us?</Heading>
      <Wrapper>
        {statsData.map((item, index) => (
          <StatsBox key={index}>
            <Icon>{item.icon}</Icon>
            <Title>{item.title}</Title>
            <Description>{item.desc}</Description>
          </StatsBox>
        ))}
      </Wrapper>
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
  @media screen and (max-width: 600px ) {
     margin-bottom: 1rem; 
  } 
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const StatsBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 2rem;
  transition: 0.3s;
  @media screen and (max-width: 600px) {
    margin-bottom: 2rem;
  }
`
const Icon = styled.div`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: .5rem;
`
const Title = styled.p`
  font-size: clamp(1rem, 2.5vw, 2rem);
  margin-bottom: 0.5rem;
`
const Description = styled.p`
  font-size: 1.5rem;
`
