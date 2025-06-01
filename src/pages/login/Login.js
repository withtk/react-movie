
import React, { useState } from 'react';
import { PoweroffOutlined, UserAddOutlined } from '@ant-design/icons';
import { Button, Card, Row, Col, Space } from 'antd';
import { Link } from 'react-router-dom';

function Login() {

    const [loadings, setLoadings] = useState([]);
    const enterLoading = (index) => {
        setLoadings(
            (preArryvLoadings) => {
                console.log("preArryvLoading11 : " + preArryvLoadings);
                const newLoadings = [...preArryvLoadings];
                newLoadings[index] = true;
                return newLoadings;
            });

        setTimeout(() => {
            setLoadings((preArryvLoadings) => {
                console.log("preArryvLoading22 : " + preArryvLoadings);
                const newLoadings = [...preArryvLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 1000);
    };

    const [strArr, setStrarr] = useState([]);
    const onClickStrarr = (i) => {
        setStrarr(
            (preArry) => {

                console.log("strArr:" + strArr);
                const da = new Date();
                const bb = [...preArry];
                bb[i] = da.getMilliseconds();
                console.log("preArry:" + preArry);
                console.log("current:" + bb);
                return bb;
            }
        )
    }

    const [pen, setPen] = useState("");
    const onClickHandle = (i) => {
        setPen(
            preArrya => { 
                const da = new Date();
                const bbb = da.getMilliseconds();
                console.log("preArrya: " + preArrya);
                console.log("bbb: " + bbb);
                return bbb;
            }
        )
    }



    return (
        <>
            <div>
                <Row justify="center" style={{ marginTop: '20px' }}>
                    <Col>
                        <Card title="로그인" style={{ width: 300 }}>
                            <Space direction="vertical" style={{ width: '100%' }}>
                                <h1>login</h1>
                                <Button
                                    type="primary"
                                    icon={<PoweroffOutlined />}
                                    loading={loadings[0]}
                                    onClick={() => enterLoading(0)}>
                                    Click me!
                                </Button>
                                <Button
                                    type="primary"
                                    icon={<PoweroffOutlined />}
                                    loading={loadings[1]}
                                    onClick={() => enterLoading(1)}>
                                    Click me!
                                </Button>
                                <Button
                                    type="primary"
                                    icon={<PoweroffOutlined />}
                                    loading={loadings[2]}
                                    onClick={() => onClickHandle(2)}>
                                    PEN
                                </Button>
                                <Button
                                    type="primary"
                                    icon={<PoweroffOutlined />}
                                    loading={loadings[3]}
                                    onClick={() => onClickHandle(3)}>
                                    StrArr
                                </Button>
                                <Button
                                    type="link"
                                    icon={<UserAddOutlined />}
                                    style={{ marginTop: '10px' }}>
                                    <Link to="/register">회원가입</Link>
                                </Button>
                            </Space>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Login;