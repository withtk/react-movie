// ModalContext.js
import React, {createContext, useContext, useState} from 'react';
import {Modal} from 'antd';

const ModalContext = createContext();

export const ModalProvider = ({children}) => {
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
        <ModalContext.Provider value={{openModal, closeModal, modalContent, isOpen}}>
            {children}
            <Modal title="Basic Modal" open={isOpen} onOk={closeModal} onCancel={closeModal} footer={null}>
                {modalContent}
            </Modal>
            {/*{isOpen && <ModalWrap isOpen={isOpen} onClose={closeModal}>{modalContent}</ModalWrap>}*/}
        </ModalContext.Provider>
    );
};

const ModalWrap = ({children,isOpen, onClose}) => {
    return (
        <Modal title="Basic Modal" open={isOpen} onOk={onClose} onCancel={onClose}>
            <p>Some contents...</p>
            {children}
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>

        // <div className="modal-overlay" onClick={onClose}>
        //     <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        //         <button onClick={onClose}>Close</button>
        //         {children}
        //     </div>
        // </div>
    );
};

export const useModal = () => useContext(ModalContext);
