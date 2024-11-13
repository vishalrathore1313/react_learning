import React,{useContext} from "react";
import styled from "styled-components";
import UserContext from "../context/UserContext";

function Filter() {
  const { priceRange, setPriceRang, category, setCategory } =
    useContext(UserContext);
    
  return (
    <Container>
      <Select /*value={category}*/ onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Category</option>
        <option value="clothing">Clothing</option>
        <option value="electronics">Electronics</option>
        <option value="groceries">Groceries</option>
      </Select>

      <Select /*value={priceRange}*/ onChange={(e) => setPriceRang(e.target.value)}>
        <option value="">All Price Range</option>
        <option value="0-50">₹0 - ₹50</option>
        <option value="50-100">₹50 - ₹100</option>
        <option value="100-150">₹100 - ₹150</option>
        <option value="200+">₹200+</option>
      </Select>
    </Container>
  );
}

export default Filter;

const Container = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  background-color: gray;
  padding: 0 10px;
  gap: 15px;
`;

const Select = styled.select`
  height: 30px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: white;
  color: #333;
  font-size: 14px;
  cursor: pointer;
`;
