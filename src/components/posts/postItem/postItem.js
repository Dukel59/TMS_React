import {ReactComponent as LikeIcon} from "../../../assetes/svg/likeIcon.svg";
import {ReactComponent as DislikeIcon} from "../../../assetes/svg/dislikeIcon.svg";
import {ReactComponent as BookmarkIcon} from "../../../assetes/svg/bookmarkIcon.svg";
import {ReactComponent as BookmarkIconActive} from "../../../assetes/svg/bookmarkIconActive.svg";
import {ReactComponent as EllipsisIcon} from "../../../assetes/svg/ellipsisIcon.svg";

import {useState} from "react";

import './postItem.scss'

const PostItem = ({ post, size, result }) =>  {
    const [isSelected, setIsSelected] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);

    return (
        <div className={`post-item__container-${size}`}>
            <div className={`post-item__body ${!result ? `post-item__body-${size}` : ''}`}>
                <img className={`post-item-body__img-${size}`} src={post?.image} alt="post image"/>
                <div className="post-item-body__text">
                    <p className="post-item-body-text__date">{post?.date}</p>
                    <p className="post-item-body-text__title">{post?.title}</p>
                    <p className={`post-item-body-text__description ${size !== 'large' ? 'd-none' : ''}`}>{post?.description}</p>
                </div>
            </div>
            <div className="post-item__footer">
                <div className="post-item-footer__group">
                    <button
                        className="post-item-footer-group__button btn-custom"
                        onClick={() => {likeCount > 0 ? setLikeCount(0) : setLikeCount(1)}}
                    >
                        <LikeIcon />
                    </button>
                    <span className={`post-item-footer-group__span ${likeCount === 0 ? 'd-none' : ''}`}>{likeCount}</span>
                    <button
                        className="post-item-footer-group__button btn-custom"
                        onClick={() => {dislikeCount > 0 ? setDislikeCount(0) : setDislikeCount(1)}}
                    >
                        <DislikeIcon />
                    </button>
                    <span className={`post-item-footer-group__span ${dislikeCount === 0 ? 'd-none' : ''}`}>{dislikeCount}</span>
                </div>
                <div className="post-item-footer__group">
                    <button
                        className="post-item-footer-group__button btn-custom btn-bookmark"
                        onClick={() =>(setIsSelected(!isSelected))}
                    >
                        {isSelected ? <BookmarkIconActive/> : <BookmarkIcon/>}
                    </button>
                    <button
                        className="post-item-footer-group__button btn-custom"
                        onClick={() =>(setIsClicked(!isClicked))}
                    >
                        <EllipsisIcon />
                    </button>

                    <div className={`post-item-footer-group__submenu ${isClicked ? '' : 'd-none'}`}>
                        <button className="post-item-footer-group-submenu__button btn-custom">Edit</button>
                        <button className="post-item-footer-group-submenu__button btn-custom">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostItem;