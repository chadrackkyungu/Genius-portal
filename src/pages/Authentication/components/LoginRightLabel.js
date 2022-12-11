import React from 'react'
import { Col } from "reactstrap"

function LoginRightLabel({ text, size }) {
    return (
        <Col md={!size ? 5 : size} className="bg-image">
            <div> <h1 className="text-center text-white"> {text} </h1> </div>
        </Col>
    )
}

export default LoginRightLabel