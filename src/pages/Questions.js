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
    <h1 className="welcomeText">Check out the resources we've got to help you.</h1>
    <h2 className="haveText">You can...</h2>
    <div className="divider"></div>
    <li className="ButtonList">
    <AniLink cover direction="up" to="/FAQ" duration={1} bg="#00bceb">
      <button className="Button1">
      Check out our FAQ Page
      </button>
      <br />
      </AniLink>
      <button className="Button2">
      Find out more about our Webex Q&A Bot
      </button>
      <a target="_blank" href="https://cisco.sharepoint.com/sites/CircularEconomy">
      <button className="Button3">
      Visit our Circular Economy SharePoint Site
      </button>
      </a>
    </li>
  </Layout>
)

export default SecondPage
