import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';
import { FaSearch, FaPlusCircle, FaHeadset, FaTimes, FaShoppingCart, FaHeart, FaChevronDown, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import ContributeProduct from '../../components/shop/ContributeProduct';
import ShopFilters from '../../components/shop/ShopFilters';

const [filters, setFilters] = useState({
  category: 'all',
  priceRange: [0, 10000],
  inStock: true,
  productType: 'all',
  emiEligible: false
});

const filteredProducts = products.filter(product => {
  const matchesCategory = filters.category === 'all' || product.category === filters.category;
  const matchesType = filters.productType === 'all' || product.type === filters.productType;
  const matchesPrice = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
  const matchesStock = !filters.inStock || product.inStock;
  const matchesEMI = !filters.emiEligible || product.emi;

  return matchesCategory && matchesType && matchesPrice && matchesStock && matchesEMI;
});

const ShopContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
  flex-wrap: wrap;
`;

const SearchBar = styled.div`
  flex: 1;
  min-width: 300px;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem 0.8rem 3rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  &:focus {
    outline: none;
    border-color: #6c63ff;
    box-shadow: 0 0 0 2px rgba(108, 99, 255, 0.2);
  }
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid #6c63ff;
  &.primary {
    background: #6c63ff;
    color: white;
    &:hover {
      background: #5a52d6;
    }
  }
  &.secondary {
    background: white;
    color: #6c63ff;
    &:hover {
      background: #f3f1ff;
    }
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  padding: 1rem;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
`;

const ProductActions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const ReviewsSection = styled.section`
  margin-top: 4rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
`;

const ReviewCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin-bottom: 1rem;
`;

const ModalOverlay = styled.div`
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
  width: 90%;
  max-width: 500px;
  position: relative;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
`;

const Shop = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('cosmetics');
  const [productForm, setProductForm] = useState({ name: '', tagline: '', price: '', description: '' });
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const supportRef = useRef(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const [newReview, setNewReview] = useState('');

const handlePublishProduct = (productData) => {
  console.log('Product Published:', productData);
  // Add your logic to update products list or API call here!
  setShowAddProduct(false);  // Hide the modal after publish
};

  const products = [
    { id: 1, name: 'Testosterone Gel', price: 499, img: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Estradiol Patches', price: 399, img: 'https://via.placeholder.com/300' },
    { id: 3, name: 'Binder', price: 999, img: 'https://via.placeholder.com/300' },
    { id: 4, name: 'Lipstick', price: 199, img: 'https://via.placeholder.com/300' }
  ];

  const toggleCart = (id) => {
    setCart(cart.includes(id) ? cart.filter(item => item !== id) : [...cart, id]);
  };

  const toggleWishlist = (id) => {
    setWishlist(wishlist.includes(id) ? wishlist.filter(item => item !== id) : [...wishlist, id]);
  };

  const reviews = [
    { id: 1, name: "Priya K.", rating: 4.5, comment: "Love the foundation! Perfect shade match.", date: "2023-05-15" },
    { id: 2, name: "Aryan S.", rating: 5, comment: "Excellent quality binders! Very comfortable.", date: "2023-06-22" },
    { id: 3, name: "Maya T.", rating: 3, comment: "Good but some shades didn't match my skin tone.", date: "2023-07-10" },
    { id: 4, name: "Rohan P.", rating: 4, comment: "Fast delivery and good packaging.", date: "2023-07-15" },
    { id: 5, name: "Neha G.", rating: 5, comment: "Will definitely buy again! Amazing products.", date: "2023-07-20" }
  ];

  const faqs = [
    { question: "How do I track my order?", answer: "You'll receive a tracking link via email once your order is shipped." },
    { question: "What payment methods do you accept?", answer: "We accept all major cards, UPI, net banking, and wallets." },
    { question: "What is your return policy?", answer: "We offer 15-day returns for unopened products." },
    { question: "How can I contact support?", answer: "Our support is available 24/7 via chat, email, or phone." },
    { question: "Do you offer international shipping?", answer: "Currently we only ship within India." }
  ];

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setNewReview('');
  };

  const scrollToSupport = () => {
    supportRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  

  return (
    
    <ShopContainer>
      <TopBar>
        <SearchBar>
          <FaSearch style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#6c63ff' }} />
          <SearchInput placeholder="Search medicines, cosmetics, products..." />
        </SearchBar>
 
<ContributeProduct 
  show={showAddProduct} 
  onClose={() => setShowAddProduct(false)} 
  onPublish={handlePublishProduct} 
/>



        <div style={{ display: 'flex', gap: '1rem' }}>
          <ActionButton className="secondary" onClick={() => setShowAddProduct(true)}>
            <FaPlusCircle /> Add Product
          </ActionButton>
          <ActionButton className="secondary" onClick={scrollToSupport}>
            <FaHeadset /> Customer Care
          </ActionButton>
        </div>
      </TopBar>

      <ProductGrid>
        {products.map(product => (
          <ProductCard key={product.id}>
            <ProductImage src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <ProductActions>
              <button onClick={() => toggleCart(product.id)}>{cart.includes(product.id) ? '🛒 Added' : '🛒 Add to Cart'}</button>
              <button onClick={() => toggleWishlist(product.id)}>{wishlist.includes(product.id) ? '❤️ Wishlisted' : '🤍 Wishlist'}</button>
            </ProductActions>
          </ProductCard>
        ))}
      </ProductGrid>

      <ReviewsSection ref={supportRef}>
        <h2>Customer Care</h2>
        <div style={{ marginTop: '2rem' }}>
          <h3>Recent Customer Reviews</h3>
          {reviews.map(review => (
            <ReviewCard key={review.id}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong>{review.name}</strong>
                <div style={{ color: '#ffc107', display: 'flex' }}>
                  {[1, 2, 3, 4, 5].map(star => (
                    star <= review.rating ? 
                      (star - 0.5 <= review.rating ? <FaStar key={star} /> : <FaStarHalfAlt key={star} />) : 
                      <FaRegStar key={star} />
                  ))}
                </div>
              </div>
              <p style={{ margin: '0.5rem 0' }}>{review.comment}</p>
              <small style={{ color: '#666' }}>{review.date}</small>
            </ReviewCard>
          ))}
        </div>
        <div style={{ marginTop: '2rem' }}>
          <h3>Share Your Experience</h3>
          <form onSubmit={handleReviewSubmit}>
            <FormTextarea value={newReview} onChange={(e) => setNewReview(e.target.value)} placeholder="Tell us about your experience..." style={{ marginBottom: '1rem' }} />
            <ActionButton type="submit" className="primary">Submit Review</ActionButton>
          </form>
        </div>
        <div style={{ marginTop: '3rem' }}>
          <h3>Frequently Asked Questions</h3>
          {faqs.map((faq, index) => (
            <div key={index} style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: '1rem', background: '#eee', borderRadius: '4px' }} onClick={() => setActiveFaq(activeFaq === index ? null : index)}>
                <strong>{faq.question}</strong>
                <FaChevronDown style={{ transform: activeFaq === index ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
              </div>
              {activeFaq === index && (
                <div style={{ padding: '1rem', background: '#f9f9f9', borderBottomLeftRadius: '4px', borderBottomRightRadius: '4px' }}>{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </ReviewsSection>
    </ShopContainer>
  );
};

export default Shop;
