import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";

const ModalWrapper = styled.div`
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBody = styled.div`
  background: #fff;
  width: 50%;
  padding: 20px;
`;

const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    cursor: pointer;
  }
`;

const Modal = ({ children, show, title, onClose }) => {
  if (!show) return null;
  return ReactDOM.createPortal(
    <ModalWrapper onClick={() => onClose()}>
      <ModalBody onClick={(e) => e.stopPropagation()}>
        <ModalTitle>
          <h5>{title}</h5>
          <span onClick={() => onClose()}>X</span>
        </ModalTitle>
        <hr />
        {children}
      </ModalBody>
    </ModalWrapper>,
    document.getElementById("modal")
  );
};

export default Modal;
