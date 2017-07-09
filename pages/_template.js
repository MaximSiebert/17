import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import m from '../components/m.svg'
import mWhite from '../components/m-white.svg'

import '../css/tachyons.css'
import '../css/global.css'

class Template extends React.Component {
  render () {
    const { location, children } = this.props
    let header
    if (location.pathname === prefixLink('/')) {
      header = (
        <div className="mw9 w-80-l w-90 relative center cf">
          <h1 className="logo absolute">
            <Link to={ prefixLink('/') }>
              <img src={ m } alt={ config.blogTitle }/>
              <span className="visually-hidden">{ config.blogTitle }</span>
            </Link>
          </h1>
          <Link className="about-link absolute outline link black hover-bg-white" to={ prefixLink('/about/') }>
            <span>i</span>
          </Link>
        </div>
      )
    } else {
      header = (
        <div className="mw9 w-80-l w-90 relative center">
          <h3 className="logo absolute">
            <Link to={ prefixLink('/') }>
              <img src={ m } alt={ config.blogTitle }/>
              <span className="visually-hidden">{ config.blogTitle }</span>
            </Link>
          </h3>
          <Link className="about-link close absolute outline link black hover-bg-white" to={prefixLink('/')}>
            <span>✕</span>
          </Link>
        </div>
      )
    }
    return (
      <main>
        <header className="fixed w-100 pt4 fade-down z-2">
          { header }
        </header>
        <div className="fade-in">
          { children }
        </div>
        <footer className="bg-black white pv5-ns pv4">
          <div className="mw9 w-80-l w-90 relative center flex flex-wrap-sm">
            <div className="footer-logo absolute-l mr4 mb0-ns mb4">
              <img src={ mWhite } alt={ config.blogTitle }/>
            </div>
            <div className="flex-grow mb0-ns mb4">
              <div className="mw7-l mw6">
                <p className="f2-l f3 mt0 mb3 lh-title-l lh-copy mono">Have a project or an idea you’d like to collaborate on? Let’s chat!</p>
                <Link className="f5-l f6 link gray hover-white" to="mailto:maxim.siebert@gmail.com"  target="_blank">maxim.siebert@gmail.com</Link>
              </div>
            </div>
            <ul className="tr-ns mt3-l mt2-ns f5-l f6 w-auto-ns w-100">
              <li className="mb1 pb2">
                <Link className="link gray hover-white" to="mailto:maxim.siebert@gmail.com" target="_blank">Email</Link>
              </li>
              <li className="mb1 pb2">
                <Link className="link gray hover-white" to="https://www.linkedin.com/in/maximsiebert/?ppe=1" target="_blank">Resumé</Link>
              </li>
              <li className="mb1 pb2">
                <Link className="link gray hover-white" to="https://twitter.com/maximsiebert" target="_blank">Twitter</Link>
              </li>
              <li className="mb1 pb2">
                <Link className="link gray hover-white" to="https://dribbble.com/maximsiebert" target="_blank">Dribbble</Link>
              </li>
            </ul>
          </div>
        </footer>
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
