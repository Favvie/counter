import React, { useRef, useReducer } from 'react';
import './style.css';

const ReducerCounter = () => {
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      case 'reset':
        return { count: 0 };
      case 'setvalue':
        return { count: Number(inputEl.current.value) };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const inputEl = useRef();

  // const [count, setCount] = useState(0);
  function increment() {
    dispatch({ type: 'increment' });
  }
  function decrement() {
    // setCount((pcount) => pcount - 1);
    dispatch({ type: 'decrement' });
  }
  function reset() {
    // setCount(0);
    dispatch({ type: 'reset' });
  }
  function setValue(e) {
    // setCount(value);
    e.preventDefault();
    // dispatch({ type: 'setvalue' });
  }

  // const addValue = (e) => {
  //   e.preventDefault();
  //   setValue(Number(inputEl.current.value));
  // };
  return (
    <div>
      <h1>useReducer page</h1>
      <button onClick={increment}>increment</button>
      <p>{state.count}</p>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
      <form action="">
        <input type="text" ref={inputEl} />
        <button onClick={setValue}>set Value</button>
      </form>
    </div>
  );
};

export default ReducerCounter;
