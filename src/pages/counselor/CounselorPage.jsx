import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useStatus} from './hooks/useStatus'
import { useRoomList } from './hooks/useRoomList';
import {useRoom} from "./hooks/useRoom";

const CounselorPage = () => {
  const navigate = useNavigate();

  const id = useLocation().state.counselorId;

  const { status } = useStatus();
  const { roomList } = useRoomList();
  const { roomId } = useRoom();

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
    </div>
  );
};

export default CounselorPage;
