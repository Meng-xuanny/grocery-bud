import React, { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ addItem }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      toast.error("please add a value");
      return;
    }
    addItem(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn" type="submit">
          Add Item
        </button>
      </div>
    </form>
  );
};

export default Form;
