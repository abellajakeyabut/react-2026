import {useState,createContext,useReducer,useEffect} from 'react'
import reducer from 'reducer'
import cartItems from './data'

const InitialState = {
    loading:false,
    cart:[]
}
export const AppProvider = ({children})=>{
    
    const [state, dispatch] = useReducer(reducer,initialState)
    
}