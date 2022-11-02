import { createContext } from "react";

export const UserContext = createContext({
    login : false,
    setLogin: () => { },
    setLoading: () => { }
});

