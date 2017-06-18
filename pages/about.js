import React from 'react'
import get from 'lodash/get'
import Helmet from "react-helmet"
import { config } from 'config'

class BlogAbout extends React.Component {
  render () {
    return (
      <div class="">
        <Helmet
          title={`About ${config.blogTitle}`}
          meta={[
            {"name": "description", "content": "Maxim Siebert is a designer that enjoys building the things he designs. He solves problems with digital products by helping teams with product management, copywriting, product design and front-end development."},
            {"name": "keywords", "content": "blog, articles"},
          ]}
        />
        <h1>{config.blogTitle}</h1>
        <hr/>
        <h4>O hi, Ive been expecting your face. I’m a designer that enjoys building the things I design. I help teams solve problems with digital products.</h4>
      </div>
    )
  }
}

BlogAbout.propTypes = {
  route: React.PropTypes.object,
}

export default BlogAbout
