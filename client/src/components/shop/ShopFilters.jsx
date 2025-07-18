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
  background: linear-gradient(135deg, #ffffff, #f8f9ff);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  font-family: 'Poppins', sans-serif;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  }
`;

const FilterGroup = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e0e0e0;

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
  color: #6c63ff;
  font-size: 1.1rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
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
  background: ${props => props.active ? 'linear-gradient(135deg, #6c63ff, #5848e5)' : '#f1f1f9'};
  color: ${props => props.active ? 'white' : '#333'};
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 12px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active ? '#5848e5' : '#e6e4ff'};
    transform: scale(1.05);
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
  font-family: 'Poppins', sans-serif;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #6c63ff;
    box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.2);
  }
`;

const CurrencySymbol = styled.span`
  color: #6c63ff;
  font-weight: bold;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  font-size: 0.95rem;
  font-family: 'Poppins', sans-serif;

  input {
    width: 18px;
    height: 18px;
    accent-color: #6c63ff;
    cursor: pointer;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.5px;

  &.primary {
    background: linear-gradient(135deg, #6c63ff, #5848e5);
    color: white;
    border: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    &:hover {
      background: #5a4fbd;
      transform: translateY(-2px);
    }
  }

  &.secondary {
    background: white;
    border: 2px solid #6c63ff;
    color: #6c63ff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

    &:hover {
      background: #f9f9ff;
      transform: translateY(-2px);
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
        <FilterTitle><FaFilter size={18} /> Categories</FilterTitle>
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
        <FilterTitle><FaFilter size={18} /> Product Type</FilterTitle>
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
        <FilterTitle><FaRupeeSign size={18} /> Price Range</FilterTitle>
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
