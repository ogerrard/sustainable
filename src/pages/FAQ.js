import * as React from "react"
import Helmet from "react-helmet"
import { withPrefix, Link } from "gatsby"
import scrollTo from 'gatsby-plugin-smoothscroll';
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "bootstrap/dist/css/bootstrap.min.css";

const SecondPage = () => (
  <Layout>
    <Seo title="Home" />
    <Helmet>
      <script src={withPrefix('accordion.js')} type="text/javascript" />
    </Helmet>
    <li className="FAQButtonList">
    <button onClick={() => scrollTo('#ProductQs')}>Products</button>
    <button onClick={() => scrollTo('#SupplyChainQs')}>Supply Chain</button>
    </li>
    <h2 id="StanceQs">Cisco Stance</h2>
    <details open>
  <summary>FAQ 1</summary>
  <div class="faq__content">
    <p>Answer 1</p>
  </div>
</details>
<details>
  <summary>FAQ 2</summary>
  <div class="faq__content">
    <p>Answer 2</p>
  </div>
</details>
<details>
  <summary>FAQ 3</summary>
  <div class="faq__content">
    <p>Answer 3</p>
  </div>
</details>
<br />
<h2 id="SupplyChainQs">Supply Chain</h2>
<details>
  <summary>FAQ 2</summary>
  <div class="faq__content">
    <p>Answer 2</p>
  </div>
</details>
<details>
  <summary>FAQ 3</summary>
  <div class="faq__content">
    <p>Answer 3</p>
  </div>
</details>
<details>
  <summary>FAQ 2</summary>
  <div class="faq__content">
    <p>Answer 2</p>
  </div>
</details>
<details>
  <summary>FAQ 3</summary>
  <div class="faq__content">
    <p>Answer 3</p>
  </div>
</details>
<details>
  <summary>FAQ 2</summary>
  <div class="faq__content">
    <p>Answer 2</p>
  </div>
</details>
<details>
  <summary>FAQ 3</summary>
  <div class="faq__content">
    <p>Answer 3</p>
  </div>
</details>
<details>
  <summary>FAQ 2</summary>
  <div class="faq__content">
    <p>Answer 2</p>
  </div>
</details>
<details>
  <summary>FAQ 3</summary>
  <div class="faq__content">
    <p>Answer 3</p>
  </div>
</details>
<details>
  <summary>FAQ 2</summary>
  <div class="faq__content">
    <p>Answer 2</p>
  </div>
</details>
<details>
  <summary>FAQ 3</summary>
  <div class="faq__content">
    <p>Answer 3</p>
  </div>
</details>
<h2 id="ProductQs">Product Efficiency</h2>
<details>
  <summary>FAQ 2</summary>
  <div class="faq__content">
    <p>Answer 2</p>
  </div>
</details>
<details>
  <summary>FAQ 3</summary>
  <div class="faq__content">
    <p>Answer 3</p>
  </div>
</details>
  </Layout>
)

export default SecondPage
