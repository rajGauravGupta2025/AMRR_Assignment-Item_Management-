import React, { useState } from "react";

function AddItemPage({ addItem }) {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    description: "",
    coverImage: "",
    images: []
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      setFormData({ ...formData, images: Array.from(files).map(file => URL.createObjectURL(file)) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(formData);
    setMessage("Item successfully added");
    setFormData({ name: "", type: "", description: "", coverImage: "", images: [] });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <input type="text" name="name" placeholder="Item Name" value={formData.name} onChange={handleChange} className="border p-2 w-full" required />
      <select name="type" value={formData.type} onChange={handleChange} className="border p-2 w-full" required>
        <option value="">Select Type</option>
        <option value="Shirt">Shirt</option>
        <option value="Pant">Pant</option>
        <option value="Shoes">Shoes</option>
        <option value="Sports Gear">Sports Gear</option>
      </select>
      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="border p-2 w-full" required />
      <input type="text" name="coverImage" placeholder="Cover Image URL" value={formData.coverImage} onChange={handleChange} className="border p-2 w-full" required />
      <input type="file" name="images" multiple onChange={handleChange} className="border p-2 w-full" />
      <button type="submit" className="bg-blue-600 text-white py-2 px-4">Add Item</button>
      {message && <p className="text-green-600">{message}</p>}
    </form>
  );
}

export default AddItemPage;
