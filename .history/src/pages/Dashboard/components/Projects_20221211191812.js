import React from 'react';
import { Card, CardBody, Row, Progress, Col, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from "react-router-dom";

const Projects = ({ data }) => {

  return (
    <React.Fragment>
      <Row>
        {
          data?.map((project, i) => {
            return (
              <Col lg={4}>
                {/* <Link to={`/project/${project._id}`}> */}
                <Card>
                  <CardBody>

                    <CardImg top className="img-fluid" src={`${process.env.REACT_APP_IMG_API}img/projects/${project.imageCover}`} alt="Veltrix" />
                    <CardBody>
                      <CardTitle className="h4">{project.projectName}</CardTitle>
                      <div className="d-flex justify-content-between">
                        <b className="card-text">Days : {project.projectLengthDays}</b>
                        <b className="card-text">Weeks : {project.projectLengthWeeks}</b>
                        <b className="card-text">Months : {project.projectLengthMonths}</b>
                      </div>
                      <p className="card-text mt-4">{project.description}</p>
                      <p className="text-end text-danger cursor-pointer"> <MdDeleteForever size={30} /> </p>
                    </CardBody>
                  </CardBody>
                </Card>
                {/* </Link> */}
              </Col>
            )
          })
        }
      </Row>
    </React.Fragment>
  )
}

export default Projects;