import {useEffect, useState} from "react";
import customAxios from "../../../lib/customAxios";

export function useRoom(){
    const [roomId, setRoomId] = useState([]);
    const url = `/counselor-room`;

    useEffect(() => {
        const fetchData = async () => {
            const response = await customAxios.put(url);
            setRoomId(response.data);
        }
        fetchData()
    }, [])

    return {roomId};
}