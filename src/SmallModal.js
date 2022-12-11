import React from 'react';
import { Modal } from "react-bootstrap";

const SmallModal = ({ open, onClose, ModalTitle, cancel, deleteBtn, CourseForm }) => {

    if (!open) return null;

    return (
        <Modal show={open} onHide={onClose} size="sm">
            <Modal.Header className="d-flex justify-content-center">
                <h4 className="p-2"> {ModalTitle} </h4>
            </Modal.Header>
            <Modal.Body>
                {CourseForm}
            </Modal.Body>

            <Modal.Footer className="d-flex justify-content-end p-2">
                <button className="btn  text-white w-25" onClick={onClose}> {cancel} </button>
                {
                    !deleteBtn ? null : (
                        <button className="btn  text-white" onClick={onClose}> {deleteBtn} </button>
                    )
                }
            </Modal.Footer>
        </Modal>
    );
};

export default SmallModal;