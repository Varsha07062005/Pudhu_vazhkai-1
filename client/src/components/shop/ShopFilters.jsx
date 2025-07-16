import React from 'react';
import styled from '@emotion/styled';
import { 
  FaFilter, 
  FaRupeeSign, 
  FaCheck, 
  FaRegCreditCard,
  FaPlusCircle,
  FaHeadset
} from 'react-icons/fa';

const FiltersContainer = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
`;

const FilterGroup = styled.div`
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const FilterTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #6a5acd;
  font-size: 1rem;
`;

const FilterOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const FilterOption = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${props => props.active ? '#6a5acd' : '#f5f5f5'};
  color: ${props => props.active ? 'white' : '#333'};
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.active ? '#5a4fbd' : '#e9e9e9'};
  }
`;

const PriceRange = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex-wrap: wrap;
`;

const PriceInput = styled.input`
  width: 100px;
  padding: 0.6rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: #6a5acd;
    box-shadow: 0 0 0 2px rgba(106, 90, 205, 0.2);
  }
`;

const CurrencySymbol = styled.span`
  color: #6a5acd;
  font-weight: bold;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  font-size: 0.95rem;
  
  input {
    width: 18px;
    height: 18px;
    accent-color: #6a5acd;
    cursor: pointer;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  
  &.primary {
    background: #6a5acd;
    color: white;
    border: none;
    
    &:hover {
      background: #5a4fbd;
    }
  }
  
  &.secondary {
    background: white;
    border: 1px solid #6a5acd;
    color: #6a5acd;
    
    &:hover {
      background: #f3f1ff;
    }
  }
`;

const ShopFilters = ({ filters, setFilters, onContributeClick, onCustomerCareClick }) => {
  const categories = [
    { id: 'all', name: 'All Categories', icon: <FaFilter /> },
    { id: 'hormones', name: 'Hormones', icon: <FaRegCreditCard /> },
    { id: 'apparel', name: 'Apparel', icon: <FaRegCreditCard /> },
    { id: 'cosmetics', name: 'Cosmetics', icon: <FaRegCreditCard /> }
  ];

  const productTypes = [
    { id: 'all', name: 'All Types', icon: <FaFilter /> },
    { id: 'medicine', name: 'Medicines', icon: <FaRegCreditCard /> },
    { id: 'product', name: 'Products', icon: <FaRegCreditCard /> },
    { id: 'cosmetic', name: 'Cosmetics', icon: <FaRegCreditCard /> }
  ];

  const handleCategoryChange = (category) => {
    setFilters({ ...filters, category });
  };

  const handleTypeChange = (type) => {
    setFilters({ ...filters, productType: type });
  };

  const handlePriceChange = (e, index) => {
    const newPriceRange = [...filters.priceRange];
    newPriceRange[index] = Number(e.target.value);
    setFilters({ ...filters, priceRange: newPriceRange });
  };

  const handleStockChange = () => {
    setFilters({ ...filters, inStock: !filters.inStock });
  };

  const handleEMIChange = () => {
    setFilters({ ...filters, emiEligible: !filters.emiEligible });
  };

  return (
    <FiltersContainer>
      <FilterGroup>
        <FilterTitle>
          <FaFilter size={18} /> Categories
        </FilterTitle>
        <FilterOptions>
          {categories.map(category => (
            <FilterOption
              key={category.id}
              active={filters.category === category.id}
              onClick={() => handleCategoryChange(category.id)}
            >
              {category.icon}
              {category.name}
            </FilterOption>
          ))}
        </FilterOptions>
      </FilterGroup>
      
      <FilterGroup>
        <FilterTitle>
          <FaFilter size={18} /> Product Type
        </FilterTitle>
        <FilterOptions>
          {productTypes.map(type => (
            <FilterOption
              key={type.id}
              active={filters.productType === type.id}
              onClick={() => handleTypeChange(type.id)}
            >
              {type.icon}
              {type.name}
            </FilterOption>
          ))}
        </FilterOptions>
      </FilterGroup>
      
      <FilterGroup>
        <FilterTitle>
          <FaRupeeSign size={18} /> Price Range
        </FilterTitle>
        <PriceRange>
          <CurrencySymbol>₹</CurrencySymbol>
          <PriceInput
            type="number"
            value={filters.priceRange[0]}
            onChange={(e) => handlePriceChange(e, 0)}
            min="0"
            placeholder="Min"
          />
          <span>to</span>
          <CurrencySymbol>₹</CurrencySymbol>
          <PriceInput
            type="number"
            value={filters.priceRange[1]}
            onChange={(e) => handlePriceChange(e, 1)}
            min={filters.priceRange[0]}
            placeholder="Max"
          />
        </PriceRange>
      </FilterGroup>
      
      <FilterGroup>
        <CheckboxLabel>
          <input
            type="checkbox"
            checked={filters.inStock}
            onChange={handleStockChange}
          />
          <FaCheck /> In Stock Only
        </CheckboxLabel>
      </FilterGroup>
      
      <FilterGroup>
        <CheckboxLabel>
          <input
            type="checkbox"
            checked={filters.emiEligible}
            onChange={handleEMIChange}
          />
          <FaRegCreditCard /> EMI Available
        </CheckboxLabel>
      </FilterGroup>

      <ActionButtons>
        <ActionButton 
          className="primary" 
          onClick={onContributeClick}
          title="Contribute cosmetic products to our marketplace"
        >
          <FaPlusCircle /> Contribute
        </ActionButton>
        <ActionButton 
          className="secondary" 
          onClick={onCustomerCareClick}
        >
          <FaHeadset /> Customer Care
        </ActionButton>
      </ActionButtons>
    </FiltersContainer>
  );
};

export default ShopFilters;