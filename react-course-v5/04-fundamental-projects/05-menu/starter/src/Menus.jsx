import {App, useApplicationContext} from './App'
import MenuItem from './MenuItem';
const Menus = ({menuItems})=>{
    const {currentCat,updateCat} = useApplicationContext();
    const filteredData=menuItems.filter((item)=>item.category==currentCat);
    console.log(filteredData)
    return(
       <div className="section-center">
           {
            filteredData.map((item)=><MenuItem menuItem={item} key={item.id}></MenuItem>)
           }
       </div>
    )
}
export default Menus;