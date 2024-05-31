import React from 'react';
import { Link } from 'react-router-dom';
import counselorImage from '../assets/counselor.png'
import clientImage from '../assets/client.png'
import '../styles/SelectPage.css';
import {useNavigate} from "react-router-dom";
import customAxios from '../lib/customAxios';

const SelectPage = () => {
  const navigate = useNavigate();
  const clientUrl = `/member/client`;
  const counselorUrl = `/member/counselor`;

  const handleCounselorClick = async() => {
    const response = await customAxios.put(counselorUrl);
    const counselorId = response.data
    navigate('/counselor', {state: { counselorId }})
  };

  const handleClientClick = async () => {
    const response = await customAxios.post(clientUrl);
    const clientId = response.data
    navigate('/client', {state: { clientId }})
  };

  return (
    <div className="container">
      <h1>상담사/상담자 선택</h1>
      <div className="icon">
        <img src={counselorImage} alt="상담사아이콘" width="300" onClick={handleCounselorClick} />
        <div>상담사</div>
      </div>

     <div className="icon" >
      <img src={clientImage} alt="상담자아이콘" width="300" onClick={handleClientClick} />
      <div>상담자<div/> 
      </div>
    </div>
    </div>
  );
};

export default SelectPage;
