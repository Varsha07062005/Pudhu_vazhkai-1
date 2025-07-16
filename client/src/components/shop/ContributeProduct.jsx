// components/shop/ContributeProduct.jsx
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaTimes, FaUpload } from 'react-icons/fa';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const ContributeProduct = ({ onClose }) => {
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    category: 'cosmetics',
    description: '',
    images: []
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    onClose();
  };

  return (
    <ModalBackdrop>
      <ModalContent>
        <CloseButton onClick={onClose}><FaTimes /></CloseButton>
        <h2>Contribute Cosmetic Product</h2>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <label>Product Name</label>
            <input 
              type="text" 
              value={productData.name}
              onChange={(e) => setProductData({...productData, name: e.target.value})}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <label>Price (₹)</label>
            <input 
              type="number" 
              value={productData.price}
              onChange={(e) => setProductData({...productData, price: e.target.value})}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <label>Description</label>
            <textarea 
              value={productData.description}
              onChange={(e) => setProductData({...productData, description: e.target.value})}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <label>Product Images</label>
            <div>
              <button type="button">
                <FaUpload /> Upload Images
              </button>
            </div>
          </FormGroup>
          
          <button type="submit">Submit Product</button>
        </form>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default ContributeProduct;