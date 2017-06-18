import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
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
      <div class="">
        <Helmet
          title={config.blogTitle}
          meta={[
            {"name": "description", "content": "Sample blog"},
            {"name": "keywords", "content": "blog, articles"},
          ]}
        />
        <h2>Designer & Developer</h2>
        <hr/>
        <section>
          {visiblePages.map((page) => (
              <article
                key={page.path}
              >
                <Link to={prefixLink(page.path)}>
                    {get(page, 'data.title', page.path)}
                </Link>
                <Link to={prefixLink(page.path)}>
                  <img src={`/images/${get(page, 'data.img', page.img)}`} alt=""/>
                </Link>
              </article>
          ))}
        </section>
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex
