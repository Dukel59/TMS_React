import {createSlice} from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        search: '',
    },
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        }
    },
});

export const {setPosts, setSearch} = postsSlice.actions;
export default postsSlice.reducer;