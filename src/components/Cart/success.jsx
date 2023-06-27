import React from 'react';
import { useNavigate } from 'react-router-dom';
import './success.scss';

const Success = () => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/');
  };

  return (
    <div className="success-container">
      <h2>Thank you for your purchase!</h2>
      <p>Your order was successful.</p>
      <button onClick={handleContinueShopping}>Continue Shopping</button>
    </div>
  );
};

export default Success;
