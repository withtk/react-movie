import { Button } from "antd";
import { useEffect, useMemo, useState } from "react";
import { PlayCircleOutlined } from "@ant-design/icons"

const Memo2 = () => {
    const [isKorea, setIsKorea] = useState(true);
    const location = useMemo(() => {
        return {
            country: isKorea ? "한국" : "우주"
        }
    }, [isKorea]);

    useEffect(() => {
        console.log('useEffect~');
    }, [isKorea]);

    const onClick = () => {
        setIsKorea(!isKorea);
    }

    return (
        <div>
            <h2>여기는 어디?</h2>
            <Button
                type="primary"
                icon={<PlayCircleOutlined />}
                onClick={onClick}
            >Click
            </Button>
            <span>Locations : {location.country}</span>
        </div>
    )
}

export default Memo2;