import React from 'react'
import { Link } from 'react-router'
import hai from '../components/hai-2.gif'
import maxim from '../components/maxim.jpg'
import PageTitle from '../components/page-title'
import get from 'lodash/get'
import Helmet from "react-helmet"
import { config } from 'config'

class BlogAbout extends React.Component {
  render () {

    const maximPic = { backgroundImage: `url(${maxim})` }

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
          <PageTitle>{ config.blogTitle }</PageTitle>
          <section className="pb4">
            <h2 className="f-subheadline-l f1-ns f2 sans-serif-heading lh-title mb4-l mt4-l">Oh hai there <img className="dib mw4-l mw3 bear ba" src={ hai } alt=""/>, I&#8217;m a product designer who helps teams with product management, copywriting and front-end development.</h2>
            <div className="flex flex-wrap lh-copy mb4-l mb3-ns">
              <div className="w-50-l w-100 mt2 mb0-l mb3-ns pr5-l flex">
                <div className="w-100 vh-50-sm cover bg-center ba" style={ maximPic }></div>
              </div>
              <div className="w-50-l w-100 pr4 mt4">
                <p className="mt0 f3-ns f4">I turn sketches and wireframes into prototypes in order to test and iterate based on data and insight gained from users.</p>
                <p className="mt0 mb4 f3-ns f4">I care about accessibility, performance, reusibility, mobile-first, details details details and being honest and respectful while having fun.</p>
                <div className="flex flex-wrap">
                  <div className="w-50 mb4">
                    <p className="sans-serif-heading mb2 mt0 f3-ns f4 ttu">Experience</p>
                    <ul className="f5">
                      <li className="mb1">
                        <Link className="link gray hover-black" to="http://normative.com/" target="_blank">Normative</Link>
                      </li>
                      <li className="mb1">
                        <Link className="link gray hover-black" to="https://postlight.com/" target="_blank">Postlight</Link>
                      </li>
                      <li className="mb1">
                        <Link className="link gray hover-black" to="https://www.shopify.ca/" target="_blank">Shopify</Link>
                      </li>
                      <li className="mb1">
                        <Link className="link gray hover-black" to="https://res.im/" target="_blank">ResIM</Link>
                      </li>
                      <li className="mb1">
                        <Link className="link gray hover-black" to="http://arcane.ws/" target="_blank">Arcane</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="w-50 mb4">
                    <p className="sans-serif-heading mb2 mt0 f3-ns f4 ttu">Collaborators</p>
                    <ul className="f5">
                      <li className="mb1">
                        <Link className="link gray hover-black" to="https://oak.is/" target="_blank">Oak</Link>
                      </li>
                      <li className="mb1">
                        <Link className="link gray hover-black" to="http://studiofunction.com/" target="_blank">Studio Function</Link>
                      </li>
                      <li className="mb1">
                        <Link className="link gray hover-black" to="http://output.site/" target="_blank">Output</Link>
                      </li>
                      <li className="mb1">
                        <Link className="link gray hover-black" to="http://www.rprsnt.net/" target="_blank">Rprsnt</Link>
                      </li>
                      <li className="mb1">
                        <Link className="link gray hover-black" to="http://lemonadeny.com/" target="_blank">LemonadeNY</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="w-100 mb4 flex flex-wrap">
                    <p className="w-100 sans-serif-heading mb2 mt0 f3-ns f4 ttu">Clients</p>
                    <ul className="f5 w-50">
                      <li className="mb1 pr3">
                        <Link className="link gray hover-black" to="https://www.vice.com/" target="_blank">Vice</Link>
                      </li>
                      <li className="mb1 pr3">
                        <Link className="link gray hover-black" to="https://www.obama.org/" target="_blank">Obama Foundation</Link>
                      </li>
                      <li className="mb1 pr3">
                        <Link className="link gray hover-black" to="https://www.hioscar.com/" target="_blank">Oscar</Link>
                      </li>
                      <li className="mb1 pr3">
                        <Link className="link gray hover-black" to="http://www.canadalearningcode.ca/" target="_blank">Canada Learning Code</Link>
                      </li>
                    </ul>
                    <ul className="f5 w-50">
                      <li className="mb1">
                        <Link className="link gray hover-black" to="https://www.dropmark.com/" target="_blank">Dropmark</Link>
                      </li>
                      <li className="mb1">
                        <Link className="link gray hover-black" to="https://www.goodlifefitness.com/" target="_blank">GoodLife</Link>
                      </li>
                      <li className="mb1">
                        <Link className="link gray hover-black" to="http://www.3mcanada.ca/3M/en_CA/company-ca/?WT.mc_id=www.3mcanada.ca/3M/en_CA/Country-CA/" target="_blank">3M Canada</Link>
                      </li>
                      <li className="mb1">
                        <Link className="link gray hover-black" to="https://www.fanshawec.ca/" target="_blank">Fanshawe College</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <section className="link ba outline outline-mobile">
              <Link className="justify-center tc next-project db flex items-center pa5-l pa4-ns pa3 black link hover-bg-white" to="mailto:maxim.siebert@gmail.com"  target="_blank">
                <h3 className="f3-ns f5 mb0 lh-title">
                  Questions? Just ask
                  <div className="mt4-l mt3-ns mt2 f-subheadline-l f1-ns f3 sans-serif-heading lh-title">maxim.siebert@gmail.com</div>
                </h3>
              </Link>
            </section>
          </section>
        </div>
      </section>
    )
  }
}

BlogAbout.propTypes = {
  route: React.PropTypes.object,
}

export default BlogAbout
