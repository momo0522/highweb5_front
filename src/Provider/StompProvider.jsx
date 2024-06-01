import React, { useState, useEffect } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import StompContext from "../context/StompContext";
const { REACT_APP_API_URL } = process.env;
const StompProvider = ({ children }) => {
    const [stompClient, setStompClient] = useState(null);

    useEffect(() => {
        let interval;

        const connect = () => {
            const socket = new SockJS(REACT_APP_API_URL + '/api/ws');
            const stompClient = Stomp.over(socket);

            stompClient.connect({}, () => {
                console.log('WebSocket Connected');
                setStompClient(stompClient);
            }, () => {
                console.log('Connection error, scheduling reconnect');
                scheduleReconnect();
            });
        };

        const scheduleReconnect = () => {
            // 5초 후에 재연결을 시도합니다.
            interval = setTimeout(connect, 5000);
        };

        connect();

        return () => {
            // if (stompClient) {
            //     stompClient.disconnect(() => {
            //         console.log('WebSocket Disconnected');
            //     });
            // }
            if (interval) {
                clearTimeout(interval);
            }
        };
    }, []);

    return (
        <StompContext.Provider value={stompClient}>
            {children}
        </StompContext.Provider>
    );
};

export default StompProvider;
