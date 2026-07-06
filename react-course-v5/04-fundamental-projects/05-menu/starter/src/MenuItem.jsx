const MenuItem = ({menuItem})=>{
    console.log(menuItem)
    return (
        <div className="menu-item">
            <img src={menuItem.img} className="img"/>
            <div className="item-info">
                <header>
                    <h5>{menuItem.title}</h5>
                </header>
                <p className="item-text">
                    {menuItem.desc}
                </p>
                <p className="item-price">
                    {menuItem.price}
                </p>
            </div>
        </div>
    )
}
export default MenuItem