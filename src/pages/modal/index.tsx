import styles from "./style.module.scss";
import Index from "./modalItem";

type ModalType = {
  isVisible?: boolean;
  title?: string;
  onClose?: any;
};

const Modal = ({ isVisible = false, title, onClose }: ModalType) => {
  return !isVisible ? null : (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalDialog} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>{title}</h3>
          <span className={styles.modalClose} onClick={onClose}></span>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.modalContent}>
            <Index />
          </div>
        </div>
        <div className={styles.modalFooter}>footer</div>
      </div>
    </div>
  );
};
export default Modal;
