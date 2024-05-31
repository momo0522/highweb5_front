import React from 'react';
import { useNavigate, useLocation} from 'react-router-dom';
import customAxios from '../lib/customAxios';

const ClientPage = () => {
  const clientId = useLocation().state.clientId;
  const navigate = useNavigate();
  console.log(clientId)
  const handleRoomClick = async () => {
    const response = await customAxios.post('counselor-room', {
      clientId: clientId
    });
    const roomId = response.data
    const id = clientId
    navigate('/chat-room', {state: { roomId, id }})
  };

  return (
    <div>
      <h1>상담자 페이지</h1>
      <div onClick={handleRoomClick}>채팅방 입장</div> {/* 예제 ID */}
    </div>
  );
};

export default ClientPage;
