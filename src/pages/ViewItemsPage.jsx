import React, { useState } from "react";
import ItemDetailModal from "../components/ItemDetailModal";

function ViewItemsPage({ items }) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div key={index} onClick={() => setSelectedItem(item)} className="cursor-pointer border p-2">
            <img src={item.coverImage} alt={item.name} className="h-40 object-cover w-full" />
            <h2 className="text-center font-semibold mt-2">{item.name}</h2>
          </div>
        ))}
      </div>

      {selectedItem && (
        <ItemDetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
}

export default ViewItemsPage;
