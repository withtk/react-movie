import React, {useState} from 'react';
import {Button} from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';


export default function Test2({sendMsg}) {

    // const [msg, setMsg] = useState();

    return (
        <>
            <div>
                <h1>Test2</h1>
                <Button
                    type="primary"
                    icon={<PoweroffOutlined/>}
                    onClick={() => sendMsg && sendMsg(' hi~ nice to ')}>
                    Click me!
                </Button>

            </div>
        </>
    )
}
