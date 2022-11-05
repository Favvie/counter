import React, { useState } from 'react';
import './style.css';
import useCounter from './useCounter.js';

export default function App() {
  const [increment, decrement, count, reset, setValue] = useCounter();
  return (
    <div>
      <button onClick={increment}>increment</button>
      <p>{count}</p>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
      <button onClick={setValue}>set Value</button>
    </div>
  );
}
