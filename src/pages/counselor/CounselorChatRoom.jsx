import React from 'react';
import { useParams } from 'react-router-dom';

const CounselorChatRoom = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>채팅방 {id} </h1>
      <div>채팅 내용 표시 영역</div>
      <input type="text" placeholder="메시지를 입력하세요" />
      <button>전송</button>
    </div>
  );
};

export default CounselorChatRoom;
