import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: '#1e4471',
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }} className="HeaderTitle">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            pointerEvents: 'none'
          }}
        >
          {siteTitle}
        </Link>
        <li className="NavBar">
        <AniLink paintDrip to="/" duration={1} hex="#00bceb">
          <button className="NavItems">
           Home
        </button>
        </AniLink>
        <AniLink paintDrip to="/CustomerEngagement" duration={1} hex="#00bceb">
        <button className="NavItems">
           Customer Engagement
        </button>
        </AniLink>
        <AniLink paintDrip to="/FAQ" duration={1} hex="#00bceb">
        <button className="NavItems">
           FAQ
        </button>
        </AniLink>
      </li>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
