import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import AddItemPage from "./pages/AddItemPage";
import ViewItemsPage from "./pages/ViewItemsPage";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    setItems(storedItems);
  }, []);

  const addItem = (item) => {
    const updatedItems = [...items, item];
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  return (
    <div className="p-4">
      <nav className="flex gap-4 mb-6">
        <Link to="/add">Add Item</Link>
        <Link to="/view">View Items</Link>
      </nav>

      <Routes>
        <Route path="/add" element={<AddItemPage addItem={addItem} />} />
        <Route path="/view" element={<ViewItemsPage items={items} />} />
      </Routes>
    </div>
  );
}

export default App;