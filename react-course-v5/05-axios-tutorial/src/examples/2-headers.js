import { useState } from 'react';
import axios from 'axios';

const url = 'https://icanhazdadjoke.com/';
// Accept : 'application/json'

const Headers = () => {
  const [joke, setJoke] = useState('' );

  const fetchDadJoke = async () => {
    try {
      const { data } = await axios(url,{headers:{
        Accept:'application/json'
      }});
      setJoke(data.joke);
      alert(data)
    } catch (err) {
      console.log(err)
    }

  };

  return (
    <section className='section text-center'>
      <button className='btn' onClick={fetchDadJoke}>
        Fetch Dad Joke
      </button>
      <p className='dad-joke'>{joke}</p>
    </section>
  );
};
export default Headers;
