import React, { useState, useEffect } from "react"
import PropTypes from 'prop-types'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import { withTranslation } from "react-i18next"
import { connect } from "react-redux"
import { withRouter, Link } from "react-router-dom"
import user1 from "../../../assets/images/users/user-4.jpg"
import { useStore1Selector, useStore1Dispatch } from "./../../../index";
import { loginUser, Login } from "../../../Redux/Slices/userSlice";

const ProfileMenu = props => {
  const [menu, setMenu] = useState(false)
  const userDet = useStore1Selector(loginUser)

  console.log(userDet?.data?.data?.photo)

  const profileImg = userDet?.original?.userDetails?.ProfilePicture
  const Image = profileImg === "undefined" ? " " : profileImg?.split("/")

  return (
    <React.Fragment>
      <Dropdown isOpen={menu} toggle={() => setMenu(!menu)} className="d-inline-block">
        <DropdownToggle className="btn header-item waves-effect profile__btn" id="page-header-user-dropdown" tag="button">
          <img
            className="rounded-circle header-profile-user"
            src={!Image ? user1 : `${process.env.REACT_APP_IMG_API}img/users/${Image[1]}`}
            alt="Header Avatar"
          />
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">

          <Link to="/my-profile">
            <DropdownItem tag="a">
              <i className="bx bx-user font-size-16 align-middle me-1" />
              {props.t("Profile")}
            </DropdownItem>
          </Link>

          <div className="dropdown-divider" />

          <Link to="/login" className="dropdown-item">
            <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
            <span>{props.t("Logout")}</span>
          </Link>

        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  )
}

ProfileMenu.propTypes = {
  success: PropTypes.any,
  t: PropTypes.any
}

const mapStatetoProps = state => {
  const { error, success } = state.Profile
  return { error, success }
}

export default withRouter(
  connect(mapStatetoProps, {})(withTranslation()(ProfileMenu))
)
