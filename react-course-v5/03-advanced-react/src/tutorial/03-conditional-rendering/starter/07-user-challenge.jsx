import { useState ,useEffect } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null)

  const Logout = () => {
    setUser(null)
  }
  const Login = () => {
    setUser({ name: "Pablo Escobar" })
  }
  
  return (
    <>
    {!user && (
      <>
        <button className="btn" onClick={Login}>Login</button>
      </>
    )}
    {user && <DisplayLogin userData={user} logoutFunction={Logout}/>}
  </>
  );
}
const DisplayLogin = ({userData,logoutFunction}) =>{
  useEffect(()=>{
    console.log("happens")
    return ()=>{
      console.log('cleanup done')
    }
  },[])
  return (
     <>
        <h1>{`Welcome ${userData.name}`}</h1>
        <button className="btn" onClick={logoutFunction}>Logout</button>
      </>
  )
}
export default UserChallenge;
