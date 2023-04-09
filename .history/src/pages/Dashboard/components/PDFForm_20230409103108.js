import React, { useState, useRef } from 'react'
import { Row, Col, Button } from 'reactstrap';
import { AvForm, AvField } from "availity-reactstrap-validation"
import { FcAddImage } from 'react-icons/fc';
import usePost from 'hooks/usePost';
import { useStore1Selector } from 'index';
import { loginUser } from 'Redux/Slices/userSlice';
import { AddProjectMsg } from 'components/NotifyMessage';
import CustomBtn from 'components/CustomBtn';

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 22, 23, 24, 25, 26, 27, 28]
const MAX_COUNT = 20;

function PDFForm({ onClose, reFetch }) {

    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const { execute, pending, data } = usePost()
    const refFileUploadImageCover = useRef(null);
    const [imageCoverServer, setImageCoverServer] = useState();
    const [imageCover, setImageCover] = useState();
    const [uploadFiles, setUploadFiles] = useState([])
    const [fileLimit, setFileLimit] = useState(false)

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
        formdata.append("projectLengthDays", v.days);
        formdata.append("projectLengthWeeks", v.weeks);
        formdata.append("projectLengthMonths", v.months);
        formdata.append("imageCover", imageCoverServer);
        uploadFiles.forEach((file) => formdata.append("images", file))
        execute(endPoint, formdata, Method, AddProjectMsg, token, isJSON)
    }

    if (data?.status === 'success') {
        onClose()
        setTimeout(() => {
            reFetch()
        }, 2000)
    }

    return (
        <>
            <Row>
                <Col md={12}>
                    <label className="mt-5">Upload maximum 3 images</label>
                    <input type="file" className="form-control" multiple accept="image/png, image/jpeg, image/jpg" onChange={handleFileEvent} />
                </Col>

                <AvForm className="form-horizontal mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
                    <div className="mb-3">
                        <AvField placeholder="Enter project name" name="projectName" label="Project Name" className="form-control" type="text" required />
                    </div>

                    <CustomBtn Pending={pending} btnName="Submit" />
                </AvForm>
            </Row>
        </>
    )
}

export default PDFForm