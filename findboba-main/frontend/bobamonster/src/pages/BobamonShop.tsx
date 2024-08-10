import React, { useState } from 'react';
import '../styles/bobamonshop.css';
import Bobamon1 from '../imgs/bobamon1.jpg';
import Bobamon2 from '../imgs/bobamon2.jpg';
import Bobamon3 from '../imgs/bobamon3.jpg';

import { getUserPoints, setUserPoints } from './userpoints.ts';
interface BobamonCard {
  name: string;
  image: string;
  price: number; // Points required to purchase
}
//const bobamonImageSources: string[] = [];

const bobamonCards: BobamonCard[] = [
  { name: 'Ms. Twinklers', image: Bobamon1 , price: 50 },
  { name: 'Mr. Bubbly', image: Bobamon2, price: 150 },
  { name: 'Master Rabboba', image: Bobamon3, price: 200 },
];

const BobamonShop: React.FC = () => {
  const [purchasedCards, setPurchasedCards] = useState<string[]>([]);
  const userPoints = getUserPoints(); // Assuming you have user points stored

  const addToCollection = (card: BobamonCard) => {
    if (userPoints >= card.price) {
      setPurchasedCards([...purchasedCards, card.image]); // Store image source
      setUserPoints(userPoints - card.price);
    } else {
      alert('Insufficient points! Earn more points to buy this Bobamon.');
    }
  };

  // Function to export purchased cards (optional)
  /* const exportPurchasedCards = (): string[] => {
    return [...purchasedCards]; // Return a copy of the purchased cards array
  };*/



  return (
    <body className='bobamon-shop kawaii earth-tones'>
    <div className="bobamon-shop kawaii earth-tones">
      <header className="shop-header">
        <h1>Welcome to the Kawaii Bobamon Shop!</h1>
        <p className="points">Your points: {userPoints}</p>
      </header>
      <main className="main-content">
        <section className="card-list">
          <h2>Available Bobamon Cards</h2>
          <ul>
            {bobamonCards.map((card, index) => (
              <li key={index} className="card-item">
                <div className="card-image-wrapper">
                  <img src={card.image} alt={card.name} />
                </div>
                <div className="card-info">
                  <p className="card-name">{card.name}</p>
                  <p className="card-price">Price: {card.price} points</p>
                  <button className="buy-button" onClick={() => addToCollection(card)}>
                  Collect ({'\u2764'} Adopt for {card.price} pts)
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
    </body>
  );
};

export default BobamonShop;