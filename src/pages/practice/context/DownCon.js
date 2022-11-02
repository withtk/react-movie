import { Button } from "antd";
import { useContext } from "react";
import { UserContext } from "./UserContext";


const DownCon = () => {
    const {   setLogin, setLoading } = useContext(UserContext);

    return ( 
        <div>

            <h2>DownCon :   !</h2>  
            <Button onClick={()=>{setLogin(prev => !prev)}}>Login Toggle</Button> 
            <Button onClick={()=>{setLoading(prev => !prev)}}>Loading Toggle</Button> 
        </div>
    )
}

export default DownCon;