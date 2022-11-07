import React, { useState } from 'react';
import ShoppingList from './components/ShoppingList';
import ShoppingListForm from './components/ShoppingListForm';
import Item from './models/item';
import { v4 as getId } from "uuid";
import './App.css';

function App() {

  const [items, setItems] = useState<Item[]>([]);
  const addItem = (product: string) => {
    console.log("made it to the App component!");
    setItems([...items, { id: getId(), product, quantity: 1 }]);
  }
  return (
    <div>
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
