import React from "react"
import { Row } from "reactstrap"
import { AvForm } from "availity-reactstrap-validation"
import { useHistory, Link } from "react-router-dom"
import LoginForm from "./components/LoginForm";
import { LoginMsg } from "../../components/NotifyMessage"
import { useStore1Dispatch } from "../../index";
import { Login } from "../../Redux/Slices/userSlice";
import MetaTagComp from 'components/MetaTag';
import usePost from "hooks/usePost"
import CustomBtn from "../../components/CustomBtn"
import { LoginPage } from "../../components/SCO_Name"
import { DashboardRoute, RegisterRoute } from "../../components/RouteName"
import LoginRightLabel from "./components/LoginRightLabel";
import FromWraper from "./components/FromWraper";


const LoginComp = () => {
  const history = useHistory()
  const dispatch = useStore1Dispatch();
  const { execute, pending, data } = usePost()

  const handleValidSubmit = (e, values) => {
    e.preventDefault();
    const Method = 'POST', endPoint = 'users/login';
    const raw = JSON.stringify({
      "email": values.email,
      "password": values.password
    });
    execute(endPoint, raw, Method, LoginMsg)
  }

  if (data) {
    dispatch(Login(data));
    if (data?.data?.role === 'user') {
      window.setTimeout(() => {
        history.push(DashboardRoute);
      }, 2000);
    }
    if (data?.data?.role === 'admin') {
      window.setTimeout(() => {
        history.push(DashboardRoute);
      }, 2000);
    }
  }

  return (
    <React.Fragment>
      <MetaTagComp title_sco={LoginPage} />
      <Row className="Container_h">
        <LoginRightLabel text="" />

        <FromWraper title="Login">
          <AvForm className="form-horizontal mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
            <LoginForm />
            <CustomBtn Pending={pending} btnName="Submit" />
            {/* <div className="col-12 mt-5">
              You don't have an account ? <Link to={RegisterRoute} className='text-primary'> Register </Link>
            </div> */}
          </AvForm>
        </FromWraper>
      </Row>
    </React.Fragment>
  )
}

export default LoginComp
