import {useEffect, useState} from "react";
import customAxios from "../../../lib/customAxios";

export function useRoomList(){
    const [roomList, setRoomList] = useState([]);
    const url = `/counselor-room`;

    useEffect(() => {
        const fetchData = async () => {
            const response = await customAxios.get(url);
            setRoomList(response.data);
        }
        fetchData()
    }, [])

    
    return {roomList};
}