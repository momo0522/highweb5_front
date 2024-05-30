import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {MessageItem} from "./components/MessageItem";
import {useMessages} from "../hooks/useMessages";
import {usePublish} from "../hooks/usePublish";
import {useSubscribe} from "../hooks/useSubscribe";

function ChatRoom() {
    let { roomId } = useParams();
    const {message, setMessage, sendMessage} = usePublish(roomId)
    const {messages, updateMessage } = useMessages(roomId)
    useSubscribe(roomId, updateMessage)

    return (
        <div>
            <div>{roomId}</div>
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
