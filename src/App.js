import React, { useState, useRef } from 'react';
import './style.css';
import useCounter from './useCounter.js';
import ReducerCounter from './ReducerCounter.js';

export default function App() {
  const [increment, decrement, count, reset, setValue] = useCounter();
  const inputEl = useRef();
  const addValue = (e) => {
    e.preventDefault();
    setValue(Number(inputEl.current.value));
  };
  return (
    <div>
      {/* <button onClick={increment}>increment</button>
      <p>{count}</p>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
      <form action="">
        <input type="text" ref={inputEl} />
        <button onClick={addValue}>set Value</button>
      </form> */}
      <ReducerCounter />
    </div>
  );
}
