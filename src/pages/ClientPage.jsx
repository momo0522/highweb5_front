import React from 'react';
import { Link } from 'react-router-dom';

const ClientPage = () => {
  return (
    <div>
      <h1>상담자 페이지</h1>
      <Link to="/clientchatroom/1}">채팅방 입장</Link> {/* 예제 ID */}
    </div>
  );
};

export default ClientPage;
