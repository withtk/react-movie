import React, { useEffect, useRef, useState } from 'react';
import { Radio, Input, Button } from 'antd';
import { UserOutlined, PoweroffOutlined } from '@ant-design/icons';
import { 거래종류 } from '../../config/myenum';

export default function Estate() {

    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    })

    const optionsWithDisabled = Object.keys(거래종류).map(k => {
        if (거래종류[k].value === "증여") 거래종류[k].disabled = true
        return 거래종류[k]
    });

    const [sel, setSel] = useState('매매');

    const onChange4 = ({ target: { value } }) => {
        setSel(value);
    };

    const [loading, setLoading] = useState(false);

    const enterLoading = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    return (
        <>
            <br />
            <Radio.Group
                options={optionsWithDisabled}
                onChange={onChange4}
                value={sel}
                optionType="button"
                buttonStyle="solid"
            />
            <br />
            <br />
            <Input ref={inputRef} size="large" placeholder="large size" prefix={<UserOutlined />} />
            <br />
            <br />
            <Button
                type="primary"
                icon={<PoweroffOutlined />}
                loading={loading}
                onClick={enterLoading}>
                Click me!
            </Button>
        </>
    );
};

