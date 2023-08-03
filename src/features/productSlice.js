import { createSlice } from "@reduxjs/toolkit";
import ProductData from "../ProductData";

const initialState = {
    cart: [],
    items:ProductData,
    TotalQuantity:0,
    TotalQuality:0,
}

export const productSlice = createSlice({
    name:"productSlice",
    initialState,
    reducers:{

    }
});

export default productSlice.reducer;