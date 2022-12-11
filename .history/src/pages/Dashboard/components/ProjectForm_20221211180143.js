import React from 'react'
import { Row, Col, CardBody, Card, Button } from 'reactstrap';
import { AvForm, AvField } from "availity-reactstrap-validation"
import { FcAddImage } from 'react-icons/fc';
import usePost from 'hooks/usePost';
import { useStore1Selector } from 'index';
import { loginUser } from 'Redux/Slices/userSlice';
import { ApplyLongMsg } from 'components/NotifyMessage';
import CustomBtn from 'components/CustomBtn';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 22, 23, 24, 25, 26, 27, 28]

function ProjectForm({ onClose, reFetch }) {

    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const userId = userDet?.data?.data?._id;
    const { execute, pending, data } = usePost()



    const refFileUploadPaySleep = React.useRef(null);
    const refFileUploadBankStatement = React.useRef(null);
    const [paySleepServer, setPaySleepServer] = React.useState();
    const [paySleep, setPaySleep] = React.useState();
    const [bankStatementServer, setBankStatementServer] = React.useState();
    const [bankStatement, setBankStatement] = React.useState();

    const onThumbChangeClickPaySleep = () => {
        if (refFileUploadPaySleep) {
            refFileUploadPaySleep.current.dispatchEvent(new MouseEvent('click'));
        }
    };

    const onThumbChangeClickBankStatement = () => {
        if (refFileUploadBankStatement) {
            refFileUploadBankStatement.current.dispatchEvent(new MouseEvent('click'));
        }
    };

    const changeThumbPaySleep = (event) => {
        if (event.target.files && event.target.files[0]) {
            setPaySleepServer(event.target.files[0]);

            const reader = new FileReader();
            reader.onload = (loadEvent) => {
                setPaySleep(loadEvent.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    const changeThumbBankStatement = (event) => {
        if (event.target.files && event.target.files[0]) {
            setBankStatementServer(event.target.files[0]);

            const reader = new FileReader();
            reader.onload = (loadEvent) => {
                setBankStatement(loadEvent.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    const onChangeDate = ({ target }) => {
        const newDate = moment(target.value.timeStamp).format('YYYY-MM-DD');
        setPaymentDate(newDate);
    };

    const handleValidSubmit = (e, v) => {
        const Method = 'POST', endPoint = 'projects', isJSON = true;
        const formdata = new FormData();
        formdata.append("projectName", "Name");
        formdata.append("description", "description");
        formdata.append("projectLengthDays", "11");
        formdata.append("projectLengthWeeks", "3");
        formdata.append("projectLengthMonths", "3");
        formdata.append("imageCover", fileInput.files[0], "/D:/MY PIC/Camera/IMG_20191218_201914.jpg");
        formdata.append("images", fileInput.files[0], "/D:/MY PIC/Camera/IMG_20191218_201842.jpg");
        formdata.append("images", fileInput.files[0], "/D:/MY PIC/Camera/IMG_20191229_190019.jpg");
        formdata.append("images", fileInput.files[0], "/D:/MY PIC/Camera/IMG_20191218_202242.jpg");
        execute(endPoint, raw, Method, ApplyLongMsg, token, isJSON)
    }

    // if (data?.status === 'success') {
    //     onClose()
    //     setTimeout(() => {
    //         reFetch()
    //     }, 2000)
    // }

    return (
        <>
            <Row>

                <Col md={6}>
                    <label>Upload your latest payslip</label>
                    <div className="d-flex justify-content-center align-items-center border">
                        <img src={paySleep === undefined ? Image : paySleep} alt="Payslip" width={350} height={200} />
                        <Button className="btn-icon btn-icon-only position-absolute"
                            onClick={onThumbChangeClickPaySleep}
                        > <FcAddImage size={40} />
                        </Button>
                        <input type="file" ref={refFileUploadPaySleep} className="file-upload d-none" accept="image/*" onChange={changeThumbPaySleep} />
                    </div>
                </Col>

                <Col md={6}>
                    <label>Upload your bank statement</label>
                    <div className="d-flex justify-content-center align-items-center border">
                        <img src={bankStatement === undefined ? Image : bankStatement} alt="Bank Statement" width={350} height={200} />
                        <Button className="btn-icon btn-icon-only position-absolute"
                            onClick={onThumbChangeClickBankStatement}
                        > <FcAddImage size={40} />
                        </Button>
                        <input type="file" ref={refFileUploadBankStatement} className="file-upload d-none" accept="image/*" onChange={changeThumbBankStatement} />
                    </div>
                </Col>
                <AvForm className="form-horizontal mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
                    <div className="mb-3">
                        <AvField placeholder="Enter project name" name="projectName" label="Project Name" className="form-control" type="text" required />
                    </div>

                    <Row>
                        <Col md={4}>
                            <div className="mb-3">
                                <AvField name="days" label="Number of days" className="form-control" type="select">
                                    <option>Select...</option>
                                    {numbers.map((n, i) => <option key={i}>{n}</option>)}
                                </AvField>
                            </div>
                        </Col>
                        <div className="mb-3">
                            <AvField name="weeks" label="Number of weeks" className="form-control" type="select">
                                <option>Select...</option>
                                {numbers.map((n, i) => <option key={i}>{n}</option>)}
                            </AvField>
                        </div>
                        <div className="mb-3">
                            <AvField name="months" label="Number of months" className="form-control" type="select">
                                <option>Select...</option>
                                {numbers.map((n, i) => <option key={i}>{n}</option>)}
                            </AvField>
                        </div>
                        <div className="mb-3">
                            <AvField name="description" label="Description" className="form-control" type="textarea">
                            </AvField>
                        </div>
                    </Row>
                    <CustomBtn Pending={pending} btnName="Submit" />
                </AvForm>
            </Row>
        </>
    )
}

export default ProjectForm