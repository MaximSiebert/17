import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { prune, include as includes } from 'underscore.string'
import find from 'lodash/find'

class ReadNext extends React.Component {
  render () {
    const { pages, post } = this.props
    const { readNext } = post
    let nextPost
    if (readNext) {
      nextPost = find(pages, (page) =>
        includes(page.path, readNext)
      )
    }
    if (!nextPost) {
      return (
        <section className="link ba outline outline-mobile mv4">
          <Link className="justify-center tc next-project db flex items-center pa5-l pa4-ns pa3 black link hover-bg-white" to="mailto:maxim.siebert@gmail.com" target="_blank">
            <h3 className="f3-ns f5 mb0 lh-title">
              Let's work together
              <div className="mt4-l mt3-ns mt2 f-subheadline-l f1-ns f3 sans-serif-heading lh-title">maxim.siebert@gmail.com</div>
            </h3>
          </Link>
        </section>
      )
    } else {
      nextPost = find(pages, (page) =>
        includes(page.path, readNext.slice(1, -1))
      )
      // Create pruned version of the body.
      const html = nextPost.data.body
      const body = prune(html.replace(/<[^>]*>/g, ''), 200)

      return (
        <section className="link ba outline outline-mobile tc mv4">
          <Link className="justify-center next-project db flex-ns items-center pa5-ns pa3 black link hover-bg-white"
            to={{
              pathname: prefixLink(nextPost.path),
              query: {
                readNext: true,
              },
            }}
          >
            <h3 className="f2-ns f3 mb0-ns mb3 mr4-ns lh-title tl-l tc">
              <span className="dib v-mid mb0-l mb3-ns mb1">Up next <span className="dib-ns dn">→</span></span>
              <span className="dib-l db v-mid f1-ns f2 ml4-l sans-serif-heading"> { nextPost.data.title }</span>
            </h3>
            <img className="ba mw5-ns flex-grow" src={`/images/${ nextPost.data.imgHeader }`} alt=""/>
          </Link>
        </section>
      )
    }
  }
}

ReadNext.propTypes = {
  post: React.PropTypes.object.isRequired,
  pages: React.PropTypes.array
}

export default ReadNext
