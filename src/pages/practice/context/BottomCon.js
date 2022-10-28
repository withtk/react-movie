import React, { useState } from "react";
import { ThemeContext } from "styled-components";
import OnCon from "./OnCon";
import { UserContext } from "./UserContext";

const BottomCon = () => {
    const {isDark, setIsDark} = useState([]);

    return (
        <UserContext.Provider value = {"사용자"}>
            <ThemeContext.Provider value={}>
                <OnCon />
            </ThemeContext.Provider>
        </UserContext.Provider>
    )
}

export default BottomCon;
