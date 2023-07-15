import {useParams} from "react-router";
import {useMemo} from "react";
import {useSelector} from "react-redux";

const SelectedPost = () => {
    const {postId} = useParams();
    const {posts} = useSelector(state => state.posts);
    const selectedPost = useMemo(() => posts.find(({id}) => id.toString() === postId), [postId, posts]);

    return(
        !selectedPost
        ? (<div>No post Found</div>)
        : (
            <div>
                Selected Post Id: {postId}
                <br/>
                Title: {selectedPost.title}
                <br/>
                Desc: {selectedPost.description}
            </div>
        )
    )
}

export default SelectedPost;