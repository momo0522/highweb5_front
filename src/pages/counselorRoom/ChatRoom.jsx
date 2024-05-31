import React from 'react';
import {MessageItem} from "./components/MessageItem";
import {useMessages} from "./hooks/useMessages";
import {usePublish} from "./hooks/usePublish";
import {useSubscribe} from "./hooks/useSubscribe";
import { useLocation } from 'react-router-dom';
import styles from "../counselor/CounselorChatRoom.module.css";
function ChatRoom() {
    const roomId = useLocation().state.roomId;
    const senderId = useLocation().state.id;

    const {message, setMessage, sendMessage} = usePublish(roomId, senderId)
    const {messages, updateMessage } = useMessages(roomId)
    useSubscribe(roomId, updateMessage)

    if(roomId === -1){
        return (
            <div className={styles.spinnerContainer}>
                <div className={styles.spinner}></div>
                <div className={styles.text}>상담자를 기다리는 중입니다.</div>
            </div>
        );
    }

    return (
        <div>
            <div>{roomId}번방</div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>

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

export default ChatRoom;
