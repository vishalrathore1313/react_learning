import React, { useState } from "react";
import UserContext from "./UserContext";
import Demoimage from "../image/demoimage.jpg";

const UserContextProvider = ({ children }) => {
  const [priceRange, setPriceRang] = useState();
  const [category, setCategory] = useState();
  const [products, setProducts] = useState([
    {
      id: 0,
      title: "T-shirt",
      price: "200",
      category: "clothing",
      description:
        "bhbhjsbhjdbjhwbdjwbdhwbdwbdhwbdjnqwjkdnjqwndjkqwndjnqwdjnwqhdhwd",
      image: Demoimage,
    },
    {
      id: 1,
      title: "T-shirt",
      price: "100",
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
      category: "cloth",
      description:
        "bhbhjsbhjdbjhwbdjwbdhwbdwbdhwbdjnqwjkdnjqwndjkqwndjnqwdjnwqhdhwd",
      image: Demoimage,
    },
    {
      id: 4,
      title: "T-Shirt",
      price: "78",
      category: "cloth",
      description:
        "bhbhjsbhjdbjhwbdjwbdhwbdwbdhwbdjnqwjkdnjqwndjkqwndjnqwdjnwqhdhwd",
      image: Demoimage,
    },
    {
      id: 5,
      title: "T-Shirt",
      price: "12",
      category: "cloth",
      description:
        "bhbhjsbhjdbjhwbdjwbdhwbdwbdhwbdjnqwjkdnjqwndjkqwndjnqwdjnwqhdhwd",
      image: Demoimage,
    },
    {
      id: 6,
      title: "T-Shirt",
      price: "156",
      category: "cloth",
      description:
        "bhbhjsbhjdbjhwbdjwbdhwbdwbdhwbdjnqwjkdnjqwndjkqwndjnqwdjnwqhdhwd",
      image: Demoimage,
    },
    {
      id: 7,
      title: "T-Shirt",
      price: "67",
      category: "cloth",
      description:
        "bhbhjsbhjdbjhwbdjwbdhwbdwbdhwbdjnqwjkdnjqwndjkqwndjnqwdjnwqhdhwd",
      image: Demoimage,
    },
    {
      id: 8,
      title: "T-Shirt",
      price: "45",
      category: "cloth",
      description:
        "bhbhjsbhjdbjhwbdjwbdhwbdwbdhwbdjnqwjkdnjqwndjkqwndjnqwdjnwqhdhwd",
      image: Demoimage,
    },
    {
      id: 9,
      title: "T-Shirt",
      price: "99",
      category: "cloth",
      description:
        "bhbhjsbhjdbjhwbdjwbdhwbdwbdhwbdjnqwjkdnjqwndjkqwndjnqwdjnwqhdhwd",
      image: Demoimage,
    },
    {
      id: 10,
      title: "T-Shirt",
      price: "78",
      category: "cloth",
      description:
        "bhbhjsbhjdbjhwbdjwbdhwbdwbdhwbdjnqwjkdnjqwndjkqwndjnqwdjnwqhdhwd",
      image: Demoimage,
    },
    {
      id: 11,
      title: "T-Shirt",
      price: "145",
      category: "cloth",
      description:
        "bhbhjsbhjdbjhwbdjwbdhwbdwbdhwbdjnqwjkdnjqwndjkqwndjnqwdjnwqhdhwd",
      image: Demoimage,
    },
    {
      id: 12,
      title: "T-Shirt",
      price: "189",
      category: "cloth",
      description:
        "bhbhjsbhjdbjhwbdjwbdhwbdwbdhwbdjnqwjkdnjqwndjkqwndjnqwdjnwqhdhwd",
      image: Demoimage,
    },
  ]);
  return (
    <UserContext.Provider value={{ products, setProducts,priceRange, setPriceRang,category, setCategory}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
