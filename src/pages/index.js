import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1 className="welcomeText">Welcome to the Cisco Sustainability portal.</h1>
    <h2 className="haveText">I have...</h2>
    <div className="divider"></div>
    <li className="ButtonList">
    <AniLink cover direction="up" to="Questions" duration={1} bg="#00bceb">
      <button className="Button1">
      Questions about Cisco’s Sustainability.
      </button>
      </AniLink>
      <AniLink cover direction="up" to="CustomerEngagement" duration={1} bg="#00bceb">
      <button className="Button2">
      A potential customer engagement.
      </button>
      </AniLink>
      <AniLink cover direction="up" to="SMERequest" duration={1} bg="#00bceb">
      <button className="Button3">
      A request for time with an SME.
      </button>
      </AniLink>
    </li>
  </Layout>
)

export default IndexPage
