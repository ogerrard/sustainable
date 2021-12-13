import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const SecondPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1 className="welcomeText">Check out the resources we've got to help you engage your customer.</h1>
    <h2 className="haveText">Take a look at...</h2>
    <div className="divider"></div>
    <li className="ButtonList">
    <AniLink cover direction="up" to="/404.js" duration={1} bg="#00bceb">
      <button className="Button1">
      Conversation starters and key talking points
      </button>
      </AniLink>
      <a target="_blank" href="https://cisco-my.sharepoint.com/:p:/p/afienga/EVT-pGDqcTNLqAFMCKmbE-QBvxI6wUQBsz_0m09tfbe7tw?e=aTK1Z4">
      <button className="Button2 CEButton2">
      Customer Sustainability Report Template
      </button>
      </a>
      <AniLink cover direction="up" to="/CustomerEngagement2">
      <button className="Button3">
      Next steps to develop the engagement
      </button>
      </AniLink>
    </li>
  </Layout>
)

export default SecondPage
