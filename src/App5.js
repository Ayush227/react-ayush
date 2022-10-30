import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
export default function App() {
  const [brand, setBrand] = useState('GTR');
  const [model, setModel] = useState('R35');
  const [year, setYear] = useState('2022');
  const [color, setColor] = useState('red');
  return (
    <div>
      <h1>My favorite color is {color}!</h1>
      <button type="button" onClick={() => setColor('blue')}>
        Blue
      </button>
      <button type="button" onClick={() => setColor('red')}>
        Red
      </button>
      <button type="button" onClick={() => setColor('pink')}>
        Pink
      </button>
      <button type="button" onClick={() => setColor('green')}>
        Green
      </button>
      <h1> My favourite year is {year} </h1>
      <button type="button" onClick={() => setYear('1999')}>
        1999
      </button>
      <button type="button" onClick={() => setYear('2000')}>
        2000
      </button>
      <button type="button" onClick={() => setYear('2001')}>
        2001
      </button>
      <button type="button" onClick={() => setYear('2002')}>
        2002
      </button>
      <h1>My favorite brand is {brand}!</h1>
      <button type="button" onClick={() => setColor('blue')}>
        audi
      </button>
      <button type="button" onClick={() => setColor('red')}>
        ford
      </button>
      <button type="button" onClick={() => setColor('pink')}>
        Bugatti La Voiture Noire
      </button>
      <button type="button" onClick={() => setColor('green')}>
        NISSAN SKYLINE
      </button>
      <h1> My favourite Model is {model} </h1>
      <button type="button" onClick={() => setYear('1999')}>
        R34
      </button>
      <button type="button" onClick={() => setYear('2000')}>
        R33
      </button>
      <button type="button" onClick={() => setYear('2001')}>
        R22
      </button>
      <button type="button" onClick={() => setYear('2002')}>
        S54
      </button>
    </div>
  );
}
