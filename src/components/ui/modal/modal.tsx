import { createPortal } from 'react-dom';
import style from './modal.module.scss';

export type modalPropsType = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: modalPropsType) => {
  if (!isOpen) return null;

  return createPortal(
    <div className={style.modalOverlay} onClick={onClose}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={style.modalClose} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
