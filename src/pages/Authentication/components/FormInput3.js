import React from 'react'
import { AvField, } from "availity-reactstrap-validation"
import { Row, Col } from "reactstrap"

function FormInput3() {
    return (
        <div>
            <Row>
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="province"
                            label="Province"
                            className="form-control"
                            placeholder="Enter province"
                            type="text"
                            required
                        />
                    </div>
                </Col>
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="city"
                            label="City"
                            className="form-control"
                            placeholder="Enter city"
                            type="text"
                            required
                        />
                    </div>
                </Col>
                <Col md={4}>
                    <Row>
                        <Col md={6}>
                            <div className="mb-3">
                                <AvField
                                    name="postalCode"
                                    label="Postal Code"
                                    className="form-control"
                                    placeholder="Enter postal code"
                                    type="number"
                                    required
                                />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="mb-3">
                                <AvField
                                    name="areaCode"
                                    label="Area Code"
                                    type="text"
                                    placeholder="Enter your area code"
                                    required
                                />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="referralCode"
                            label="Referral Code"
                            className="form-control"
                            placeholder="Enter referral code"
                            type="number"
                            required
                        />
                    </div>
                </Col>
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="companyName"
                            label="Company Name"
                            type="text"
                            placeholder="Enter your company name"
                            required
                        />
                    </div>
                </Col>
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="jobTitle"
                            label="Job Title"
                            type="text"
                            placeholder="Enter your job title"
                            required
                        />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <div className="mb-3">
                        <AvField
                            name="accountNumber"
                            label="Account Number"
                            className="form-control"
                            placeholder="Enter account number"
                            type="number"
                            required
                        />
                    </div>
                </Col>
                <Col md={4}>
                    <div className="mb-3">
                        <AvField name="bankName" label="Bank Name" type="select" required>
                            <option> Select...</option>
                            <option> FNB</option>
                            <option> ABSA</option>
                            <option> CAPITEC</option>
                            <option> NEDBANK</option>
                            <option> STANDARD BANK</option>
                            <option> TYME BANK</option>
                        </AvField>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="mb-3">
                        <AvField name="accountType" label="Account Type" type="select" required>
                            <option> Select...</option>
                            <option> Saving </option>
                            <option> Current </option>
                        </AvField>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default FormInput3