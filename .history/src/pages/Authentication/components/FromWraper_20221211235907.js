import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { MdMonetizationOn } from 'react-icons/md';

function FromWraper({ title, children, size }) {
    return (
        <Col md={12} sm={12} lg={!size ? 7 : size} className="d-flex justify-content-center align-items-center">
            <div className="input-card">
                <Card className="overflow-hidden card-border-radius">
                    {/* <div className='text-center mt-4'> 
                        <MdMonetizationOn size={70} className="icon-color" /> 
                    </div> */}
                    <CardBody>
                        <h3 className='text-center'>{title}</h3>
                        {children}
                    </CardBody>
                </Card>
            </div>
        </Col>
    )
}

export default FromWraper