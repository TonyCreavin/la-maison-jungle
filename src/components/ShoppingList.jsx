import { plantList } from '../datas/plantList';
import '../styles/ShoppingList.css';
import CareScale from './CareScale';

function ShoppingList() {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  return (
    <div>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>

      <ul className="lmj-plant-list">
        {plantList.map((plant) => (
          <li key={plant.id} className="lmj-plant-item">
            {plant.name}
            {plant.water}
            <CareScale careType="light" scaleValue={plant.light} />
            <CareScale careType="water" scaleValue={plant.water} />
            {plant.isSpecialOffer && <div className="lmj-sales">Solde</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
