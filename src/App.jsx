import { useState } from 'react'
import samosaImg from './assets/samosa.png'
import Card from './components/Cards'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(count + multiplier);

  const upgrades = [
    {
      title: "Double Stuffed 👯‍♀️",
      description: "2x per click",
      quantity: 2,
      cost: 10,
    },
    {
      title: "Party Pack 🎉",
      description: "5x per click",
      quantity: 5,
      cost: 100,
    },
    {
      title: "Full Feast 👩🏽‍🍳",
      description: "10x per click",
      quantity: 10,
      cost: 1000,
    },
  ];

  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMultiplier(multiplier * 2);
      setCount(count - 10);
    }
  };

  const buyPartyPack = () => {
    if (count >= 100) {
      setMultiplier(multiplier * 5);
      setCount(count - 100);
    }
  };

  const buyFullFeast = () => {
    if (count >= 1000) {
      setMultiplier(multiplier * 10);
      setCount(count - 1000);
    }
  };


  return (
    <>
      <h1>Samosa Selector</h1>
      <h2>Count: {count}</h2>

      <div></div>

      <div className="samosa">
        <img src={samosaImg} className="samosa" onClick={updateCount} />
      </div>
      <div className="container">
        <div className="upgrade">
          <h3>{upgrades[0].title}</h3>
          <p>{upgrades[0].description}</p>
          <button onClick={() => buyDoubleStuffed(upgrades[0].cost)}>
            {upgrades[0].cost} samosas
          </button>
        </div>
        <div className="upgrade">
          <h3>{upgrades[1].title}</h3>
          <p>{upgrades[1].description}</p>
          <button onClick={() => buyPartyPack(upgrades[1].cost)}>
            {upgrades[1].cost} samosas
          </button>
        </div>
        <div className="upgrade">
          <h3>{upgrades[2].title}</h3>
          <p>{upgrades[2].description}</p>
          <button onClick={() => buyFullFeast(upgrades[2].cost)}>
            {upgrades[2].cost} samosas
          </button>
        </div>
      </div>
    </>
  );
}

export default App
