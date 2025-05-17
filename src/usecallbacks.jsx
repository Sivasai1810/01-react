import { useState, useMemo, useEffect, useCallback } from 'react';
import Header from './header.jsx';

function CallbackApp() {
  const [counter, setCounter] = useState(0);

  const handleChangeEvent = () => {
    setCounter((c) => c + 1);
  };

  const newfn = useCallback(() => {}, []);
  return (
    <div>
      <Header newfn={newfn} />
      <p> number:{counter} </p>
      <button onClick={handleChangeEvent}> click me! </button>
    </div>
  );
}
export default CallbackApp;