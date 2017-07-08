import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'
import Helmet from "react-helmet"
import ReadNext from '../components/ReadNext'
import PageTitle from '../components/page-title'
import { config } from 'config'
import Bio from 'components/bio'

class MarkdownWrapper extends React.Component {
  render () {
    const { route } = this.props
    const post = route.page.data

    const imgHeader = { backgroundImage: `url(${post.imgHeader})` }

    return (
      <div className="markdown">
        <Helmet
          title={`${post.title} | ${config.blogTitle}`}
        />
        <div className="mw9 w-80-l w-90 center cf pt4">
          <PageTitle>{post.title}</PageTitle>
          <section className="pb4-ns pb3">
            <h2 className="f-headline-l f-subheadline-ns f1 lh-title sans-serif-heading mb0-l mb2 pb3-l pb2">{post.description}</h2>
            <div className="f5-l f6 mb4-l mb3-ns mb4 lh-copy">
              <div className="project-role relative dib mb0-ns mb2">
                {post.role}
              </div>
              <div className="project-client relative dib-ns db ml4-ns">
                {post.clientLink
                  ?  <Link className="link black" to={post.clientLink} target="_blank">{post.client}</Link>
                  :  post.client
                }
              </div>
            </div>
            <div className="flex-ns items-center">
              <a className="db-ns dib nowrap f5 link project-link bg-black white ph4 pv3 hover-bg-white hover-black ba b--black mr4 mb0-ns mb3" href={post.link} target="_blank">Visit <span>↗</span></a>
              <p className="f3-l f4 flex-grow lh-copy w-100">{post.specifics}</p>
            </div>
          </section>
          <div className="cf markdown-content" dangerouslySetInnerHTML={{ __html: post.body }} />
          <ReadNext post={post} pages={route.pages} />
        </div>
      </div>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper
