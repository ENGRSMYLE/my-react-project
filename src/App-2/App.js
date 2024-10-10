import Logo from "./Logo";
import Addtodo from "./Addtodo";
import Todolist from "./Todolist";
import Stats from "./Stats";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  // How to update an object
  function handleToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <Logo />
      <Addtodo onAddToitems={handleAddItems} />
      <Todolist
        items={items}
        changeToggle={handleToggle}
        deleteItem={handleDeleteItem}
      />
      <Stats />
    </div>
  );
}
