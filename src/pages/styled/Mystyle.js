import { Button } from 'antd';
import { useEffect, useState } from 'react';
import styled from 'styled-components';


const MyBtn = styled.button`
    color:blue;
    background-color : #fa1;
    `;

const MyBtn2 = styled(MyBtn)`
    background-color:#5f3;
    `;

const UrBtn = props => {
    console.log('props : ', props);
    return <Button className={props.className}>{props.children}</Button>
}
const UrBtnStyle = styled(UrBtn)`
    background-color : #321;
    `;

const PrimaryButton = styled.button`
    color : white;
    background-color : ${prop => prop.aaa ? "blue" : "pink"}
    `;

const Mystyle = () => {
    const [a, setA] = useState("");


    useEffect(() => {
        console.log("start useEffect ==========");
        const timer = setInterval(() => {
            console.log("timer...")
        }, 500);
        return ()=>{
            clearInterval(timer);
            console.log("unMounted Style component ------------")
        }
    }, [])
    return <>
        <h1>myStyle 1</h1>
        <MyBtn>hi</MyBtn><br />
        <MyBtn2>btn2</MyBtn2><br />
        <UrBtn>yours</UrBtn><br />
        <UrBtnStyle>UrBtnStyle</UrBtnStyle><br />
        <PrimaryButton>first Key</PrimaryButton><br />
        <PrimaryButton aaa>has Promary</PrimaryButton><br />
    </>

}

export default Mystyle;