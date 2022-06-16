import React from "react"
import Layout from "../components/Layout"
import SearchEngineOptimization from "../components/SearchEngineOptimization"
import Hero from "../components/home/Hero"
import Trips from "../components/home/Trips"
import Stats from "../components/home/Stats"
import Email from "../components/home/Email"
import Testimonials from "../components/home/Testimonials"

const IndexPage = () => (
  <Layout isHomePage={true}>
    <SearchEngineOptimization title="Home" />
    <Hero />
    <Trips heading="Our Favorite Destinations" />
    <Testimonials />
    <Stats />
    <Email />
  </Layout>
)

export default IndexPage
