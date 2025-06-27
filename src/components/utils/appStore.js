import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";


// კონტეინერი რომელშიც ივნახავთ ყველა slice-ს
const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    }    
});

console.log(appStore);
export default appStore;