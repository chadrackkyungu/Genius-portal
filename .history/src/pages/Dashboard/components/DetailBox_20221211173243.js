import React from 'react';
import { Card, CardBody, Row, Progress, Col, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';
import { GiReceiveMoney } from "react-icons/gi";

// import MoalComp from '../../../Modal';
// import DetailBox from "./components/DetailBox";

const DetailsBox = ({ data }) => {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <React.Fragment>
      <Row>
        {
          data?.images?.map((images, i) => {
            return (
              <Col lg={4}>
                <Card>
                  <CardImg top className="img-fluid" src={`${process.env.REACT_APP_IMG_API}img/projects/${images}`} alt="Genious" />
                </Card>
              </Col>
            )
          })
        }
      </Row>

      {/* <MoalComp 
            ModalTitle="Project images"
            open={openModal}
            onClose={() => setOpenModal(false)}
            cancel="close"
            Component={<DetailBox onClose={() => setOpenModal(false)} />}
            /> */}
    </React.Fragment>
  )
}

export default DetailsBox;