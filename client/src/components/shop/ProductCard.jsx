import styled from '@emotion/styled';
import { FaRupeeSign, FaShoppingCart, FaHeart } from 'react-icons/fa';
import { MdEmojiObjects } from 'react-icons/md';

const ProductCardContainer = styled.div`
  border: none;
  border-radius: 16px;
  overflow: hidden;
  background: linear-gradient(135deg, #ffffff, #f9f9f9);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ProductImage = styled.img`
  height: 220px;
  width: 100%;
  object-fit: cover;
  border-bottom: 1px solid #ddd;
`;

const ProductInfo = styled.div`
  padding: 20px;
  font-family: 'Poppins', sans-serif;
`;

const ProductTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 18px;
  color: #333;
`;

const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 12px;
  color: #4caf50;
  font-size: 16px;
`;

const EMIBadge = styled.div`
  display: inline-flex;
  align-items: center;
  background: #e0f7fa;
  color: #00796b;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  margin-bottom: 12px;
  font-weight: 500;
`;

const ProductActions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const ActionButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  font-weight: bold;

  &.primary {
    background: linear-gradient(45deg, #6c63ff, #957dff);
    color: white;
    &:hover {
      background: linear-gradient(45deg, #5a52d6, #7c67e0);
      transform: translateY(-2px);
    }
  }

  &.secondary {
    background: white;
    border: 2px solid #6c63ff;
    color: #6c63ff;
    &:hover {
      background: #f3f1ff;
      transform: translateY(-2px);
    }
  }
`;

const ProductCard = ({ product, toggleCart, toggleWishlist, cart, wishlist }) => {
  const isInCart = cart.includes(product.id);
  const isInWishlist = wishlist.includes(product.id);

  return (
    <ProductCardContainer>
      <ProductImage src={product.img || 'https://via.placeholder.com/300'} alt={product.name} />
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
          <ActionButton className="primary" onClick={() => toggleCart(product.id)}>
            <FaShoppingCart /> {isInCart ? 'Remove from Cart' : 'Add to Cart'}
          </ActionButton>
          <ActionButton className="secondary" onClick={() => toggleWishlist(product.id)}>
            <FaHeart /> {isInWishlist ? 'Remove from Wishlist' : 'Wishlist'}
          </ActionButton>
        </ProductActions>
      </ProductInfo>
    </ProductCardContainer>
  );
};

export default ProductCard;
