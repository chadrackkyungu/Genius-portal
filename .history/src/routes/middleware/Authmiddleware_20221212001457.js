import React from "react"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom"
import { useStore1Selector } from "./../../index";
import { loginUser } from "../../Redux/Slices/userSlice";

const Authmiddleware = ({ component: Component, layout: Layout, isAuthProtected, ...rest }) => {

  const userDet = useStore1Selector(loginUser)
  const user = userDet?.status === 'success' ? true : false

  return (
    <Route {...rest}
      render={props => {
        if (isAuthProtected && user) {
          return (
            <Layout>
              <Component {...props} />
            </Layout>
          )
        } else {
          return (
            <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
          )
        }

      }}
    />
  )
}

Authmiddleware.propTypes = {
  isAuthProtected: PropTypes.bool,
  component: PropTypes.any,
  location: PropTypes.object,
  layout: PropTypes.any,
}

export default Authmiddleware
