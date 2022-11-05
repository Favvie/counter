import React, { useState } from 'react';
import './style.css';

const useCounter = () => {
  const [count, setCount] = useState(0);
  function increment() {
    setCount((pcount) => pcount + 1);
  }
  function decrement() {
    setCount((pcount) => pcount - 1);
  }
  function reset() {
    setCount(0);
  }
  function setValue(value) {
    setCount(value);
  }
  return [increment, decrement, count, reset, setValue];
};

export default useCounter;
