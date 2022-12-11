import React from "react"
import { Row } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import usePost from 'hooks/usePost';
import { ForgotPasswordMsg } from 'components/NotifyMessage';
import MetaTagComp from "components/MetaTag";
import CustomBtn from "components/CustomBtn";
import { ForgotPage } from "components/SCO_Name";
import LoginRightLabel from "./components/LoginRightLabel";
import FromWraper from "./components/FromWraper";
import { Link } from "react-router-dom";

const ForgetPasswordPage = () => {
  const { execute, pending, data } = usePost()

  const handleValidSubmit = (e, values) => {
    e.preventDefault();
    const Method = 'POST', endPoint = 'users/forgotPassword';
    const raw = JSON.stringify({
      "email": values.email
    });
    execute(endPoint, raw, Method, ForgotPasswordMsg)
  }

  return (
    <React.Fragment>
      <MetaTagComp title_sco={ForgotPage} />

      <Row className="Container_h">
        <LoginRightLabel text="" />
        {
          data?.status === 'success' ? <FromWraper>
            <h5 className="text-primary">We sent you the link to reset your password via your email </h5>
            <div className="col-12 mt-5">
              If you did not receive it ? <Link onClick={() => location.reload()} className='text-primary'> Try again </Link>
            </div>
          </FromWraper> :
            <FromWraper title="Forgot password">
              <AvForm className="form-horizontal mt-4" onValidSubmit={(e, v) => handleValidSubmit(e, v)}>
                <div className="mb-3">
                  <AvField name="email" label="Email" className="form-control" placeholder="Enter email"
                    type="email"
                    required
                  />
                </div>
                <CustomBtn Pending={pending} btnName="Submit" />
              </AvForm>
            </FromWraper>
        }
      </Row>
    </React.Fragment>
  )
}

export default ForgetPasswordPage

