// pages/Checkout.jsx
import React from 'react';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaArrowLeft } from 'react-icons/fa';

const CheckoutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: #6c63ff;
  cursor: pointer;
  margin-bottom: 24px;
  font-size: 16px;
`;

const CheckoutTitle = styled.h1`
  margin-bottom: 24px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid #eee;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid #eee;
  font-weight: bold;
  font-size: 18px;
`;

const PayButton = styled.button`
  width: 100%;
  padding: 16px;
  background: #6c63ff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 32px;
  &:hover {
    background: #5a52d6;
  }
`;

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || [];

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <CheckoutContainer>
      <BackButton onClick={() => navigate(-1)}>
        <FaArrowLeft /> Back to Shop
      </BackButton>
      
      <CheckoutTitle>
        <FaShoppingCart /> Checkout
      </CheckoutTitle>
      
      {cart.map(item => (
        <CartItem key={item.id}>
          <div>{item.name}</div>
          <div>₹{item.price.toLocaleString('en-IN')}</div>
        </CartItem>
      ))}
      
      <Total>
        <div>Total</div>
        <div>₹{total.toLocaleString('en-IN')}</div>
      </Total>
      
      <PayButton onClick={() => alert('Payment would be processed here')}>
        Proceed to Payment
      </PayButton>
    </CheckoutContainer>
  );
};

export default Checkout;