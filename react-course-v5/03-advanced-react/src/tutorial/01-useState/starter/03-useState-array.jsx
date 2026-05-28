import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [dataState,setDataState] = React.useState(data)
  const removeItem = (id) =>{
    
    setDataState(dataState.filter((row)=>(row.id != id))
  )
  }
  return (
      <ul>
        {dataState.map((row) => {
          return (
          <li key={row.id}>
             <h3>{row.name}</h3>
              <button className="btn" onClick={ () => removeItem(row.id)}>  Remove {row.name}</button>
          </li>
          )
      })}
      </ul>
  )
};

export default UseStateArray;
