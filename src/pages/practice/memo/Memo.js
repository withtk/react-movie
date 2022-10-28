import { Button } from 'antd';
import React, { useRef, useState, useMemo } from 'react';
import CreateUser from './CreateUser';
import Memo2 from './Memo2';
import UserList from './UserList';


const Memo = () => {
    const username = "aaaa"
    const [current, setCurrent] = useState([]);
    const [hardNumber, setHardNumber] = useState(1);
    const [easyNumber, setEasyNumber] = useState(1);

    const hardCalculate = (n) => {
        console.log('hard');
        for (let i = 0; i < 999999; i++) { } // time to think
        return n + 10000;
    }
    const easyCalculate = (n) => {
        return n + 1;
    }
    const onPlus = () => {
        setCurrent(d => d + 1)
    };
    const onChange = (e) => {
        setHardNumber(parseInt(e.target.value));
    }
    const onChange2 = (e) => {
        setEasyNumber(parseInt(e.target.value));
    }
    const hardSum = useMemo(() => {
        return hardCalculate(hardNumber);
    }, [hardNumber])

    return (
        <div>
            <h2>계산기1</h2>
            <input onChange={onChange} type="number" value={hardNumber} />
            <span>+ 10000 = {hardSum}</span>
            <h2>계산기2</h2>
            <input onChange={onChange2} type="number" value={easyNumber} />
            <span>+ 1 = {easyCalculate(easyNumber)}</span>

            <br/><br/><br/><br/>
            <Memo2 />

        </div>

    );
}

export default Memo;

const userList = [
    {
        id: 1,
        name: "first",
        age: 12
    },
    {
        id: 2,
        name: "second",
        age: 123
    },
    {
        id: 3,
        name: "third",
        age: 52
    },
];
