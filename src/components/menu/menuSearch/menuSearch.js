import { ReactComponent as SearchIcon } from '../../../assetes/svg/searchIcon.svg';


import './menuSearch.scss'
import {useContext, useState} from "react";
import {PostsContext} from "../../../context/posts";
const MenuSearch = () => {

    const [isInputShown, setIsInputShown] = useState(false);
    const {search, setSearch} = useContext(PostsContext);

    return (
        <div className="menuSearch">
            {isInputShown &&
                (<input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />)}
            <button onClick={() => setIsInputShown(!isInputShown)} className="btn-custom">
                <SearchIcon />
            </button>
        </div>
    )
}
export default MenuSearch