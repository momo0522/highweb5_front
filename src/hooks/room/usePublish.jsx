import {useState} from "react";
import {useStomp} from "../context/StompContext";

export function usePublish(roomId, senderId) {
    const stompClient = useStomp();
    const [message, setMessage] = useState('');

    const url =`/pub/message`;
    function sendMessage() {
        if (stompClient) {
            stompClient.send(url, {},
                JSON.stringify({roomId: roomId, senderId: 3, content: message}));
            setMessage('');
        }
    }

    return { message, setMessage, sendMessage }
}
