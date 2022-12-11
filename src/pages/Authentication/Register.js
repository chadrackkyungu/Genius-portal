import React from "react"
import "./Style.scss";
import { Row } from "reactstrap";
import { Link } from "react-router-dom";
import { AvForm } from "availity-reactstrap-validation"
import FormInput1 from "./components/FormInput1";
import FormInput2 from "./components/FormInput2";
import FormInput3 from "./components/FormInput3";
import MetaTagComp from "components/MetaTag";
import { RegisterPage } from "components/SCO_Name";
import LoginRightLabel from "./components/LoginRightLabel";
import FromWraper from "./components/FromWraper";
import usePost from "hooks/usePost";
import CustomBtn from "components/CustomBtn";
import { RegisterMsg } from "components/NotifyMessage";

const Register = () => {

  const [photoPassport, setPhotoPassport] = React.useState(null);
  const { execute, pending, data } = usePost()

  const handleValidSubmit = (e, values) => {
    e.preventDefault();
    const Method = 'POST', endPoint = 'users/signUp', isJSON = true, token = null;

    const formdata = new FormData();
    formdata.append("firstName", values.firstName);
    formdata.append("lastName", values.lastName);
    formdata.append("phoneNumber", values.phoneNumber);
    formdata.append("gender", values.gender);
    formdata.append("email", values.email);
    formdata.append("address", values.address);
    formdata.append("areaCode", values.areaCode);
    formdata.append("companyName", values.companyName);
    formdata.append("jobTitle", values.jobTitle);
    formdata.append("province", values.province);
    formdata.append("city", values.city);
    formdata.append("postalCode", values.postalCode);
    formdata.append("referralCode", values.referralCode);
    formdata.append("accountNumber", values.accountNumber);
    formdata.append("bankName", values.bankName);
    formdata.append("accountType", values.accountType);
    formdata.append("agreed", values.agreed[0]);
    formdata.append("blackListed", values.blackListed[0]);
    formdata.append("passportPhoto", photoPassport);
    formdata.append("password", values.password);
    formdata.append("passwordConfirm", values.passwordConfirm);
    execute(endPoint, formdata, Method, RegisterMsg, token, isJSON)
  }

  return (
    <React.Fragment>
      <MetaTagComp title_sco={RegisterPage} />

      <Row className="">
        {/* <LoginRightLabel text="" size={4} /> */}
        {
          data?.status === 'success' ?
            (<FromWraper>
              <p className="text-primary">  We sent you a link to your mailbox, verify your email to continue </p>
              You did not received it ? <Link onClick={() => location.reload()} className='text-primary'> Try again </Link>
            </FromWraper>)
            :
            (<FromWraper title="SignUp" size={12} >
              <AvForm className="mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
                <FormInput1 />
                <FormInput3 />
                <FormInput2 setPhotoPassport={setPhotoPassport} />

                <CustomBtn Pending={pending} btnName="Submit" />
              </AvForm>

              <div className="col-12 mt-5">
                Already have an account ? <Link to="/login" className='text-primary'> Login </Link>
              </div>
            </FromWraper>)
        }
      </Row>

    </React.Fragment>
  )
}

export default Register