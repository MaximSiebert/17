import React from 'react'

const pageTitle = props => {
  const { children, type } = props;
  const classList = "fade mb4 f3-ns f4 pl0-l ml0-l pl3 ml4 serif"
  return type === 'h2'
    ? <h2 className={ classList }>{ children }</h2>
    : <h1 className={ classList }>{ children }</h1>
}

export default pageTitle
