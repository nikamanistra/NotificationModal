import React from 'react';
import classes from './NotificationModal.module.css';
import { FaRegCheckCircle } from 'react-icons/fa';
import { ModalContainer } from '../../UI/ModalContainer/ModalContainer';

const NotificationModal = ({ header, text, isOpen, setIsOpen }) => {
  return (
    <ModalContainer
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      bodyClass={classes.notificationModalBody}
      containerClass={classes.notificationModal}
      hideHeader
    >
      <div className={classes.notificationModalContent}>
        <div className={classes.notificationLogoContainer}>
          <FaRegCheckCircle className={classes.notificationLogo} />
        </div>
        <div className={classes.notificationTextContainer}>
          <span className={classes.header}>{header}</span>
          <div className={classes.separator} />
          <span className={classes.text}>{text}</span>
        </div>
      </div>
    </ModalContainer>
  );
};

export default NotificationModal;
