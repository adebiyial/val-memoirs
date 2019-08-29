import React from 'react';
import '../styles/modal.scss';

function Modal({ isModalActive, children }) {
  const showHideClassname = isModalActive ? 'modal modal-isActive' : 'modal';

  return (
    <div className={showHideClassname}>
      <section className="modal-main">{children}</section>
    </div>
  );
}

export default Modal;
