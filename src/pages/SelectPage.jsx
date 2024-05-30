import React from 'react';
import { Link } from 'react-router-dom';
import counselorImage from '../assets/counselor.png'
import clientImage from '../assets/client.png'
import '../styles/SelectPage.css';

const SelectPage = () => {
  return (
    <div className="container">
      <h1>상담사/상담자 선택</h1>
      <div className="icon">
      <img src={counselorImage} alt="상담사아이콘" width="300" />
      <div className="text">
      <Link to="/counselor">상담사</Link>
      </div>
      </div>

     <div className="icon">
      <img src={clientImage} alt="상담자아이콘" width="300" />
      <div className="text">
      <Link to="/client">상담자</Link> 
      </div>
      </div>
    </div>
  );
};

export default SelectPage;
