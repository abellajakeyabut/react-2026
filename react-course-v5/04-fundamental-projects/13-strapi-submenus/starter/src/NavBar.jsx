import { useGlobalContext } from "./Context";
import { FaBars } from 'react-icons/fa';
const NavBar = ()=>{
    const {openSidebar, setPageId} = useGlobalContext();
    const handleSubMenu = (e)=>{
        if(!e.target.classList.contains('nav-link')){
            setPageId(null);
        }
    }
    return (
        <nav onMouseOver={haandleSubMenu}>
            <div className='nav-center'>
                <h3 className='logo'>strapi</h3>
                <button className='toggle-btn' onClick={openSidebar}>
                    <FaBars></FaBars>
                </button>
            </div>
        </nav>
    )
}
export default NavBar;