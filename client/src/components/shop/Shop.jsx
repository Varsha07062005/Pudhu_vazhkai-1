import React, { useState } from 'react';
import styled from '@emotion/styled';
import ProductCard from './ProductCard';
import ShopFilters from './ShopFilters';

const ShopContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  background: linear-gradient(135deg, #f9f9ff, #f0f0f8);
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  font-family: 'Poppins', sans-serif;
`;

const SearchContainer = styled.div`
  margin-bottom: 2rem;
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  background: #fff;

  &:focus {
    border-color: #6c63ff;
    outline: none;
    box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.2);
  }
`;

const ShopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  background: #fff;
  padding: 1rem 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);

  h1 {
    font-size: 2rem;
    color: #333;
  }

  span {
    font-weight: bold;
    color: #6c63ff;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  animation: fadeIn 0.5s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: [0, 10000],
    inStock: true,
    productType: 'all',
    emiEligible: false
  });

  const products = [
    { 
      id: 1, 
      name: 'Estradiol Valerate', 
      price: 450, 
      category: 'hormones', 
      type: 'medicine',
      inStock: true,
      emi: false
    },
    { 
      id: 2, 
      name: 'Testosterone Gel', 
      price: 650, 
      category: 'hormones', 
      type: 'medicine',
      inStock: true,
      emi: false
    },
    { 
      id: 3, 
      name: 'Gender-Affirming Binder', 
      price: 1200, 
      category: 'apparel', 
      type: 'product',
      inStock: true,
      emi: true
    },
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilters = (
      (filters.category === 'all' || product.category === filters.category) &&
      (product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]) &&
      (!filters.inStock || product.inStock) &&
      (filters.productType === 'all' || product.type === filters.productType) &&
      (!filters.emiEligible || product.emi)
    );
    return matchesSearch && matchesFilters;
  });

  return (
    <ShopContainer>
      <SearchContainer>
        <SearchBar 
          type="text" 
          placeholder="Search medicines/products/cosmetics..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <ShopFilters filters={filters} setFilters={setFilters} />
      </SearchContainer>
      
      <ShopHeader>
        <h1>Our Products</h1>
        <span>{filteredProducts.length} products found</span>
      </ShopHeader>
      
      <ProductGrid>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </ShopContainer>
  );
};

export default Shop;
