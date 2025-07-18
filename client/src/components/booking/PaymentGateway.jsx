import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { FaCheckCircle } from 'react-icons/fa';

const PaymentBox = styled.div`
  background: ${props => props.theme.colors.accent};
  border-radius: 12px;
  padding: ${props => props.theme.spacing.lg};
  box-shadow: ${props => props.theme.shadows.medium};
  text-align: center;
`;

const PayButton = styled.button`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.accent};
  border: none;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: ${props => props.theme.spacing.lg};
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const PaymentGateway = ({ amount, onSuccess }) => {

  const loadRazorpay = () => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  };

  useEffect(() => {
    loadRazorpay();
  }, []);

  const handlePayment = () => {
    const options = {
      key: 'YOUR_RAZORPAY_KEY',  // Replace with your Razorpay Key ID
      amount: amount * 100, // Razorpay works in paise
      currency: 'INR',
      name: 'TransSupport Medical Booking',
      description: 'Consultation Payment',
      handler: function (response) {
        console.log(response);
        onSuccess(response);
      },
      prefill: {
        name: 'Varsha',
        email: 'varsha@example.com',
        contact: '9999999999'
      },
      theme: {
        color: '#0d6efd'
      }
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <PaymentBox>
      <h2>Proceed with Payment</h2>
      <p>Amount to Pay: <strong>₹{amount}</strong></p>

      <PayButton onClick={handlePayment}>Pay with Razorpay</PayButton>

      <p style={{ marginTop: '20px', color: '#28a745' }}>
        <FaCheckCircle /> 100% Secure Payments Powered by Razorpay
      </p>
    </PaymentBox>
  );
};

export default PaymentGateway;
