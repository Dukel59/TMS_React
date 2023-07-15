import { ReactComponent as SearchIcon } from '../../../assetes/svg/searchIcon.svg';


import './menuSearch.scss'
import {useState} from "react";
import Input from "../../form/input/input";
import {useDispatch, useSelector} from "react-redux";
import {setSearch} from "../../../stores/posts";
const MenuSearch = () => {

    const [isInputShown, setIsInputShown] = useState(false);
    const {search} = useSelector(state => state.posts);
    const dispatch = useDispatch();

    return (
        <div className="menuSearch">
            {isInputShown &&
                (<Input
                    value={search}
                    onChange={(event) => dispatch(setSearch(event))}
                />)}
            <button onClick={() => setIsInputShown(!isInputShown)} className="btn-custom">
                <SearchIcon />
            </button>
        </div>
    )
}
export default MenuSearch