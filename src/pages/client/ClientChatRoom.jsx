import React from 'react';
import { useLocation } from 'react-router-dom';
const ClientChatRoom = () => {

  const id = useLocation().state.id;

  return (
    <div>
      <h1>채팅방 {id} </h1>
      <div>채팅 내용 표시 영역</div>
      <input type="text" placeholder="메시지를 입력하세요" />
      <button>전송</button>
    </div>
  );
};

export default ClientChatRoom;
