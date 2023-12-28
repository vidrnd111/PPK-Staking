import React from "react";
import ReactModal from "react-modal";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
ReactModal.setAppElement("#root");

function Modal3(props) {
  const {
    open3,
    onClose,
    children,
    shouldCloseOnEsc = true,
    shouldFocusAfterRender = true,
    shouldCloseOnOverlayClick = true,
    shouldReturnFocusAfterClose = true,
  } = props;

  return (
    <div>
      <ReactModal
        isOpen={open3}
        onRequestClose={onClose}
        className="ReactModal__Content"
        overlayClassName="ReactModal__Overlay"
        shouldCloseOnEsc={shouldCloseOnEsc}
        shouldFocusAfterRender={shouldFocusAfterRender}
        shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
        shouldReturnFocusAfterClose={shouldReturnFocusAfterClose}
      >
        {children}
      </ReactModal>
    </div>
  );
}

export default Modal3;
