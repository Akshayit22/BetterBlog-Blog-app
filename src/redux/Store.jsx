import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authReducer from './slices/authSlice';
import cartReducer from './slices/CartSlice';
import proflieReducer from './slices/profileSlice';


// export const store = configureStore({
//     reducer:{
// 	auth:authReducer,
// 	cart:cartReducer,
// 	profile:profieReducer,    
//     }
// });

const rootReducer = combineReducers({
	auth:authReducer,
	cart:cartReducer,
	profile:proflieReducer,
	
})
    
export default rootReducer;