import {useContext, useMemo} from "react";
import {PostsContext} from "../../context/posts";
import PostItem from "../../components/posts/postItem/postItem";
import './searchResult.scss'

const SearchResult = () => {
    const {posts, search} = useContext(PostsContext);
    const filteredPosts = useMemo(() => {
        if (!search) {
            return posts;
        }
        return posts.filter((post) =>  post.title.toLowerCase().includes(search.toLowerCase()))
    }, [search, posts]);

    return (
        <div className="sr__container">
            <h1 className="sr-container__title">Search Result: { search }</h1>
            <div className="sr-container__result-container">
                {filteredPosts.map((post) => (
                    <PostItem key={post.id} post={post} size="small" result="true" />
                ))}
            </div>
        </div>
    )
}
export default SearchResult;