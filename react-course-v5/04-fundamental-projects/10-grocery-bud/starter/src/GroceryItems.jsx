import SingleItem from "./SingleItem"; 
const GroceryItems = ({ items,editItem,removeItem }) => {
 
    return (
        <ul className="items">
            {items.map((item) => <li key={`li_${item.key}`}><SingleItem item={item} editItem={editItem} removeItem={removeItem} /></li>)}
        </ul>
    )

}
export default GroceryItems;