import React, { useState } from "react";

function HandleShuffle() {
  const [items, setItems] = useState([
    "apple",
    "oranges",
    "banana",
    "guava",
    "pineapple",
  ]);

  const handleShuffleItems = () => {
    const shuffleItems = [...items];
    for (let i = shuffleItems.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i - 1));
      [shuffleItems[i], shuffleItems[j]] = [shuffleItems[j], shuffleItems[i]];
    }
    setItems(shuffleItems);
  };

  return (
    <div>
      <h3>List of items</h3>
      <ul>
        {items.map((element, index) => (
          <li>{element}</li>
        ))}
      </ul>
      <button onClick={handleShuffleItems} >Shuffle</button>
    </div>
  );
}

export default HandleShuffle;
