import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import m from '../components/m.svg'

import '../css/global.css'

class Template extends React.Component {
  render () {
    const { location, children } = this.props
    let header
    if (location.pathname === prefixLink('/')) {
      header = (
        <h1 className="logo">
          <Link to={prefixLink('/')}>
            <img src={m} />
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3 className="logo">
          <Link to={prefixLink('/')}>
            <img src={m} />
          </Link>
        </h3>
      )
    }
    return (
      <main>
        <header>
          <div className="wrapper cf">
            {header}
            <Link className="about" to={prefixLink('/about/')}>
              ?
            </Link>
          </div>
        </header>
        <div className="wrapper content cf">
          {children}
        </div>
      </main>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
