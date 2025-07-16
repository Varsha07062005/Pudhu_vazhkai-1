import styled from '@emotion/styled';
import { FaRupeeSign, FaShoppingCart, FaHeart } from 'react-icons/fa';
import { MdEmojiObjects } from 'react-icons/md';

const ProductCardContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
`;

const ProductImage = styled.div`
  height: 200px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #666;
`;

const ProductInfo = styled.div`
  padding: 16px;
`;

const ProductTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 16px;
  color: #333;
`;

const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 12px;
  color: #2e7d32;
`;

const EMIBadge = styled.div`
  display: inline-flex;
  align-items: center;
  background: #e3f2fd;
  color: #1976d2;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  margin-bottom: 12px;
`;

const ProductActions = styled.div`
  display: flex;
  gap: 8px;
`;

const ActionButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s;

  &.primary {
    background: #6c63ff;
    color: white;
    &:hover {
      background: #5a52d6;
    }
  }

  &.secondary {
    background: white;
    border: 1px solid #6c63ff;
    color: #6c63ff;
    &:hover {
      background: #f3f1ff;
    }
  }
`;

const ProductCard = ({ product, onAddToCart, onAddToWishlist }) => {
  return (
    <ProductCardContainer>
      <ProductImage>
        {product.name}
      </ProductImage>
      <ProductInfo>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductPrice>
          <FaRupeeSign /> {product.price.toLocaleString('en-IN')}
        </ProductPrice>
        
        {product.emi && (
          <EMIBadge>
            <MdEmojiObjects /> EMI Available
          </EMIBadge>
        )}
        
        <ProductActions>
          <ActionButton className="primary" onClick={onAddToCart}>
            <FaShoppingCart /> Add to Cart
          </ActionButton>
          <ActionButton className="secondary" onClick={onAddToWishlist}>
            <FaHeart /> Wishlist
          </ActionButton>
        </ProductActions>
      </ProductInfo>
    </ProductCardContainer>
  );
};

export default ProductCard;