import React from 'react';
import { useState } from 'react';
import './style.css';
function app() {
  const [fruits, setFruit] = useState(['apple', 'banana', 'orange']);
  const [newcar, setNewCar] = useState({});
  const [car, setCar] = useState(
    { year: new Date().getFullYear() },
    { make: 'ford' },
    { model: 'mustang' }
  );
  const [onchanges, setOnchange] = useState('siva sai');
  const [card, setCard] = useState('');
  const [color, setColor] = useState('');
  const handleOnchangeEvent = (event) => {
    setOnchange(event.target.value);
  };
  const handleCardEvent = (event) => {
    setCard(event.target.value);
  };
  const handleColorEvent = (event) => {
    setColor(event.target.value);
  };
  const handleCarYearEvent = (event) => {
    setCar((c) => ({ ...c, year: event.target.value }));
  };
  const handleCarMakeEvent = (event) => {
    setCar((c) => ({ ...c, make: event.target.value }));
  };
  const handleCarModelEvent = (event) => {
    setCar((c) => ({ ...c, model: event.target.value }));
  };
  const handleAddFruitEvent = (event) => {
    const newfruit = document.getElementById('fruitinput').value;
    document.getElementById('fruitinput').value = '';
    setFruit((f) => [...f, newfruit]);
  };

  return (
    <div>
      <textarea
        type="text"
        placeholder="enter some text"
        onChange={handleOnchangeEvent}
      />
      <p>Entered text : {onchanges}</p>
      <select onChange={handleCardEvent}>
        <option>select card</option>
        <option> visa card</option>
        <option>master card</option>
        <option>gift card</option>
      </select>
      <p> selected card : {card}</p>
      <div>
        <h1> color picker app </h1>
        <p style={{ background: color }}> given color :{color} </p>
        <input type="color" />
      </div>
      <div>
        <h1>
          car model : {car.year} {car.make} {car.model}
        </h1>
        <input
          id="getinput"
          type="number"
          value={car.year}
          onChange={handleCarYearEvent}
        />
        <br />
        <input
          id="getinput"
          type="text"
          value={car.make}
          placeholder="enter car make"
          onChange={handleCarMakeEvent}
        />
        <br />
        <input
          id="getinput"
          type="text"
          value={car.model}
          placeholder="enter car model"
          onChange={handleCarModelEvent}
        />
        <br />
        <div>
          <input
            type="text"
            placeholder="enter the food name"
            id="fruitinput"
          />
          <ul>
            {fruits.map((fruit, index) => (
              <li key={index}>{fruit}</li>
            ))}
          </ul>
          <button onClick={handleAddFruitEvent}>ADD FRUIT </button>
        </div>
      </div>
    </div>
  );
}
export default app;