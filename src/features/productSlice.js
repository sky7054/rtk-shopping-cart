import { createSlice } from "@reduxjs/toolkit";
import ProductData from "../ProductData";

const initialState = {
    carts: [],
    items:ProductData,
    totalQuantity:0,
    totalPrice:0,
}

export const productSlice = createSlice({
    name:"productSlice",
    initialState,
    reducers:{
        addToCart : (state,action) => {
            let find = state.carts.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.carts[find].quantity += 1;
      } else {
        state.carts.push(action.payload);
      }
        },
        getCartTotal : (state) => {
          let{totalQuantity,totalPrice} = state.carts.reduce(
            (cartTotal,cartItem) =>{
              const {price,quantity}  = cartItem;
              const itemTotal = (price*quantity)
              cartTotal.totalPrice += itemTotal;
              cartTotal.totalQuantity += quantity;
              return cartTotal;
            },
            {
              totalPrice : 0,
              totalQuantity : 0
            }
          );
          state.totalPrice = parseInt(totalPrice.toFixed(2));
          state.totalQuantity = totalQuantity;

        },
        removeItem : (state,action) =>{

          state.carts = state.carts.filter((item) => item.id !== action.payload);
        },
        decreaseItemQuantity : (state,action)  =>{

        },
        increaseItemQuantity : (state,action) => {

        }

    }
});

export const { addToCart,getCartTotal,removeItem,decreaseItemQuantity,increaseItemQuantity} = productSlice.actions;

export default productSlice.reducer;