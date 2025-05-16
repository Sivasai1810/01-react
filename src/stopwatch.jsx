import { useState, useEffect, useRef } from 'react';
function context() {
  const [isruning, setRuning] = useState(false);
  const [elaspedtime, setElaspedtime] = useState(0);
  const intervalidRef = useRef(null);
  const stratTimeRef = useRef(0);
  useEffect(() => {
    if (isruning) {
      intervalidRef.Current = setInterval(() => {
        setElaspedtime(Date.now() - stratTimeRef.Current);
      }, 10);
    } else {
      clearInterval(intervalidRef.Current);
    }
  }, [isruning]);
  const start = () => {
    setRuning(true);
    stratTimeRef.Current = Date.now() - elaspedtime;
    console.log(stratTimeRef.Current);
  };
  const stop = () => {
    setRuning(false);
  };
  const reset = () => {
    setRuning(false);
    setElaspedtime(0);
  };
  const formate = () => {
    let hours = Math.floor(elaspedtime / (1000 * 60 * 60));
    let minutes = Math.floor((elaspedtime / (1000 * 60)) % 60);
    let seconds = Math.floor(elaspedtime / 1000) % 60;
    let milliseconds=Math.floor((elaspedtime %1000)/10)
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
   milliseconds= String(milliseconds).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  };
  return (
    <div className="stopwatch">
      <h3 className="heading"> Stop-Watch</h3>
      <p className="format">{formate()}</p>
      <div className="controls">
        <button className="startbutton" onClick={start}>
          {''}
          Start
        </button>
        <button className="stopbutton" onClick={stop}>
          {''}
          Stop
        </button>
        <button className="resetbutton" onClick={reset}>
          {''}
          Reset
        </button>
      </div>
    </div>
  );
}
export default context;