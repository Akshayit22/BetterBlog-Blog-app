import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    AllBlogs : [],
    OneBlog : [],
}

const blogsSlice= createSlice({
    name:"blog",
    initialState:initialState,
    reducers:{
        addBlogs : (state, action) =>{
            state.AllBlogs = action.payload;
        },
        addBlog : (state, action) =>{
            state.OneBlog = action.payload;
        }
    }
});

export const {addBlogs, addBlog} = blogsSlice.actions;

export default blogsSlice.reducer;

