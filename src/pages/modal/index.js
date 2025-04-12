// App.js
import React from 'react';
import {ModalProvider} from './ModalContext';
import MainComponent from './MainComponent'

const MMO = () => {
    return (
        <ModalProvider>
            <MainComponent/>
        </ModalProvider>
    );
};

export default MMO;
