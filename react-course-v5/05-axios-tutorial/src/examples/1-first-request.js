import axios from 'axios';
import { useEffect } from 'react';
// limit, if 429 wait for 15 min and try again
const url = 'https://www.course-api.com/react-store-products';

const FirstRequest = () => {
  useEffect(() => {
    const fetchData = async () => {
      try{
        let responseData = await axios.get(url)
        console.log(responseData.data)
        console.log(responseData.status)
      }catch(ex){
       
        console.log(ex.status)
      }
    }
    fetchData()
  }, []);

  return <h2 className='text-center'>first request</h2>;
};
export default FirstRequest;
