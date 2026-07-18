
const NavBarMenus=({menus})=>{
    return (
        <div className="links-container">
                <div className="links">
                    {
                         menus.map((menu)=>{
                            return <a key={menu.id} href={menu.url}>{menu.text}</a>
                         })
                    }
                </div>
            </div>
       
    )
}
export default NavBarMenus