import React from 'react'
import { AvField } from "availity-reactstrap-validation"
import { Row, Col } from "reactstrap"

function FormInput1() {
    return (
        <div>
            <Row>
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="firstName"
                            label="First Name"
                            className="form-control"
                            placeholder="Enter your first name"
                            type="text"
                            required
                        />
                    </div>
                </Col>
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="lastName"
                            label="Last Name"
                            className="form-control"
                            placeholder="Enter your last name"
                            type="text"
                            required
                        />
                    </div>
                </Col>
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="phoneNumber"
                            label="Phone Number"
                            className="form-control"
                            placeholder="phone number"
                            type="text"
                            required
                        />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="email"
                            label="Email"
                            className="form-control"
                            placeholder="Enter your email"
                            type="email"
                            required
                        />
                    </div>
                </Col>

                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="gender"
                            label="Gender"
                            className="form-control"
                            type="select"
                            required
                        >
                            <option> Select... </option>
                            <option> Male </option>
                            <option> Female </option>
                            <option> Others </option>

                        </AvField>
                    </div>
                </Col>

                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="address"
                            label="Street Address"
                            className="form-control"
                            placeholder="Street address"
                            type="text"
                            required
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default FormInput1
