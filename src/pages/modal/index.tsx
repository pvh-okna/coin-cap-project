import styles from "./style.module.scss";

type ModalType = {
  isVisible?: boolean;
  content?: any;
  title?: string;
  onClose?: any;
};

const Modal = ({ isVisible = false, title, onClose, content }: ModalType) => {
  return !isVisible ? null : (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalDialog} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>{title}</h3>
          <span className={styles.modalClose} onClick={onClose}></span>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.modalContent}>{content}</div>
        </div>
        <div className={styles.modalFooter}></div>
      </div>
    </div>
  );
};
export default Modal;
