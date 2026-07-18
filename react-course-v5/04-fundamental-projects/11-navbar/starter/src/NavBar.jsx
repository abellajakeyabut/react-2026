import logo from './logo.svg'
import './index.css'
import NavBarMenus from './NavBarMenus'
import NavBarIcons from './NavBarIcons'
const NavBar = ({links,socials}) =>{
    return (
        <nav>
          <section className="nav-center">
                <div className='logo'>
                    <img src={logo} className="logo"/>
                
                </div>
                 <NavBarMenus menus={links}/>
                 <NavBarIcons icons={socials}></NavBarIcons>
           </section>
        </nav>
       
    )
}
export default NavBar;