import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';
import { 
  FaSearch, FaShoppingCart, FaHeart, FaPlusCircle, 
  FaHeadset, FaTimes, FaStar, FaStarHalfAlt, FaRegStar,
  FaChevronDown, FaFilter
} from 'react-icons/fa';

// ===== STYLED COMPONENTS ===== //
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

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
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

// ===== MAIN COMPONENT ===== //
const Shop = () => {
  // State management
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('cosmetics');
  const [productForm, setProductForm] = useState({
    name: '',
    tagline: '',
    price: '',
    description: ''
  });
  const [reviews, setReviews] = useState([
    { id: 1, name: "Priya K.", rating: 4.5, comment: "Love the foundation! Perfect shade match.", date: "2023-05-15" },
    { id: 2, name: "Aryan S.", rating: 5, comment: "Excellent quality binders! Very comfortable.", date: "2023-06-22" },
    { id: 3, name: "Maya T.", rating: 3, comment: "Good but some shades didn't match my skin tone.", date: "2023-07-10" },
    { id: 4, name: "Rohan P.", rating: 4, comment: "Fast delivery and good packaging.", date: "2023-07-15" },
    { id: 5, name: "Neha G.", rating: 5, comment: "Will definitely buy again! Amazing products.", date: "2023-07-20" }
  ]);
  const [newReview, setNewReview] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);
  const supportRef = useRef(null);

  const faqs = [
    { 
      question: "How do I track my order?", 
      answer: "You'll receive a tracking link via email once your order is shipped. You can also check order status in your account dashboard." 
    },
    { 
      question: "What payment methods do you accept?", 
      answer: "We accept all major credit/debit cards, UPI payments, net banking, and select digital wallets." 
    },
    { 
      question: "What is your return policy?", 
      answer: "We offer 15-day returns for unopened products. Cosmetic items must be sealed for hygiene reasons." 
    },
    { 
      question: "How can I contact customer support?", 
      answer: "Our support team is available 24/7 via chat, email (support@transcare.com), or phone (+91 9876543210)." 
    },
    { 
      question: "Do you offer international shipping?", 
      answer: "Currently we only ship within India, but we're working to expand internationally soon!" 
    }
  ];

  const handleAddProduct = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Adding product:', { ...productForm, category: selectedCategory });
    setShowAddProduct(false);
    setProductForm({
      name: '',
      tagline: '',
      price: '',
      description: ''
    });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.trim()) {
      const newReviewObj = {
        id: reviews.length + 1,
        name: "You", // Would normally come from user auth
        rating: 5, // Would normally come from rating input
        comment: newReview,
        date: new Date().toISOString().split('T')[0]
      };
      setReviews([newReviewObj, ...reviews]);
      setNewReview('');
    }
  };

  const scrollToSupport = () => {
    setTimeout(() => {
      supportRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <ShopContainer>
      {/* ===== TOP BAR ===== */}
      <TopBar>
        <SearchBar>
          <FaSearch style={{ 
            position: 'absolute', 
            left: '1rem', 
            top: '50%', 
            transform: 'translateY(-50%)',
            color: '#6c63ff'
          }} />
          <SearchInput 
            placeholder="Search medicines, cosmetics, products..." 
          />
        </SearchBar>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <ActionButton 
            className="secondary" 
            onClick={() => setShowAddProduct(true)}
          >
            <FaPlusCircle /> Add Product
          </ActionButton>
          <ActionButton 
            className="secondary" 
            onClick={scrollToSupport}
          >
            <FaHeadset /> Customer Care
          </ActionButton>
        </div>
      </TopBar>

      {/* ===== PRODUCT FILTERS ===== */}
      {/* Your ShopFilters component would go here */}
      
      {/* ===== PRODUCT GRID ===== */}
      <ProductGrid>
        {/* Your ProductCard components would go here */}
      </ProductGrid>

      {/* ===== ADD PRODUCT MODAL ===== */}
      {showAddProduct && (
        <ModalOverlay onClick={() => setShowAddProduct(false)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={() => setShowAddProduct(false)}>
              <FaTimes />
            </CloseButton>
            <h2>Add New Product</h2>
            <form onSubmit={handleAddProduct}>
              <FormGroup>
                <FormLabel>Category</FormLabel>
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  style={{ 
                    width: '100%', 
                    padding: '0.8rem', 
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                >
                  <option value="cosmetics">Cosmetics</option>
                  <option value="skincare">Skin Care</option>
                  <option value="handcrafts">Handcrafts</option>
                </select>
              </FormGroup>

              <FormGroup>
                <FormLabel>Product Name</FormLabel>
                <FormInput 
                  type="text" 
                  value={productForm.name}
                  onChange={(e) => setProductForm({...productForm, name: e.target.value})}
                  placeholder="Enter product name"
                  required
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Catchy Tagline</FormLabel>
                <FormInput 
                  type="text" 
                  value={productForm.tagline}
                  onChange={(e) => setProductForm({...productForm, tagline: e.target.value})}
                  placeholder="Short catchy phrase (max 50 chars)"
                  maxLength="50"
                  required
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Price (₹)</FormLabel>
                <FormInput 
                  type="number" 
                  value={productForm.price}
                  onChange={(e) => setProductForm({...productForm, price: e.target.value})}
                  placeholder="Enter price"
                  min="0"
                  step="0.01"
                  required
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Description</FormLabel>
                <FormTextarea 
                  value={productForm.description}
                  onChange={(e) => setProductForm({...productForm, description: e.target.value})}
                  placeholder="Detailed product description"
                  required
                />
              </FormGroup>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                <ActionButton 
                  type="button"
                  className="secondary" 
                  onClick={() => setShowAddProduct(false)}
                >
                  Cancel
                </ActionButton>
                <ActionButton 
                  type="submit"
                  className="primary"
                >
                  Add Product
                </ActionButton>
              </div>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* ===== CUSTOMER CARE SECTION ===== */}
      <ReviewsSection ref={supportRef}>
        <h2>Customer Care</h2>
        
        {/* Recent Reviews */}
        <div style={{ marginTop: '2rem' }}>
          <h3>Recent Customer Reviews</h3>
          {reviews.slice(0, 5).map(review => (
            <ReviewCard key={review.id}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong>{review.name}</strong>
                <div style={{ color: '#ffc107', display: 'flex' }}>
                  {[1, 2, 3, 4, 5].map(star => (
                    star <= review.rating ? 
                      (star - 0.5 <= review.rating ? 
                        <FaStar key={star} /> : 
                        <FaStarHalfAlt key={star} />) : 
                      <FaRegStar key={star} />
                  ))}
                </div>
              </div>
              <p style={{ margin: '0.5rem 0' }}>{review.comment}</p>
              <small style={{ color: '#666' }}>{review.date}</small>
            </ReviewCard>
          ))}
        </div>

        {/* Leave Review */}
        <div style={{ marginTop: '2rem' }}>
          <h3>Share Your Experience</h3>
          <form onSubmit={handleReviewSubmit}>
            <FormTextarea
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              placeholder="Tell us about your experience with our products..."
              style={{ marginBottom: '1rem' }}
            />
            <ActionButton 
              type="submit"
              className="primary"
            >
              Submit Review
            </ActionButton>
          </form>
        </div>

        {/* FAQs */}
        <div style={{ marginTop: '3rem' }}>
          <h3>Frequently Asked Questions</h3>
          {faqs.map((faq, index) => (
            <div key={index} style={{ marginBottom: '1rem' }}>
              <div 
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  cursor: 'pointer',
                  padding: '1rem',
                  background: '#eee',
                  borderRadius: '4px'
                }}
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              >
                <strong>{faq.question}</strong>
                <FaChevronDown style={{ 
                  transform: activeFaq === index ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }} />
              </div>
              {activeFaq === index && (
                <div style={{ 
                  padding: '1rem',
                  background: '#f9f9f9',
                  borderBottomLeftRadius: '4px',
                  borderBottomRightRadius: '4px'
                }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </ReviewsSection>
    </ShopContainer>
  );
};

export default Shop;