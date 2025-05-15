import React from 'react';
import { useState, useEffect } from 'react';
function clock() {
  const [clock, setClock] = useState(new Date());
  useEffect(() => {
    let setIntervals = setInterval(() => {
      setClock(new Date());
    }, 1000);
    return () => {
      clearInterval(setIntervals);
    };
  }, []);
  function formatclock() {
    let hours = clock.getHours();
    const minutes = clock.getMinutes();
    const seconds = clock.getSeconds();
    const meridium = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12;
    return `${zeroadding(hours)}:${zeroadding(minutes)}:${zeroadding(seconds)}`;
    function zeroadding(number) {
      return (number >= 10 ? '' : '0') + number;
    }
  }
  return (
    <div>
      <h1>clock</h1>
      <span> {formatclock()}</span>
    </div>
  );
}
export default clock;