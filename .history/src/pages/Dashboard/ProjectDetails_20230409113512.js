import React, { useEffect, useState } from "react"
import { loginUser } from "../../Redux/Slices/userSlice";
import { useStore1Selector } from 'index';
import useFetch from './../../hooks/useFecth';
import { Col, Container, Row } from "reactstrap";
import Breadcrumb from "../../components/Common/Breadcrumb";
import MetaTag from "../../components/MetaTag";
import DetailsBox from "./components/DetailBox";
import { ProjectDetailsPage } from "components/SCO_Name";
import { DashboardPageDefault, ProjectDetialsPage } from "components/BreadCrum";
import { Link, useParams } from 'react-router-dom';
import Loading from "components/Loading";
import { BsArrowLeft } from "react-icons/bs";
import ModalComp from "Modal";
import PDFForm from "./components/PDFForm";


const Dashboard = () => {

    const { id } = useParams()
    const [openModal, setOpenModal] = useState(false);
    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const [document, setDocument] = useState()
    const { data, loading, length, error, reFetch } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/projects/${id}`, token);

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`${process.env.REACT_APP_BACKEND_URL}/documents/${id}`, requestOptions)
            .then(response => response.json())
            .then(result => setDocument(result))
            .catch(error => console.log('error', error));
    }, [id])

    console.log(document?.data?.data)

    return (
        <React.Fragment>
            <div className="page-content m-5">
                <Breadcrumb default={DashboardPageDefault} title={ProjectDetialsPage} />
                <MetaTag title_sco={ProjectDetailsPage} />

                <Container fluid>
                    <Link to="/dashboard"> <BsArrowLeft /> Back </Link>

                    <div className="text-end">
                        <button className="btn add__btn mb-4 text-white" onClick={() => setOpenModal(true)}> Add a PDF </button>
                    </div>

                    {loading ? <Loading /> : <DetailsBox data={data} />}


                    <div>
                        <h2>Documents</h2>
                        {document?.data?.data.map((document, index) => (
                            <div key={index}>
                                {/* <embed src={`path/to/documents/${document}`} type="application/pdf" width="600" height="800" /> */}
                                <embed src={`${process.env.REACT_APP_IMG_API}docs/projects/${document}`} type="application/pdf" width="50" height="50" />
                            </div>
                        ))}
                    </div>

                </Container>
            </div>

            <ModalComp
                ModalTitle="Upload PDF"
                open={openModal}
                onClose={() => setOpenModal(false)}
                cancel="close"
                Component={<PDFForm onClose={() => setOpenModal(false)} reFetch={reFetch} projectId={id} />}
            />
        </React.Fragment>
    )
}

export default Dashboard