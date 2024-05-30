import React from 'react';
import {Routes, Route } from 'react-router-dom';
import SelectPage from './pages/SelectPage';
import CounselorPage from './pages/CounselorPage';
import ClientPage from './pages/ClientPage';
import ClientChatRoom from './pages/ClientChatRoom';
import CounselorChatRoom from './pages/CounselorChatRoom';
const App = () => {
  return (
    <Routes>
        <Route path="/" element={<SelectPage/>} />
        <Route path="/counselor" element={<CounselorPage/>} />
        <Route path="/client" element={<ClientPage/>} />
        <Route path="/clientchatroom/:id" element={<ClientChatRoom/>} />
        <Route path="/counselorchatroom/:id" element={<CounselorChatRoom/>} />
    </Routes>
  );
};

export default App;
