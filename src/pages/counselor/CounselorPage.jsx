import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useStatus} from './hooks/useStatus'
import { useRoom, useRoomList } from './hooks/useRoomList';
import { useCounselor } from './hooks/useCounselor';

const CounselorPage = () => {
  const { isLoading } = useCounselor();
  const { status } = useStatus(isLoading);
  const { roomList } = useRoomList(isLoading);
  const [selectedChat, setSelectedChat] = useState(null);
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    // 데이터 로드 예제
    setChatHistory([
      { id: 1, content: '첫 번째 상담 내용' },
      { id: 2, content: '두 번째 상담 내용' },
      { id: 3, content: '세 번째 상담 내용' },
    ]);
  }, []);

  return (
    <div>
      <h1>상담사 페이지</h1>
      <div>
      <Link to="/chat-room">채팅방 입장</Link> {/* 예제 ID */}
    </div>
      <div>
        <p>전체 상담한 사람 수: {status.totalClientNum}</p>
        <p>오늘 상담한 사람 수: {status.todayClientNum}</p>
        <p>접속 이후 상담한 사람 수: {status.afterLoginClientNum}</p>
      </div>
      <div>
        <h2>이전 상담 기록</h2>
        {roomList.map((chat) => (
          <div key={chat.id} onClick={() => setSelectedChat(chat)}>
            상담 ID: {chat.id}
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
