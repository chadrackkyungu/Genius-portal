import React, { useState } from "react"
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
    const { data, loading, length, error, reFetch } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/projects/${id}`, token);

    return (
        <React.Fragment>
            <div className="page-content m-5">
                <Breadcrumb default={DashboardPageDefault} title={ProjectDetialsPage} />
                <MetaTag title_sco={ProjectDetailsPage} />

                <Container fluid>
                    <Link to="/dashboard"> <BsArrowLeft /> Back </Link>
                    {loading ? <Loading /> : <DetailsBox data={data} />}

                    <button className="btn add__btn mb-4 text-white" onClick={() => setOpenModal(true)}> Add a PDF </button>
                </Container>
            </div>


            <ModalComp
                ModalTitle="Upload PDF"
                open={openModal}
                onClose={() => setOpenModal(false)}
                cancel="close"
                Component={<PDFForm onClose={() => setOpenModal(false)} reFetch={reFetch} />}
            />


        </React.Fragment>
    )
}

export default Dashboard