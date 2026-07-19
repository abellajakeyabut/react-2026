import {
    CLEAR_CART,
    REMOVE,
    INCREASE,
    DECREASE,
    LOADING,
    DISPLAY_ITEMS
} from "./actions";

const reducer = (state, action) => {
    if (action.type == REMOVE) {
        alert('remove called')
    }
    if (action.type == CLEAR_CART) {
        return { ...state, cart: new Map() }
    }
    if (action.type == INCREASE) {
        alert(action.payload.id)
        const currentCart = state.cart;
        const currentCartItem = state.cart.get(action.payload.id)
        currentCartItem.amount=currentCartItem.amount+1
        currentCart.set(action.payload.id,currentCartItem)
        
        return {...state,cart:currentCart}
    }
    if (action.type == DECREASE) {
        
        const currentCartItem = state.cart.get(action.payload.id)
        if(currentCartItem.amount<1) return {...state}
        currentCartItem.amount = currentCartItem.amount -1;

        state.cart.set(action.payload.id,currentCartItem)

        return {...state}
    }
    if (action.type == DISPLAY_ITEMS) {
        let newCart = new Map()
        action.payload.cart.map((cartItem) => {
            newCart.set(cartItem.id, { ...cartItem })
        })
        console.log('display new')
        console.log(newCart)
        console.log('end display')
        return {  cart: newCart, loading: false }
    }
}
export default reducer;