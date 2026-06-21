import React from 'react';
import { data, people } from '../../../data';
import { useState,useReducer } from 'react';

  const CLEAR_LIST = 'CLEAR_LIST';
  const RESET_LIST = 'RESET_LIST';
  const REMOVE_ITEM = 'REMOVE_ITEM';  

  const defaultState = {
    people: data,
    isLoading: false
  }
  const reducer = (state,action) => {
    console.log(action)
    if(action.type === CLEAR_LIST){
      alert('clear list called')
      return {...state,people:[]}
      
    }
    if(action.type === RESET_LIST){
      return {...state,people:data}
    }
    if(action.type === REMOVE_ITEM){
      const newPeople = state.people.filter((person) => person.id !== action.payload.id)
      return {...state,people:newPeople}
    }
    throw new Error('no matching action type')
  }

  
const ReducerBasics = () => {
//useReducer returns state and action for state
//second param is default value
//first param is the function action
  const [state, dispatch] = useReducer(reducer, defaultState);
  console.log(state);

  const removeItem = (id) => {
  //  let newPeople = people.filter((person) => person.id !== id);
  //  setPeople(newPeople);
      dispatch({type: REMOVE_ITEM, payload:{id}})
  };
  const clearList = () => {
  //  setPeople([]);
      console.log('clear list called')
      dispatch({type: CLEAR_LIST})
      
  }
  const resetList = () => {    
    dispatch({type: 'RESET_LIST'})

  //  setPeople(data);ß dispatch({type: 'RESET_LIST'})
  }
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length < 1 ? (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={resetList}
        >
          reset list
        </button>
      ) : (
         <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={clearList}
        >
          clear list
        </button>
      )}
     
    </div>


  );
};

export default ReducerBasics;
