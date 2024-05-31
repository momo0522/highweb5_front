import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useStatus} from './hooks/useStatus'
import { useRoomList } from './hooks/useRoomList';
import { useCounselor } from './hooks/useCounselor';
import {useRoom} from "./hooks/useRoom";

const CounselorPage = () => {
  const navigate = useNavigate();

  const { isLoading, id } = useCounselor();
  const { status } = useStatus(isLoading);
  const { roomList } = useRoomList(isLoading);
  const [selectedChat, setSelectedChat] = useState(null);
  const [chatHistory, setChatHistory] = useState([]);
  const { roomId } = useRoom();

  useEffect(() => {

    // 데이터 로드 예제
    setChatHistory([
      { id: 1, content: '첫 번째 상담 내용' },
      { id: 2, content: '두 번째 상담 내용' },
      { id: 3, content: '세 번째 상담 내용' },
    ]);
  }, []);

  function handleEnterRoom(){
    navigate('/chat-room', {state:{roomId, id}});
  }

  function handleEnterPastRoom(id){
    navigate('/past-room', {state:{id}});
  }
  return (
    <div>
      <h1>상담사 페이지</h1>
      <div>
      <div onClick={handleEnterRoom}>채팅방 입장</div>
    </div>
      <div>
        <p>전체 상담한 사람 수: {status.totalClientNum}</p>
        <p>오늘 상담한 사람 수: {status.todayClientNum}</p>
        <p>접속 이후 상담한 사람 수: {status.afterLoginClientNum}</p>
      </div>
      <div>
        <h2>이전 상담 기록</h2>
        {roomList.map((room) => (
          <div key={room.id} onClick={() => handleEnterPastRoom(room.id)}>
            상담 ID: {room.id}
          </div>
        ))}
      </div>
      {selectedChat && (
        <div>
          <h2>선택된 상담</h2>
          <p>{selectedChat.content}</p>
        </div>
      )}
    </div>
  );
};

export default CounselorPage;
