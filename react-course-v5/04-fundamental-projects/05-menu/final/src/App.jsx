import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import Title from './Title';
import items from './data';

const allCategories = [...new Set(items.map((item) => item.category.trim().toLowerCase()];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  console.log(allCategories)
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className='menu'>
        <Title text='our menu' />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
