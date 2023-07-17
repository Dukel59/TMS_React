import './posts.scss'
import PostItem from "./postItem/postItem";
import usePosts from "../../hooks/usePosts";

const Posts = () => {

    const { posts } = usePosts()

    if(posts.length === 0) {
        return null
    }

    return (
        <div className="posts__container">
            <div className="posts-container__left">
                <PostItem post={posts[0]} size="large" />
                <div className="posts-container-left__medium">
                    {
                        posts.slice(1, 3).map((post) => (
                            <PostItem key={post.id} post={post} size="medium"/>
                        ))
                    }
                </div>
                <div className="posts-container-left__medium">
                    {
                        posts.slice(3, 5).map((post) => (
                            <PostItem key={post.id} post={post} size="medium"/>
                        ))
                    }
                </div>
            </div>
            <div className="posts-container__right">
                {
                    posts.slice(5, 11).map((post) => (
                        <PostItem key={post.id} post={post} size="small" />
                    ))
                }
            </div>
        </div>
    )
}

export default Posts;