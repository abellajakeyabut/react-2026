import { useState, createContext, useContext, useEffect, useReducer } from 'react'

import reducer from './reducer'
import {
    CLEAR_CART,
    REMOVE,
    INCREASE,
    DECREASE,
    LOADING,
    DISPLAY_ITEMS,
} from './actions';

const AppContext = createContext();
const url = 'https://www.course-api.com/react-useReducer-cart-project';
const initialState = {
    loading: true,
    cart: new Map()
}
export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const getCartTotals=()=>{
        let count=0;
        if(state == undefined) return 0

        for(let [key,value] of state.cart){
            count+=value.amount
        }
        return count;
    }
    const cartItemArray=()=>{
        let array=[];
        state.cart.values().map((value)=>{
            array.push(value)
        })
        return array;
    }
    const increaseCount=(id)=>{
        dispatch({type:INCREASE, payload:{id}})
    }
    const decreaseCount=(id)=>{
        dispatch({type:DECREASE,payload:{id}})
    }
    const clearCart=()=>{
        dispatch({type:CLEAR_CART})
    }
    useEffect(() => {
        const loadData = async () => {
            let response = await fetch(url)
            let cart = await response.json()
            console.log(cart)
            dispatch({ type: DISPLAY_ITEMS, payload: { cart } })
            
        }
        loadData()
    },[])
    return (
        <AppContext.Provider
            value={{ ...state , getCartTotals,cartItemArray,clearCart,increaseCount,decreaseCount}}>
            {children}
        </AppContext.Provider>
    )
}
export const getGlobalContext = () => {
    return useContext(AppContext)
}
