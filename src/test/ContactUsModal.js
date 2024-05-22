import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ContactUsModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        I will not close if you click outside me. Do not even try to pres ̰s
        escape key.
      </Modal.Body>
      <Modal.Footer>
         
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary">Understood</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactUsModal;
