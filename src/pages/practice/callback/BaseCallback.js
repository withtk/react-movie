import { Button } from "antd";
import { ConfigContext } from "antd/lib/config-provider";
import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
 

const BaseCallback = () => {
 

    const [no, setNo] = useState(0);
    const [myList, setMyList] = useState([]);

    const onRef = useRef();
    const onFunction = useCallback(() => {
        console.log("initalized onFunction. when abc is changed.");
    }, [myList]);

    useEffect(() => {
        console.log("useEffect hit!");
    }, []);

    const onChange = (e) => {
        setNo(e.target.value);
    }

    const onClick = () => {
        setMyList(pre => {
            return ([no, ...pre])
        });
        setNo(0);
        onRef.current.focus();
    }

    return (
        <div>
            <input ref={onRef} type="number" value={no} onChange={onChange} />
            <Button type="primary" onClick={onClick}>AAA</Button>
            {
                myList && myList.map(item => {
                    return (<Text text={item} />)
                })
            }
        </div>
    )
}

const Text = ({ text }) => {
    return (
        <p style={{ backgroundColor: "pink" }}>{text}</p>
    )
}

export default BaseCallback;