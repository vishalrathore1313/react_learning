import React, { useState } from "react";
import UserContext from "./UserContext";
import Demoimage from "../image/demoimage.jpg";

const UserContextProvider = ({ children }) => {
  const [priceRange, setPriceRang] = useState();
  const [category, setCategory] = useState();
  const [cartItem, setCartItem] = useState([]);
  const [quantity, setQuantity] = useState([
    {
      id: null,
      count: 1
    }
  ]);
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "T-shirt",
      price: "101",
      category: "clothing",
      description:
        "bhbhjsbhjdbjhwbdjwbdhwbdwbdhwbdjnqwjkdnjqwndjkqwndjnqwdjnwqhdhwd",
      image: Demoimage,
    },
    {
      id: 2,
      title: "T-Shirt",
      price: "200",
      category: "clothing",
      description:
        "bhbhjsbhjdbjhwbdjwbdhwbdwbdhwbdjnqwjkdnjqwndjkqwndjnqwdjnwqhdhwd",
      image: Demoimage,
    },
    {
      id: 3,
      title: "T-Shirt",
      price: "23",
      category: "clothing",
      description:
        "bhbhjsbhjdbjhwbdjwbdhwbdwbdhwbdjnqwjkdnjqwndjkqwndjnqwdjnwqhdhwd",
      image: Demoimage,
    },
    {
      id: 4,
      title: "T-Shirt",
      price: "78",
      category: "clothing",
      description:
        "bhbhjsbhjdbjhwbdjwbdhwbdwbdhwbdjnqwjkdnjqwndjkqwndjnqwdjnwqhdhwd",
      image: Demoimage,
    },
    {
      id: 5,
      title: "T-Shirt",
      price: "12",
      category: "clothing",
      description:
        "bhbhjsbhjdbjhwbdjwbdhwbdwbdhwbdjnqwjkdnjqwndjkqwndjnqwdjnwqhdhwd",
      image: Demoimage,
    },
    {
      id: 6,
      title: "T-Shirt",
      price: "156",
      category: "clothing",
      description:
        "bhbhjsbhjdbjhwbdjwbdhwbdwbdhwbdjnqwjkdnjqwndjkqwndjnqwdjnwqhdhwd",
      image: Demoimage,
    },
    {
      id: 7,
      title: "Television",
      price: "67",
      category: "electronics",
      description:
        "bhbhjsbhjdbjhwbdjwbdhwbdwbdhwbdjnqwjkdnjqwndjkqwndjnqwdjnwqhdhwd",
      image: Demoimage,
    },
    {
      id: 8,
      title: "Television",
      price: "45",
      category: "electronics",
      description:
        "bhbhjsbhjdbjhwbdjwbdhwbdwbdhwbdjnqwjkdnjqwndjkqwndjnqwdjnwqhdhwd",
      image: Demoimage,
    },
    {
      id: 9,
      title: "Television",
      price: "99",
      category: "electronics",
      description:
        "bhbhjsbhjdbjhwbdjwbdhwbdwbdhwbdjnqwjkdnjqwndjkqwndjnqwdjnwqhdhwd",
      image: Demoimage,
    },
    {
      id: 10,
      title: "Television",
      price: "78",
      category: "electronics",
      description:
        "bhbhjsbhjdbjhwbdjwbdhwbdwbdhwbdjnqwjkdnjqwndjkqwndjnqwdjnwqhdhwd",
      image: Demoimage,
    },
    {
      id: 11,
      title: "Television",
      price: "145",
      category: "electronics",
      description:
        "bhbhjsbhjdbjhwbdjwbdhwbdwbdhwbdjnqwjkdnjqwndjkqwndjnqwdjnwqhdhwd",
      image: Demoimage,
    },
    {
      id: 12,
      title: "Television",
      price: "189",
      category: "electronics",
      description:
        "bhbhjsbhjdbjhwbdjwbdhwbdwbdhwbdjnqwjkdnjqwndjkqwndjnqwdjnwqhdhwd",
      image: Demoimage,
    },
    {
      id: 13,
      title: "Atta",
      price: "189",
      category: "groceries",
      description:
        "bhbhjsbhjdbjhwbdjwbdhwbdwbdhwbdjnqwjkdnjqwndjkqwndjnqwdjnwqhdhwd",
      image: Demoimage,
    },
    {
      id: 14,
      title: "Sugar",
      price: "45",
      category: "groceries",
      description:
        "bhbhjsbhjdbjhwbdjwbdhwbdwbdhwbdjnqwjkdnjqwndjkqwndjnqwdjnwqhdhwd",
      image: Demoimage,
    },
    {
      id: 15,
      title: "Rice",
      price: "80",
      category: "groceries",
      description:
        "bhbhjsbhjdbjhwbdjwbdhwbdwbdhwbdjnqwjkdnjqwndjkqwndjnqwdjnwqhdhwd",
      image: Demoimage,
    },
    {
      id: 16,
      title: "Bread",
      price: "30",
      category: "groceries",
      description:
        "bhbhjsbhjdbjhwbdjwbdhwbdwbdhwbdjnqwjkdnjqwndjkqwndjnqwdjnwqhdhwd",
      image: Demoimage,
    },
    {
      id: 17,
      title: "Biscuits",
      price: "120",
      category: "groceries",
      description:
        "bhbhjsbhjdbjhwbdjwbdhwbdwbdhwbdjnqwjkdnjqwndjkqwndjnqwdjnwqhdhwd",
      image: Demoimage,
    },
    {
      id: 18,
      title: "Namkeen",
      price: "220",
      category: "groceries",
      description:
        "bhbhjsbhjdbjhwbdjwbdhwbdwbdhwbdjnqwjkdnjqwndjkqwndjnqwdjnwqhdhwd",
      image: Demoimage,
    },
  ]);
  return (
    <UserContext.Provider
      value={{
        products,
        setProducts,
        priceRange,
        setPriceRang,
        category,
        setCategory,
        cartItem,
        setCartItem,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
