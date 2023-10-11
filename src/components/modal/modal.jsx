import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from "./modalOverlay/modalOverlay"
import styles from '../modal/modal.module.css';
import ReactDOM  from 'react-dom';
import PropTypes from "prop-types";
import {useEffect} from "react";

const modalRoot = document.getElementById('react-modals');

function Modal({open,children,onClose}){

  // закрытие модального окна при клике на Esc
  useEffect(() => {
    const closeEscModal = (evt) => {
        if (evt.key === 'Escape') {
            onClose();
        }
    };
    document.addEventListener('keydown', closeEscModal);

    return () => {
        document.removeEventListener('keydown', closeEscModal);
    };
}, []);


  // если модальное окно не открыто, то возвращаем null
  if(!open) return null

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClose={onClose}/>
      <div className={styles.modal}>
          <span className={styles.modal_close} onClick={onClose}><CloseIcon type="primary"/></span>
          <div>
            {children}
          </div>
      </div>
    </>,
    modalRoot
  );
}

// проверка на типы
Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired
}


export default Modal

