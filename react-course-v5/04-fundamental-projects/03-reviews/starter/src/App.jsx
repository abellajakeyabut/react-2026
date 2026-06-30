import { useState } from 'react';
import data from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import './index.css'
const App = () => {
  const [index, setIndex] = useState(0)
  const randomPerson = ()=> {
    let randomNumber = Math.floor(Math.random() * data.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    if(randomNumber > data.length-1){
      randomNumber = 0;
    }
    setIndex(randomNumber)
  }
  console.log(data);
  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img src={data[index].image} className="person-img" />
           <span className="quote-icon">
          <FaQuoteRight />
        </span>
        </div>
       
        <h4 className="author">{data[index].name}</h4>
        <p className="job">{data[index].job}</p>
        <p className="info">{data[index].text}</p>
        <button className="btn" onClick={randomPerson}>Surprise Me</button>
      </article>
    </main>
  )
};
export default App;
