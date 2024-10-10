import { useState } from "react";

export default function Addtodo({ onAddToitems }) {
  function handleAdd(e) {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      quantity: quantity,
      desc: desc,
      isDone: false,
    };
    if (desc !== "") {
      onAddToitems(newItem);
      setDesc("");
      setQuantity(1);
    }

    console.log(newItem);
  }
  const [quantity, setQuantity] = useState(1);
  const [desc, setDesc] = useState("");
  return (
    <form className="addtodo">
      <span>Add item</span>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </form>
  );
}
