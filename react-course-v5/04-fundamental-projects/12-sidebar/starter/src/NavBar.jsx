import { useGlobalContext } from "./Context";
import { FaBars } from 'react-icons/fa';
const NavBar = ()=>{
    const {openSidebar, setPageId} = useGlobalContext();
   
    return (
        <nav>
            <div className='nav-center'>
                <h3 className='logo'>STRAPI</h3>
                <button className='toggle-btn' onClick={openSidebar}>
                    <FaBars></FaBars>
                </button>
            </div>
        </nav>
    )
}
export default NavBar;