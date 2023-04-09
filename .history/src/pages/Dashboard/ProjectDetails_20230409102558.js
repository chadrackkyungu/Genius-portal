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


const Dashboard = () => {

    const { id } = useParams()
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

                    <button> Add a PDF </button>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Dashboard