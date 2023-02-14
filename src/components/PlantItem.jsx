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
  function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`);
  }
  return (
    <li key={id} className="lmj-plant-item" onClick={() => handleClick(name)}>
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
