import {createSelector} from "@reduxjs/toolkit";

export const searchedPosts =
    createSelector(
        (state) => {
            const {posts: {posts, search}} = state;

            return posts.filter(post => {
                return post.title.toLowerCase().includes(search.toLowerCase());
            })
        }
    )