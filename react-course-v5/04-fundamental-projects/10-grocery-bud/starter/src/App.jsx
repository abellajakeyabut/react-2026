import { useRef, useState } from 'react'
import GroceryItems from './GroceryItems'
import { v4 as uuidv4 } from 'uuid';
const App = () => {
  const [listItems, setListItems] = useState([]);
  
  const itemRef = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    let tempItems = [];
    listItems.map((item)=>tempItems.push(item))
    tempItems.push({ key: uuidv4(), value: itemRef.current.value ,completed:false})
    setListItems(tempItems);
    
  }
  const removeItem=(key)=>{
    let newList = listItems.filter((item)=>item.key!=key);
    setListItems(newList)
  }
  const editItem=(key)=>{
    let updatedItems = listItems.map((item)=>item.key == key ? {...item,completed: item.completed==false?true:false}:item);
    setListItems(updatedItems)

  }
  return (
    <>
      <section className="section-center">
        <label className="form-label">Grocery Bud</label>
        <form className="form-row" onSubmit={handleSubmit}>
          <div className="form-control">
            <input type="text" className="form-input" ref={itemRef} />
            <button className="btn">Add Item</button>
          </div>

        </form>
        <GroceryItems items={listItems} removeItem={removeItem} editItem={editItem} />
      </section>

    </>
  )
};

export default App;
