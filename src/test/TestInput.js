import React, { useState, useEffect } from 'react';


export default function TestInput(props) {
    const [name, setName] = useState("");

    useEffect(() => {
        console.log("loaded");
    });

    useEffect(() => {
        console.log("name : " + name);
    }, [name]);

    const changeHandle = (e) => {
        console.log(e.target.value)
        setName(e.target.value);
    }

    return (
        <div  >
            <h1>Hello React.</h1>
            <h2>Start editing to see some magic happen!</h2>
            <input type="text" name="test" onChange={changeHandle} placeholder="something ...." defaultValue={name} />
        </div>
    );
}

// Log to console
console.log('Hello console')