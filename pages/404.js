import React from 'react'
import { Link } from 'react-router'
import awkward from '../components/awkward.gif'
import get from 'lodash/get'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'

class NotFound extends React.Component {
  render () {
    return (
      <section>
        <div className="mw9 w-80-l w-90 center cf pt4">
          <Helmet
            title={`About ${ config.blogTitle }`}
            meta={[
              {"name": "description", "content": "Maxim Siebert is a designer that enjoys building the things he designs. He solves problems with digital products by helping teams with product management, copywriting, product design and front-end development."},
              {"name": "keywords", "content": "blog, articles"},
            ]}
          />
          <h1 className="fade mb4 f4 pl0-l ml0-l pl3 ml4">Page not found</h1>
        </div>
        <hr/>
        <div className="mw9 w-80-l w-90 center cf">
          <section className="pv5 flex flex-wrap-sm items-center">
            <div className="pr5-l pr4-ns w-50-ns w-100 mb0-ns mb4">
              <h2 className="f-subheadline-l f2 sans-serif-heading lh-title mb4">Awwwkward, this page doesn't exist.</h2>
              <Link className="f5 link project-link dib v-mid bg-black white ph4 pv3 hover-bg-white hover-black ba b--black mr4" to={ prefixLink('/') }>Go home</Link>
            </div>
            <div className="flex-grow">
              <img src={ awkward } alt=""/>
            </div>
          </section>
        </div>
      </section>
    )
  }
}

NotFound.propTypes = {
  route: React.PropTypes.object,
}

export default NotFound
