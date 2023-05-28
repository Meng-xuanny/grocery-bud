import { useState, useEffect } from "react";
import Form from "./components/Form";
import Items from "./components/Items";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(items));
  }, [items]);

  const addItem = (name) => {
    setItems((prevItems) => [
      ...prevItems,
      {
        name: name,
        completed: false,
        id: nanoid(),
      },
    ]);
    toast.success("item added to the list");
  };

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    toast.success("item removed");
  };

  const editItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) return { ...item, completed: !item.completed };
      return item;
    });

    setItems(newItems);
  };

  return (
    <main className="section-center">
      <ToastContainer position="top-center" />
      <Form items={items} setItems={setItems} addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </main>
  );
}

export default App;
