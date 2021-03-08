import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById( 'modal' );

export interface ModalProps {
    onClose: () => void;
}

const Modal: React.FunctionComponent<ModalProps> = ({children, onClose}) => {
    const element = document.createElement('div');

    useEffect(() => {
        if (modalRoot) {
            modalRoot.appendChild(element);
        }

        return () => {
            if (modalRoot) {
                modalRoot.removeChild(element);
            }
        }
    });

    return createPortal(
        (<div className="modal-background">
            <div className="modal-content">
                {children}
                <div className="modal-close" onClick={onClose} />
            </div>
        </div>)
        , element);
};

export default Modal;
