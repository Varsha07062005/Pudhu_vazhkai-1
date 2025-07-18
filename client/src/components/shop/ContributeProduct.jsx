// components/shop/ContributeProduct.jsx
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaTimes, FaUpload, FaClipboardList, FaFileImage, FaTag, FaRegFileAlt, FaShieldAlt, FaUndoAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: ${({ show }) => (show ? 'flex' : 'none')};
  align-items: center; justify-content: center;
  z-index: 1000;
`;

const ModalBox = styled(motion.div)`
  background: white;
  padding: 24px;
  border-radius: 12px;
  width: 450px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 2px solid #6c63ff;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
  font-weight: bold;
  color: #333;
  font-family: 'Poppins', sans-serif;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  transition: all 0.3s ease;
  &:focus {
    border-color: #6c63ff;
    box-shadow: 0 0 5px rgba(108, 99, 255, 0.5);
    outline: none;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  transition: all 0.3s ease;
  &:focus {
    border-color: #6c63ff;
    box-shadow: 0 0 5px rgba(108, 99, 255, 0.5);
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  resize: vertical;
  transition: all 0.3s ease;
  &:focus {
    border-color: #6c63ff;
    box-shadow: 0 0 5px rgba(108, 99, 255, 0.5);
    outline: none;
  }
`;

const Button = styled.button`
  background: linear-gradient(45deg, #6c63ff, #a084ff);
  color: white;
  border: none;
  padding: 10px 16px;
  cursor: pointer;
  border-radius: 6px;
  transition: transform 0.3s ease, background 0.3s ease;
  width: auto;
  font-weight: bold;

  &:hover {
    background: linear-gradient(45deg, #5a52d6, #8a6eff);
    transform: translateY(-2px);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

const ContributeProduct = ({ show, onClose, onPublish }) => {
  const [productData, setProductData] = useState({
    category: '',
    images: [],
    title: '',
    description: '',
    warranty: '',
    returnPolicy: '',
  });

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setProductData({ ...productData, images: files });
  };

  const handleSubmit = () => {
    if (productData.category && productData.title && productData.images.length > 0) {
      onPublish(productData);
      onClose();
    } else {
      alert('Please fill all required fields.');
    }
  };

  if (!show) return null;

  return (
    <Overlay show={show}>
      <ModalBox
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 style={{ fontFamily: 'Poppins, sans-serif' }}>🏳️‍⚧️ Its where trans people can add their products for sale!</h3>
        <FormGroup>
          <Label><FaClipboardList /> Category</Label>
          <Select name="category" value={productData.category} onChange={handleChange}>
            <option value="">Select Category</option>
            <option value="Crafts">Crafts</option>
            <option value="Handmade">Handmade</option>
            <option value="Skincare">Skincare</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label><FaFileImage /> Upload Images</Label>
          <Input type="file" multiple onChange={handleImageUpload} />
        </FormGroup>

        <FormGroup>
          <Label><FaTag /> Product Title</Label>
          <Input type="text" name="title" value={productData.title} onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label><FaRegFileAlt /> Description</Label>
          <TextArea rows="3" name="description" value={productData.description} onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label><FaShieldAlt /> Warranty</Label>
          <Input type="text" name="warranty" value={productData.warranty} onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label><FaUndoAlt /> Return Policy</Label>
          <Input type="text" name="returnPolicy" value={productData.returnPolicy} onChange={handleChange} />
        </FormGroup>

        <ButtonGroup>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Publish</Button>
        </ButtonGroup>
      </ModalBox>
    </Overlay>
  );
};

export default ContributeProduct;
