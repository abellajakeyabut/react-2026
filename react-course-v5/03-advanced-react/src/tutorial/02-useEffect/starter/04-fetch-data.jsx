import { useState ,useEffect} from "react";

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);
  const 
  const fetchData = async () => {
    try{
      let response = await fetch(url);
      let data = await response.json();
      setUsers(data);
      console.log(data)
    }catch(err){
      console.log(err)
    }
 }
  //second parameter in useEffect is dependency
  //blank means useEffects triggers every render 
  //empty array only runs once after component mounts
  //with variable, runs when variable changes value
  useEffect(()=> {
    fetchData()
  },[])
  return (
    <section>
      <h3> Github users</h3>
      <ul className="users">
        {
          users.map((data)=>{
            const {id,login,avatar_url,html_url} = data
            return (<li><img key={id} src={avatar_url}/>{login}</li>)
          })
        }
      </ul>
    </section>
  )
};
export default FetchData;
