import monstera from '../assets/monstera.jpg';
import basil from '../assets/basil.jpg';
import cactus from '../assets/cactus.jpg';
import calathea from '../assets/calathea.jpg';
import lyrata from '../assets/lyrata.jpg';
import mint from '../assets/mint.jpg';
import olivier from '../assets/olivier.jpg';
import pothos from '../assets/pothos.jpg';
import succulent from '../assets/succulent.jpg';

export const plantList = [
  {
    name: 'monstera',
    category: 'classique',
    id: '1ed',
    water: '1',
    light: '3',
    price: 15,
    cover: monstera,
  },
  {
    name: 'ficus lyrata',
    category: 'classique',
    id: '2ab',
    water: '3',
    light: '1',
    price: 16,
    cover: lyrata,
  },
  {
    name: 'pothos argenté',
    category: 'classique',
    id: '3sd',
    water: '2',
    light: '2',
    cover: pothos,
    price: 17,
    isSpecialOffer: true,
  },
  {
    name: 'yucca',
    category: 'classique',
    id: '4kk',
    water: '2',
    light: '1',
    price: 16,
    cover: cactus,
  },
  {
    name: 'olivier',
    category: 'extérieur',
    id: '5pl',
    water: '1',
    light: '3',
    price: 18,
    cover: olivier,
  },
  {
    name: 'géranium',
    category: 'extérieur',
    id: '6uo',
    water: '2',
    light: '3',
    price: 19,
    cover: mint,
  },
  {
    name: 'basilique',
    category: 'extérieur',
    id: '7ie',
    water: '"',
    light: '2',
    cover: basil,
    price: 20,
    isSpecialOffer: true,
  },
  {
    name: 'aloe',
    category: 'plante grasse',
    id: '8fp',
    water: '1',
    light: '2',
    cover: calathea,
    price: 21,
    isSpecialOffer: true,
  },
  {
    name: 'succulente',
    category: 'plante grasse',
    id: '9vn',
    water: '2',
    light: '2',
    price: 22,
    cover: succulent,
  },
];
