import React from 'react'
import { AvField, AvCheckboxGroup, AvCheckbox } from "availity-reactstrap-validation"
import { Row, Col } from "reactstrap"

function FormInput2({ setPhotoPassport }) {

    const handlePhotoPassport = (e) => {
        setPhotoPassport(e.target.files[0])
    }

    return (
        <div>
            <Row>
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="passportPhoto"
                            label="Passport Photo"
                            className="form-control"
                            type="file"
                            required
                            onChange={handlePhotoPassport}
                        />
                    </div>
                </Col>
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="password"
                            label="Password"
                            className="form-control"
                            placeholder="Enter your password"
                            type="password"
                            required
                        />
                    </div>
                </Col>
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="passwordConfirm"
                            label="Confirm Password"
                            className="form-control"
                            placeholder="Re enter your password"
                            type="password"
                            required
                        />
                    </div>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <AvCheckboxGroup inline name="agreed" required className="mt-5">
                        <AvCheckbox customInput label="Do you agree to the terms & conditions ? " className="me-3 bg-white" value={true} />
                    </AvCheckboxGroup>
                </Col>
                <Col md={6}>
                    <AvCheckboxGroup inline name="blackListed" className="mt-5">
                        <AvCheckbox customInput label="Black listed ? " className="me-3 bg-white" value={true} />
                    </AvCheckboxGroup>
                </Col>
            </Row>
        </div>
    )
}

export default FormInput2