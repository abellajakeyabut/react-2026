import { useState } from 'react';
import Tours from './Tours';

import Loading from './Loading';
import { useEffect } from 'react';

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [respData, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const removeTour=(id)=>{
    
    const newList = respData.filter((data)=>data.id != id);
    setData(newList)
  }
  const fetchData = async (url) => {
    try {
      const result = await fetch(url);
      if (!result.ok) {
        throw new Error("Network issues - please check url")
      }
      const res = await result.json();
      setData(res);

    } catch (err) {
    
      console.log("Error occured")
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [])


  if (isLoading) {
    return <Loading></Loading>

  }

  return (
    <section className="title">
      <h2>Our Tours</h2>
      <div className='title-underline'></div>
      <Tours tours={respData} removeTour={removeTour} />

    </section>
  )

}

export default App;
