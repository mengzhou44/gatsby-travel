import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Testimonials from "../components/Testimonials"
import Trips from "../components/Trips"
import Stats from "../components/Stats"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Trips heading="Our favorite destinations" />
    <Testimonials />
    <Stats />
  </Layout>
)

export default IndexPage
