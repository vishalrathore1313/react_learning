import React, { useContext } from "react";
import styled from "styled-components";
import UserContext from "../context/UserContext";

function Filter() {
  const {setPriceRang,setCategory} =
    useContext(UserContext);

  return (
    <Container>
      <Select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Category</option>
        <option value="clothing">Clothing</option>
        <option value="electronics">Electronics</option>
        <option value="groceries">Groceries</option>
      </Select>

      <Select onChange={(e) => setPriceRang(e.target.value)}>
        <option value="">All Price Range</option>
        <option value="50-100">₹50 - ₹100</option>
        <option value="100-200">₹100 - ₹200</option>
        <option value="200-500">₹200 - ₹500</option>
        <option value="500-1000">₹500 - ₹1000</option>
        <option value="1000-2000">₹1000 - ₹2000</option>
        <option value="2000-3000">₹2000 - ₹3000</option>
        <option value="3000+">₹3000+</option>
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
