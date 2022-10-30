import React from 'react';
import './style.css';
function Car(props) {
  return <li>I am a {props.brand}</li>;
}
export default function App2() {
  const cars = [
    { id: 1, brand: 'Ford' },
    { id: 1, brand: 'BMW' },
    { id: 1, brand: 'Audi' },
  ];
  return (
    <div>
      <h1> Who lives in the garage?</h1>
      <ul>
        {cars.map((car) => (
          <Car key={car.id} brand={car.brand} />
        ))}
      </ul>
    </div>
  );
}
