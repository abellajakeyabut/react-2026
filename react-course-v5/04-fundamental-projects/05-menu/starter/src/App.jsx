
import Category from './Category';
import Title from './Title'
import data from './data'
import { useState, createContext,useContext } from 'react';
import Menus from './Menus'

const MenuContext = createContext();
const useApplicationContext = ()=>useContext(MenuContext)
const allCategories = [...new Set(data.map((item)=>item.category))]

const App = () => {


  const [currentCat, setCat] = useState(allCategories[0]);

  const updateCat = (selection)=>{
    setCat(selection);
    
  }
  console.log(allCategories);
  console.log(`chosen : ${currentCat}`)
  return (
    
    <MenuContext.Provider value={{currentCat,updateCat}} >
      <main className='menu'>
        <Title>
          Our Menu
        </Title>
        <Category cat={allCategories} />
        <Menus menuItems={data}></Menus>
      </main>
    </MenuContext.Provider>

  )
};
export {App, useApplicationContext};
