import React from 'react';
import { useState, useMemo, useEffect } from 'react';
import './style.css';

function  MemoApp() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);
  function power(num) {
    console.log('calculation is completed');
    const result1 = Math.pow(number, 3);
    return result1;
  }
  const result = useMemo(() => power(number), [number]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(event) => {
          setNumber(event.target.value);
        }}
      />
      <h2> cube of the given number is :{result}</h2>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        {' '}
        counter ++
      </button>
      <p> counter :{counter}</p>
    </div>
  );
}
export default MemoApp;
