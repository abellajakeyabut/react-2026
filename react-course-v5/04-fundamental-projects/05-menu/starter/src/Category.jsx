import { App, useApplicationContext } from "./App";
import { useContext } from 'react';

const Category = ({ cat }) => {
    const uniqueCat = [...new Set(cat)]
    const {currentCat,updateCat} = useApplicationContext();
    
    return (
        <div className="btn-container">
            {uniqueCat.map((category) => <button className="btn" key={category} onClick={()=>{updateCat(category)}} key={category}>{category}</button>)}
        </div>

    )
}
export default Category;