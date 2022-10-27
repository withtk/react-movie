import React from "react";
import { ThemeContext } from "styled-components";


const DoContext = () => {
    return (
        <>
            <ThemeContext.Provider>
                <h1>context</h1>
            </ThemeContext.Provider>
        </>
    )
}

export default DoContext;