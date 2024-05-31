import React from 'react';
import {MessageItem} from "./components/MessageItem";
import {useMessages} from "./hooks/useMessages";
import { useLocation } from 'react-router-dom';
import styles from "../counselor/CounselorChatRoom.module.css";
function PastCounselorRoom() {
    const roomId = useLocation().state.id;

    const {messages } = useMessages(roomId)

    return (
        <div>
            <div>{roomId}번방</div>
            <div>
                {messages.map((message) => (
                    <div key={message.id}>
                        <MessageItem key={message.id}
                                     message={message}
                        />
                    </div>
                ))}
            </div>
        </div>
    );

}

export default PastCounselorRoom;
