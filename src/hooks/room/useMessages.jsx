import {useEffect, useState} from "react";
import customAxios from "../lib/customAxios";

export function useMessages(id){
    const [messages, setMessages] = useState([]);
    const url = `/counselor-room/${id}`;

    useEffect(() => {
        const fetchData = async () => {
            const response = await customAxios.get(url);
            const messageList = response.data
            setMessages(messageList);
        }
        fetchData()
    }, [id, url])


    const updateMessage = (newMessage) => {
        setMessages((prevMessages) => {
            return[...prevMessages, newMessage]
            }
        );
    }
    return { messages, updateMessage};
}
