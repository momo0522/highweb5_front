import {useEffect, useState} from "react";
import customAxios from "../../../lib/customAxios";

export function useCounselor(){
    const [isLoading, setIsLoading] = useState(true)
    const [id, setId] = useState(null)
    const url = `/member/counselor`;

    useEffect(() => {
        const loginCounselor = async () => {
            setIsLoading(true)
            const response = await customAxios.put(url);
            setId(response.data)
            setIsLoading(false)
        }
        loginCounselor()
    }, [])

    return { isLoading, id };
}