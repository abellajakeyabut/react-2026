import NavLinks from "./NavLinks"
import { useState, createContext,useContext} from 'react'

const NavBarContext = createContext();
const AppContext = () => useContext(NavBarContext)
const NavBar = () =>{
    
    const [user,setUser] = useState({name:'Bob'});
    const logout = () => {
        alert('click')
        setUser(null)
    }
    return(
        <NavBarContext.Provider value={{user,logout}}>
        <nav className="navbar">
                <h5>CONTEXT API</h5>
                <NavLinks ></NavLinks>
        </nav>
        </NavBarContext.Provider>
    )
  
}
export {NavBar,AppContext}
