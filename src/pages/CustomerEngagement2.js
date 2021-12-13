import * as React from "react"
import Helmet from "react-helmet"
import { withPrefix, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const SecondPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="divider"></div>
    <h2>Now we need to analyse the Customer's Sustainability Report.</h2>
    <br />
    <h2> These are the key questions that need thinking about... </h2>
    <br />
    <div className="QuestionsContainer">
      <div>
      Does the customer have a clear vision on sustainability strategy and priorities and how they are aligned to business goals? 
      </div>
      <br />
      <input type="radio" name="ClearVision" id="ClearVisionYes"></input>
      <label for="ClearVision" className="YesNoLabel" >Yes!</label>
      <input type="radio" name="ClearVision" id="ClearVisionNo"></input>
      <label for="ClearVision" className="YesNoLabel">No, I need help.</label>
      <div class="reveal-if-CV-yes">
          Does the customer have all the required capabilities to achieve identified sustainability initiatives? 
          <br /><br />
          <input type="radio" name="Capabilities" id="CapabilitiesYes"></input>
          <label for="Capabilities" className="YesNoLabel" >Yes!</label>
          <input type="radio" name="Capabilities" id="CapabilitiesNo"></input>
          <label for="Capabilities" className="YesNoLabel">No, I need help.</label>
        <div class="reveal-if-CAP-yes">
            Does the customer have an implementation roadmap in place? 
            <br /><br />
            <input type="radio" name="Implementation" id="ImplementationYes"></input>
            <label for="Implementation" className="YesNoLabel" >Yes!</label>
            <input type="radio" name="Implementation" id="ImplementationNo"></input>
            <label for="Implementation" className="YesNoLabel">No, I need help.</label>
            <div class="reveal-if-IMP-yes">
              Is the customer ready to implement identified sustainability initiatives?
              <br /><br />
              <input type="radio" name="Initiative" id="InitiativeYes"></input>
              <label for="Initiative" className="YesNoLabel" >Yes!</label>
              <input type="radio" name="Initiative" id="InitiativeNo"></input>
              <label for="Initiative" className="YesNoLabel">No, I need help.</label>
              <div class="reveal-if-INIT-yes">
                Final Questions
              </div>
              <div class="reveal-if-INIT-no">
              Provide Cisco PDI services (e.g. PDI scope for collaboration solution)
              </div>
            </div>
            <div class="reveal-if-IMP-no">
            Develop a phased execution roadmap for prioritized initiatives 
            </div>
          </div>
          <div class="reveal-if-CAP-no">
          Perform baselining and gap analysis to Identify capability gaps and areas for improvement
          </div>
        </div>
        <div class="reveal-if-CV-no">
        Define the customer’s sustainability strategy & perform technology alignment
        </div>
      <br /><br />
    </div>
  </Layout>
)

export default SecondPage
