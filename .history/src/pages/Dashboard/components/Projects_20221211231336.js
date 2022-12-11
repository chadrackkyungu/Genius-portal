import React from 'react';
import { Card, CardBody, Row, Col, CardTitle, CardImg } from 'reactstrap';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { useStore1Dispatch, useStore1Selector } from "index";
import { Login, loginUser } from "Redux/Slices/userSlice";
import usePost from 'hooks/usePost';
import { DeletedProjectMsg } from 'components/NotifyMessage';

const Projects = ({ data }) => {

  const userDet = useStore1Selector(loginUser);
  const token = userDet?.token;
  const { execute, reFetch } = usePost()

  const deleteFunc = (id) => {
    const Method = 'DELETE', endPoint = `projects/${id}`;
    const raw = "";
    execute(endPoint, raw, Method, DeletedProjectMsg, token)
  }

  if (data?.status === 'success') {
    setTimeout(() => {
      reFetch()
    }, 2000)
  }

  console.log(pending)

  return (
    <React.Fragment>
      <Row>
        {
          data?.map((project, i) => {
            return (
              <Col lg={4} key={i}>
                <Card>
                  <CardImg top className="img-fluid" src={`${process.env.REACT_APP_IMG_API}img/projects/${project.imageCover}`} alt="Veltrix" />
                  <CardBody>
                    <CardTitle className="h4">{project.projectName}</CardTitle>
                    <div className="d-flex justify-content-between">
                      <b className="card-text">Days : {project.projectLengthDays}</b>
                      <b className="card-text">Weeks : {project.projectLengthWeeks}</b>
                      <b className="card-text">Months : {project.projectLengthMonths}</b>
                    </div>
                    <p className="card-text mt-4">{project.description}</p>

                    <div className='d-flex justify-content-between'>
                      <p> <Link className="text-start" to={`/project/${project._id}`}> <FaEye size={20} /> View </Link> </p>
                      <p className="text-end text-danger" onClick={() => { deleteFunc(project._id) }}> <MdDeleteForever size={30} /> </p>
                    </div>

                  </CardBody>
                </Card>
              </Col>
            )
          })
        }
      </Row>
    </React.Fragment>
  )
}

export default Projects;