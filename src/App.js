import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./components/AddItem";
import SearchItem from "./components/SearchItem";
import ColorApp from "./components/ColorApp";

import { useState } from "react";

function App() {
  const [color, setColor] = useState('');
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shopinglist"))
  );
  const [newItem, setNewItem] = useState("");
const [search, setSearch] = useState ('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    saveItems(listItems);
  };

  const saveItems = (listItems) => {
    setItems(listItems);
    localStorage.setItem("shopinglist", JSON.stringify(listItems));
  };
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    saveItems(listItems);
  };
  const handleDelete = (id) => {
    /*  повертає масив без Id */
    const listItems = items.filter((item) => item.id !== id);
    saveItems(listItems);
  };

  return (
    <div className="App">
      {/* <Header title='Grocery List'/> */}
      <Header title="Grocery List" />
      <SearchItem 
      search={search}
      setSearch={setSearch}
      />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content
        items={items.filter(item => ((item.item).toLowerCase().includes(search.toLowerCase())))}
        setItem={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <ColorApp
      color={color}
      setColor={setColor}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
