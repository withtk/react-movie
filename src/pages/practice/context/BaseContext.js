import React, { useContext, useMemo, useState } from "react";
import BottomCon from "./BottomCon";
import DownCon from "./DownCon";
import OnCon from "./OnCon";
import { UserContext } from "./UserContext";

const BaseContext = () => {

    const [login, setLogin] = useState(false);
    const [loading, setLoading] = useState(true);

    const value = useMemo(() => ({login, setLogin, setLoading }), [setLogin, setLoading]);

    return (
        <UserContext.Provider value={value}>
            <div>
                <h2>basecontext : {login ? "Login!!" : "noLogin"}  :  {loading?"로딩중" : "로딩 끝~!"}</h2>
                <OnCon />
                <BottomCon />
            </div>
        </UserContext.Provider>
    )
}

export default BaseContext;