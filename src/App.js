import React from 'react';
import {Routes, Route } from 'react-router-dom';
import SelectPage from './pages/SelectPage';
import CounselorPage from './pages/counselor/CounselorPage';
import ClientPage from './pages/client/ClientPage';
import ClientChatRoom from './pages/client/ClientChatRoom';
import CounselorChatRoom from './pages/counselor/CounselorChatRoom';
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
