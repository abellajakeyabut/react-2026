import { NavBar, useAppContext } from "./NavBar"


const UserContainer = () =>{
    const {user,logout} = useAppContext();

    return <div className='user-container'>
        <p>Hello There, {user?.name?.toUpperCase()}</p>
        <button className='btn' onClick={logout}>Log out</button>
    </div>
}
export default UserContainer
