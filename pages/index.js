import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import maxim from '../components/maxim-crop.jpg'
import PageTitle from '../components/page-title'
import get from 'lodash/get'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'
import include from 'underscore.string/include'

class BlogIndex extends React.Component {
  render () {
    // Sort pages.
    const sortedPages = sortBy(this.props.route.pages, 'data.date')
    // Posts are those with md extension that are not 404 pages OR have a date (meaning they're a react component post).
    const visiblePages = sortedPages.filter(page => (
      get(page, 'file.ext') === 'md' && !include(page.path, '/404') || get(page, 'data.date')
    ))

    return (
      <div className="mw9 w-80-l w-90 center cf pt4">
        <Helmet
          title={ config.blogTitle }
          meta={ [
            {"name": "description", "content": "Maxim is a product designer who helps teams with product management, copywriting and front-end development."},
            {"name": "keywords", "content": "blog, articles"},
            {"name": "theme-color", "content": "#ffffff"},
          ] }
          link={ [
            {"rel": "apple-touch-icon", "sizes": "76x76", "href": "images/apple-touch-icon.png?v=1"},
            {"rel": "icon", "type": "image/png", "sizes":"32x32", "href": "images/favicon-32x32.png?v=1"},
            {"rel": "icon", "type": "image/png", "sizes":"16x16", "href": "images/favicon-16x16.png?v=1"},
            {"rel": "manifest", "href": "images/manifest.json"},
            {"rel": "mask-icon", "href": "images/safari-pinned-tab.svg?v=1", "color": "#000000"},
          ] }
        />
        <PageTitle type="h2">Product Designer</PageTitle>
        <section>
          { visiblePages.map((page) => (
            <article className="project-list-item flex flex-wrap flex-row flex-row-reverse-l bg-white" key={ page.path }>
              <div className="w-70-l project-image relative bg-black">
                <Link to={ prefixLink(page.path) }>
                  <img className="bb br bl b--black" src={ `/images/${page.data.img}` } alt={ page.data.title }/>
                </Link>
              </div>
              <div className="project-details pa4-ns pa3 w-30-l w-100 flex flex-wrap flex-column bl bb brn-l br">
                <h3 className="sans-serif-heading f-subheadline-l f1-ns f2 mb3-ns mb2">
                  <Link className="link black project-title" to={ prefixLink(page.path) }>
                    { page.data.title }
                  </Link>
                </h3>
                <div className="project-role mw5-l f6 relative flex-grow mb0-l mb4-ns mb3 lh-copy">
                  { page.data.role }
                </div>
                <div>
                  <Link className="link dib bg-black white ph3 pv2 hover-bg-white hover-black ba b--black f5" to={ prefixLink(page.path) }>
                    Details
                  </Link>
                  { page.data.link &&
                    <Link className="project-link link dib black ph3 pv2 hover-bg-white ba b--transparent ml2 outline f5" to={page.data.link} target="_blank">
                      Visit
                      <span> ↗</span>
                    </Link>
                  }
                </div>
              </div>
            </article>
          ))}
        </section>
        <section className="about-home pv6-l pv5-ns pv4 cf flex items-center justify-center">
          <Link className="dib head-l mw4-ns mw3 shake mr5-ns mr4" to={ prefixLink('/about/') }><img src={ maxim } alt=""/></Link>
          <h4 className="w-70 f2-l f4-ns f5 mb0 lh-copy serif">
            Maxim Siebert is a product designer who doesn't take himself too seriously. He likes to laugh and keep things simple.
            <Link className="ml2 link black bb" to={ prefixLink('/about/') }>Read more about this stud</Link>.
          </h4>
        </section>
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex
