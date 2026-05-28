import { useState } from 'react';
import {data, dataHobies} from '../../../data'

const UseStateObject = () => {
  const [peopleHobbies, setPeopleHobies] = useState(dataHobies[0])
  const [currentIndex,setCurrentIndex] = useState(0)

  const getData = (id) =>{
    let obj;
    let toPick = id > 3 ? 0:id;
    //alert(`to pick : ${toPick}`)
    obj = dataHobies[toPick];
    return obj
  }
  const showNext = () => {
    let newIndex = currentIndex +1 > 3 ? 0 : currentIndex+1;
    setCurrentIndex(newIndex)
    setPeopleHobies(dataHobies[newIndex])
  }
  let nextData = getData(currentIndex+1)
  return (
    <>
    <h2>Use State Object Example</h2>
    <h4>{peopleHobbies.name}</h4>
    <h4>{peopleHobbies.hobby}</h4>
    <button className="btn" onClick={showNext}>Show {nextData.name}</button>
    </>
  )
};

export default UseStateObject;
