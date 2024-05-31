import {useEffect, useState} from "react";
import customAxios from "../../../lib/customAxios";

export function useStatus(){
    const [status, setStatus] = useState({});
    const url = `/member/counselor`;


    useEffect(() => {
        const fetchData = async () => {
            const response = await customAxios.get(url);
            setStatus(response.data);
        }
        fetchData()
    }, [])

    
    return {status };
}