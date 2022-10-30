import React from 'react';
import './style.css';
function Car(props) {
  return <li>I am a {props.brand}</li>;
}
export default function App2() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <div>
      <h1>Who lives in my garage?</h1>
      <ol>
        {cars.map((car) => (
          <Car brand={car} />
        ))}
      </ol>
    </div>
  );
}
