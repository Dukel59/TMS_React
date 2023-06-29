import {useContext, useMemo} from "react";
import {PostsContext} from "../../context/posts";
import PostItem from "../../components/posts/postItem/postItem";

const SearchResult = () => {
    const {posts, search} = useContext(PostsContext);
    const filteredPosts = useMemo(() => {
        if (!search) {
            return posts;
        }
        return posts.filter((post) =>  post.title.toLowerCase().includes(search.toLowerCase()))
    }, [search, posts]);

    return (
        <>
            {filteredPosts.map((post) => (
                <PostItem key={post.id} post={post} size="small" />
            ))}
        </>
    )
}
export default SearchResult;