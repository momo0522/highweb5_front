import {useEffect, useState} from "react";
import customAxios from "../lib/customAxios";

export function useStatus(isLoading){
    const [status, setstatus] = useState({});
    const url = `/member/counselor`;


    useEffect(() => {
        if(isLoading){
            return;
        }
        const fetchData = async () => {
            const response = await customAxios.get(url);
            setstatus(response.data);
        }
        fetchData()
    }, [isLoading])

    
    return {status };
}