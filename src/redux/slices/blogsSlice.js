import {createSlice} from '@reduxjs/toolkit';

// const initialState = {
//     data : []
// }

const blogsSlice= createSlice({
    name:"blog",
    initialState:[],
    reducers:{
        addBlogs:(state,action)=>{
            state.push(action.payload);
        },
        removeBlogs:(state,action)=>{
            return state.filter((item) => item.id !== action.payload);
        },
    }
});

export const {addBlogs, removeBlogs} = blogsSlice.actions;

export default blogsSlice.reducer;

