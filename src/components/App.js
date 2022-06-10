import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleMode() {
    setIsDarkMode((prev) => !prev);
  }
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button 
            onClick={handleMode}> 
            {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>

      <ShoppingList 
            items={items} 
            state={setItems}/>
    </div>
  );
}

export default App;
