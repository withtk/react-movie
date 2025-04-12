// ModalContext.js
import React, { createContext, useContext, useState } from 'react';
const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [modalContent, setModalContent] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const openModal = (content) => {
        setModalContent(content);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setModalContent(null);
    };

    return (
        <ModalContext.Provider value={{ openModal, closeModal, modalContent, isOpen }}>
            {children}
            {isOpen && <Modal onClose={closeModal}>{modalContent}</Modal>}
        </ModalContext.Provider>
    );
};

const Modal = ({ children, onClose }) => {
    return  (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose}>Close</button>
                {children}
            </div>
        </div>
        // document.getElementById('modal-root') // index.html에 <div id="modal-root"></div> 추가
    );
};

export const useModal = () => useContext(ModalContext);
