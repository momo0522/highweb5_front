import React from 'react';
import {Routes, Route } from 'react-router-dom';
import SelectPage from './pages/SelectPage';
import CounselorPage from './pages/counselor/CounselorPage';
import ClientPage from './pages/ClientPage';
import ChatRoom from './pages/counselorRoom/ChatRoom';
import StompProvider from "./Provider/StompProvider";
import PastCounselorRoom from "./pages/counselorRoom/PastCounselorRoom";
const App = () => {
  return (
    <Routes>
        <Route path="/" element={<SelectPage/>} />
        <Route path="/counselor" element={<CounselorPage/>} />
        <Route path="/client" element={<ClientPage/>} />
        <Route path="/chat-room" element={
            <StompProvider>
                <ChatRoom/>
            </StompProvider>
        } />
        <Route path="/past-room" element={<PastCounselorRoom/>} />
    </Routes>
  );
};

export default App;
