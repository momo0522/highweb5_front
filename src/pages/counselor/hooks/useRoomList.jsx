import {useEffect, useState} from "react";
import customAxios from "../../../lib/customAxios";

export function useRoomList(isLoading){
    const [roomList, setRoomList] = useState([]);
    const url = `/counselor-room`;

    useEffect(() => {
        if(isLoading){
            return;
        }
        const fetchData = async () => {
            const response = await customAxios.get(url);
            setRoomList(response.data);
        }
        fetchData()
    }, [isLoading])

    
    return {roomList};
}