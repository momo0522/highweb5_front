import React from 'react';
import {Routes, Route } from 'react-router-dom';
import SelectPage from './pages/SelectPage';
import CounselorPage from './pages/counselor/CounselorPage';
import ClientPage from './pages/client/ClientPage';
import CounselorChatRoom from './pages/counselor/CounselorChatRoom';
import ChatRoom from './pages/counselorRoom/ChatRoom';
const App = () => {
  return (
    <Routes>
        <Route path="/" element={<SelectPage/>} />
        <Route path="/counselor" element={<CounselorPage/>} />
        <Route path="/client" element={<ClientPage/>} />
        <Route path="/chat-room" element={<ChatRoom/>} />
    </Routes>
  );
};

export default App;
