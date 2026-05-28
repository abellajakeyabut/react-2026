import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null)

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        setIsLoading(true)
        const resp = await fetch(url);
        const data = await resp.json();
        setUser(data)
        console.log(data)
        setIsLoading(false);
      }catch(err){
        setIsLoading(false);
        setIsError(true);
        console.log(err)
      }

    }
    fetchData();

  },[])

  useEffect(()=>{
   console.log('Finished loading')

  },[user])
  
 if(isLoading){
  return <h2> Data is Loading</h2>
 }
 if(isError){
  return <h2>Error occured</h2>
 }
 if(!isLoading && user !=null){
  return (
    <>
      <h1>Fetch Data</h1>
      <img src={user.avatar_url}/>
      <h2>{user.name}</h2>
      <h3>Works {user.company}</h3>
      <h4>{user.bio}</h4>
    </>
 )

 }
 
  return <h2>Loading is Done </h2>;
};
export default MultipleReturnsFetchData;
