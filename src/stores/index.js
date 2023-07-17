import {configureStore} from "@reduxjs/toolkit";
import postsReducer from './posts'
import themeReducer from './theme'

export default configureStore({
    reducer: {
        posts: postsReducer,
        theme: themeReducer,
    }
})