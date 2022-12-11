import React from "react"
// import "../Styles.scss";
// import "../Style.scss";
import { Row } from "reactstrap"
import { Link, useParams } from "react-router-dom"
import MetaTagComp from 'components/MetaTag';
import { VerifyEmailPage } from 'components/SCO_Name';
import CustomBtn from 'components/CustomBtn';
import usePost from 'hooks/usePost';
import LoginRightLabel from './components/LoginRightLabel';
import FromWraper from './components/FromWraper';
import { verifyMsg } from 'components/NotifyMessage';
import { LoginRoute } from "components/RouteName";

const VerifiedEmail = () => {

    const { userId, token } = useParams()
    const { execute, pending, data } = usePost()

    const verifyFunc = () => {
        const Method = 'POST', endPoint = `users/verify/${userId}/${token}`;
        const raw = "";
        execute(endPoint, raw, Method, verifyMsg)
    }

    return (
        <React.Fragment>
            <MetaTagComp title_sco={VerifyEmailPage} />
            <Row>
                <LoginRightLabel text="Verify your email" />
                {
                    data?.status === 'success' ?
                        <FromWraper>
                            <h5 className="text-primary">Thank you 🙏, for registering with us 🤝 </h5>
                            <div className="col-12 mt-5">
                                Go to <Link to={LoginRoute} className='text-primary'> Login </Link>
                            </div>
                        </FromWraper> :
                        <FromWraper>
                            <p className="text-dark mt-5 mb-4 m-5 text-center"> Click on the button below to verify your email </p>
                            <div className=" text-center p-3">
                                <CustomBtn Pending={pending} btnName="Verify your email" onClick={verifyFunc} />
                            </div>
                        </FromWraper>
                }
            </Row>
        </React.Fragment>
    )
}

export default VerifiedEmail
