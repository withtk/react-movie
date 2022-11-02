import { Button } from "antd";
import React, { useContext, useRef, useState } from "react";
import DownCon from "./DownCon";
import { UserContext } from "./UserContext";


const OnCon = () => {

    const { login } = useContext(UserContext);
    const { name, setName } = useState("");

    const aaaRef = useRef();
    const onClick = () => {
        console.log(aaaRef.current.value);
    }

    return (
        <>
            <h1 id="aaa">OnCon : {login} !!</h1>
            <input ref={aaaRef} id="aaa" type="text" />
            <Button onClick={onClick}>change name</Button>

            <DownCon />
        </>
    )
};

export default OnCon;