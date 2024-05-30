import {useEffect} from "react";
import {useStomp} from "../context/StompContext";

export function useSubscribe(roomId, updateMessages) {
    const stompClient = useStomp();
    useEffect(() => {
        if (!stompClient) {
            return;
        }
        const url = `/sub/room/${roomId}`;
        // 구독 로직
        const subscription = stompClient.subscribe(url, (chat) => {
            const message = JSON.parse(chat.body);
            updateMessages(message);
        });

        return () => {
            if (subscription) {
                subscription.unsubscribe();
            }
        };
    }, [stompClient, roomId]);
}