import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const CounselorPage = () => {
  const [totalClients, setTotalClients] = useState(0);
  const [todayClients, setTodayClients] = useState(0);
  const [sessionClients, setSessionClients] = useState(0);
  const [selectedChat, setSelectedChat] = useState(null);
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    // 데이터 로드 예제
    setTotalClients(100); // 예제 데이터
    setTodayClients(5); // 예제 데이터
    setSessionClients(3); // 예제 데이터
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
      <Link to="/counselorchatroom/1">채팅방 입장</Link> {/* 예제 ID */}
    </div>
      <div>
        <p>전체 상담한 사람 수: {totalClients}</p>
        <p>오늘 상담한 사람 수: {todayClients}</p>
        <p>접속 이후 상담한 사람 수: {sessionClients}</p>
      </div>
      <div>
        <h2>이전 상담 기록</h2>
        {chatHistory.map((chat) => (
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
