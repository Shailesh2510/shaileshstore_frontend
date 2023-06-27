import React from 'react';
import { useNavigate } from 'react-router-dom';
import './unsucces.scss';

const UnSuccess = () => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/');
  };

  return (
    <div className="success-container">
      <h2>Something Goes Wrong!</h2>
      <p>Your order was  not successful.</p>
      <button onClick={handleContinueShopping}>Continue Shopping</button>
    </div>
  );
};

export default UnSuccess;
