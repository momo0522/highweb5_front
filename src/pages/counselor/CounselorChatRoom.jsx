import React from 'react';
import { useRoom } from './hooks/useRoom';
import styles from './CounselorChatRoom.module.css';

const CounselorChatRoom = () => {
  const { roomId } = useRoom();

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
      <h1>채팅방 {roomId} </h1>
      <div>채팅 내용 표시 영역</div>
      <input type="text" placeholder="메시지를 입력하세요" />
      <button>전송</button>
    </div>
  );
};

export default CounselorChatRoom;
