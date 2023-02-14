import React from 'react';
import CareScale from './CareScale';
import '../styles/PlantItem.css';

export default function PlantItem({
  name,
  cover,
  id,
  light,
  water,
  isSpecialOffer,
}) {
  function handleClick(plantLight, plantWater) {
    if (plantLight < 2) {
      alert(`"Cette plante requiert peu de lumière" ✨`);
    }
    if (plantLight == 2) {
      alert(`"Cette plante requiert modérement de lumière" ✨`);
    }
    if (plantLight > 2) {
      alert(`"Cette plante requiert beaucoup de lumière" ✨`);
      console.log(plantLight);
    }
    if (plantWater < 2) {
      alert(`"Cette plante requiert peu d'arrosage" 💧🌱`);
    }
    if (plantWater == 2) {
      alert(`"Cette plante requiert modérement d'arrosage" 💧🌱`);
    }
    if (plantWater > 2) {
      alert(`"Cette plante beaucoup peu d'arrosage" 💧🌱`);
    }
  }

  return (
    <li
      key={id}
      className="lmj-plant-item"
      onClick={() => handleClick(light, water)}
    >
      <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
      {name}
      <div>
        <CareScale careType="light" scaleValue={light} />
        <CareScale careType="water" scaleValue={water} />
      </div>
      {isSpecialOffer && <div className="lmj-sales">Solde</div>}
    </li>
  );
}
