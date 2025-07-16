import React, { useState } from 'react';
import styled from '@emotion/styled';
import ProductCard from './ProductCard';
import ShopFilters from './ShopFilters';

const ShopContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
`;

const SearchContainer = styled.div`
  margin-bottom: 2rem;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;

  &:focus {
    border-color: #6a5acd;
    outline: none;
    box-shadow: 0 0 0 2px rgba(106, 90, 205, 0.2);
  }
`;

const ShopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
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
    // Add more products...
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