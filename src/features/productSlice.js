import { createSlice } from "@reduxjs/toolkit";
import ProductData from "../ProductData";

const initialState = {
    carts: [],
    items:ProductData,
    TotalQuantity:0,
    TotalQuality:0,
}

export const productSlice = createSlice({
    name:"productSlice",
    initialState,
    reducers:{
        addToCart : (state,action) => {
            state.carts.push(action.payload);
        },
        getCartTotal : (state,action) => {

        },
        removeItem : (state,action) =>{

        },
        decreaseItemQuantity : (state,action)  =>{

        },
        increaseItemQuantity : (state,action) => {

        }

    }
});

export const { addToCart,getCartTotal,removeItem,decreaseItemQuantity,increaseItemQuantity} = productSlice.actions;

export default productSlice.reducer;