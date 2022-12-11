import React from 'react';
import { Card, Row, Col, CardImg } from 'reactstrap';

const DetailsBox = ({ data }) => {
  return (
    <React.Fragment>
      <Row className='mt-4'>
        {
          data?.images?.map((images, i) => {
            return (
              <Col lg={4} key={i}>
                <Card>
                  <CardImg top className="img-fluid" src={`${process.env.REACT_APP_IMG_API}img/projects/${images}`} alt="Genious" />
                </Card>
              </Col>
            )
          })
        }
      </Row>
    </React.Fragment>
  )
}

export default DetailsBox;