import React from 'react'
import { Spinner } from "reactstrap";

function Empty({ data }) {
    return (
        <React.Fragment>
            <div className="page-content">
                <div className="d-flex justify-content-center align-item-center mt-5">
                    <h4> {data} </h4>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Empty