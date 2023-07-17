import {useDispatch, useSelector} from "react-redux";
import {setPosts, setSearch} from "../stores/posts";
import {useEffect} from "react";

let isPostsInProcess = false;

const usePosts = () => {
    const { posts } = useSelector(state => state.posts);
    const dispatch = useDispatch();
    const updateSearch = (value) => {
        dispatch(setSearch(value));
    }

    useEffect(() => {
        const getPosts = async() => {
            isPostsInProcess = true;
            try{
                const urlParams = new URLSearchParams({
                    limit: 11,
                    offset: 1
                });
                console.log('https://studapi.teachmeskills.by/blog/posts?' + urlParams);
                const { results: postsResponse } = await fetch('https://studapi.teachmeskills.by/blog/posts?' + urlParams)
                    .then(response => response.json())

                dispatch(setPosts(postsResponse));
            } catch (e){
                console.error(e)
            }
        }

        if(!isPostsInProcess){
            getPosts();
        }
    }, [])

    return {
        posts,
        setSearch: updateSearch,
    }
}

export default usePosts;