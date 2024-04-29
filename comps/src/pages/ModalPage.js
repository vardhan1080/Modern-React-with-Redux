import Modal from "../components/Modal";
import Button from '../components/Button';
import { useState } from "react";

function ModalPage() {

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>I Accept</Button>
    </div>
  );
  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
    <p>
      Text to show inside Model
    </p>
  </Modal>

  return (
    <div className="relative">
      <Button primary onClick={handleClick}>Open Modal</Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;