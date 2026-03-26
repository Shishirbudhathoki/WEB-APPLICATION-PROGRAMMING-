import { useState } from "react";
import {ChildComponent} from "./Q3_Child";
import "./Q3.css";

export const ParentComponent = () =>{
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue.trim()]);
      setInputValue("");
    }
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };


  return (
    <div className="parent-container">
      <h1>Item Manager</h1>
      <div className="input-section">
        <input className="item-input" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter item name..."/>
        <button onClick={addItem} className="add-btn">Add Item</button>
      </div>

      {/* Passing props to child component */}
      <ChildComponent 
        items={items} 
        deleteItem={deleteItem} 
      />
    </div>
  );
}
