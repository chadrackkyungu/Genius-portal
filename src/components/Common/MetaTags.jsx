import PropTypes from "prop-types"
import React from "react"
import MetaTags from 'react-meta-tags';

import { withRouter } from "react-router-dom"
import { withTranslation } from "react-i18next"

const MetaTagsComp = props => {

  return (
    <React.Fragment>
      <MetaTags>
        <title>  {props.t(props.meta_tags)} </title>
      </MetaTags>
    </React.Fragment>
  )
}

MetaTagsComp.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(MetaTagsComp))