import {useModal} from "./ModalContext";
import React, {useState} from "react";
import Test2 from "./Test2";
import { Button } from 'antd';

const MainComponent = () => {
    const {openModal, closeModal} = useModal();
    const [msg, setMsg] = useState('mmmmsg');

    const finish =(text)=>{
        setMsg(text)
        closeModal()
    }

    const handleOpenModal = () => {
        openModal(<Test2 sendMsg={finish}/>);
    };

    return (
        <div>
            <h1>this is modal test</h1>
            <p>{msg}</p>
            <Button onClick={handleOpenModal}>모달 열기</Button>
            <Button onClick={() => closeModal()}>모달 닫기</Button>
        </div>
    )
};

export default MainComponent
