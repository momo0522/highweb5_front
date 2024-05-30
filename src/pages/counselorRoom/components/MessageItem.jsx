// Message.js 파일
import React from 'react';
import styles from './MessageItem.module.css';

export const MessageItem = ({ message }) => {
    return (
        <div className={`${styles.messageContainer}`} key={message.id}>
            <div className={styles.header}>
                <div className={styles.flexContainer}>
                    <div>
                        <p className={styles.name}>{message.sender}</p>
                    </div>
                    <div className={styles.contentWrapper}>
                        <div className={styles.content}>{message.content}</div>
                    </div>

                </div>
            </div>
        </div>
    );
};