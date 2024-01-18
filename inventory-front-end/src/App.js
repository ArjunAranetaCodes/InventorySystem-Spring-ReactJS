import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get('http://localhost:8080/api/inventory');
    setItems(response.data);
  };

  const addItem = async () => {
    await axios.post('http://localhost:8080/api/inventory', { name, quantity });
    fetchItems();
    setName('');
    setQuantity(0);
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:8080/api/inventory/${id}`);
    fetchItems();
  };

  return (
    <div>
      <h1>Inventory Management</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity} units
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input type="text" placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <button onClick={addItem}>Add Item</button>
      </div>
    </div>
  );
}

export default App;
