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
const MAX_COUNT = 5;

function ProjectForm({ onClose, reFetch }) {

    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const userId = userDet?.data?.data?._id;
    const { execute, pending, data } = usePost()

    const refFileUploadImageCover = React.useRef(null);
    const [imageCoverServer, setImageCoverServer] = React.useState();
    const [imageCover, setImageCover] = React.useState();

    const onThumbChangeClickImageCover = () => {
        if (refFileUploadImageCover) {
            refFileUploadImageCover.current.dispatchEvent(new MouseEvent('click'));
        }
    };
    const changeThumbImageCover = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImageCoverServer(event.target.files[0]);

            const reader = new FileReader();
            reader.onload = (loadEvent) => {
                setImageCover(loadEvent.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    const [uploadFiles, setUploadFiles] = useState([])
    const [fileLimit, setFileLimit] = useState(false)

    const handleUploadFiles = files => {
        const uploaded = [...uploadFiles];
        let limitExceeded = false;
        files.some((file) => {
            if (uploaded.findIndex((f) => f.name === file.name) === -1) {
                uploaded.push(file);
                if (uploaded.length === MAX_COUNT) setFileLimit(true);
                if (uploaded.length > MAX_COUNT) {
                    alert(`You can only add a maximum of ${MAX_COUNT} files`);
                    setFileLimit(false);
                    limitExceeded = true;
                    return true
                }
            }
        })
        if (!limitExceeded) setUploadFiles(uploaded)
    }
    const handleFileEvent = e => {
        const chosenFiles = Array.prototype.slice.call(e.target.files)
        handleUploadFiles(chosenFiles)
    }

    const handleValidSubmit = (e, v) => {
        const Method = 'POST', endPoint = 'projects', isJSON = true;
        const formdata = new FormData();
        formdata.append("projectName", v.projectName);
        formdata.append("description", v.description);
        formdata.append("projectLengthDays", v.projectLengthDays);
        formdata.append("projectLengthWeeks", v.projectLengthWeeks);
        formdata.append("projectLengthMonths", v.projectLengthMonths);
        formdata.append("imageCover", imageCoverServer);
        formdata.append("images", fileInput.files[0], "/D:/MY PIC/Camera/IMG_20191218_201842.jpg");
        formdata.append("images", fileInput.files[0], "/D:/MY PIC/Camera/IMG_20191229_190019.jpg");
        formdata.append("images", fileInput.files[0], "/D:/MY PIC/Camera/IMG_20191218_202242.jpg");
        execute(endPoint, formdata, Method, ApplyLongMsg, token, isJSON)
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
                    <label>Image cover</label>
                    <div className="d-flex justify-content-center align-items-center border">
                        <img src={imageCover === undefined ? Image : imageCover} alt="Payslip" width={350} height={200} />
                        <Button className="btn-icon btn-icon-only position-absolute"
                            onClick={onThumbChangeClickImageCover}
                        > <FcAddImage size={40} />
                        </Button>
                        <input type="file" ref={refFileUploadImageCover} className="file-upload d-none" accept="image/*" onChange={changeThumbImageCover} />
                    </div>
                </Col>

                <Col md={6}>
                    <input type="file" multiple accept="application/pdf, image/png" onChange={handleFileEvent} />
                </Col>

                <AvForm className="form-horizontal mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
                    <div className="mb-3">
                        <AvField placeholder="Enter project name" name="projectName" label="Project Name" className="form-control" type="text" required />
                    </div>

                    <Row>
                        <Col md={4}>
                            <div className="mb-3">
                                <AvField name="days" label="Number of days" className="form-control" type="select" required>
                                    <option>Select...</option>
                                    {numbers.map((n, i) => <option key={i}>{n}</option>)}
                                </AvField>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="mb-3">
                                <AvField name="weeks" label="Number of weeks(optional)" className="form-control" type="select">
                                    <option>Select...</option>
                                    {numbers.map((n, i) => <option key={i}>{n}</option>)}
                                </AvField>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="mb-3">
                                <AvField name="months" label="Number of months(optional)" className="form-control" type="select">
                                    <option>Select...</option>
                                    {numbers.map((n, i) => <option key={i}>{n}</option>)}
                                </AvField>
                            </div>
                        </Col>
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