import React from 'react';
import './style.css';
function Car(props) {
  return (
    <div>
      {' '}
      <h2 style={{ backgroundColor: 'blue' }}>
        I am a {props.brand.model} Car!
      </h2>
      <h2 style={{ backgroundColor: 'red' }}>I am a {props.brand.name} Car!</h2>
    </div>
  );
}
function Car2() {
  return <h2>I am still a car!</h2>;
}
export default function App1() {
  const carInfo = { name: 'Ford', model: 'Mustang' };
  return (
    <div>
      <h1>this is react</h1>
      <Car brand={carInfo} />
      <Car2 />
    </div>
  );
}
