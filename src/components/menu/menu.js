import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import MenuButton from "./menuButton/menuButton";
import UserProfile from "./userProfile/userProfile";
import MenuSearch from "./menuSearch/menuSearch";

import './menu.scss'
import {ROUTES} from "../../constants/routes";
import {useCallback} from "react";
import ThemeToggle from "../themeToggle/themeToggle";

const Menu = ({user}) => {

    const navigate = useNavigate();
    const goToPosts = useCallback(() => {
        navigate(ROUTES.posts)
    }, [])

    const goToMain = useCallback(() => {
        navigate(ROUTES.main)
    }, [])

    return (
        <div className="menu">
            <MenuButton/>

            {/*<NavLink to={ROUTES.signUP}>Go to sign up</NavLink>*/}

            {/*<button onClick={goToPosts}>GO to posts</button>*/}
            {/*<button onClick={goToPosts}>GO to posts</button>*/}

            <div className="menu-search-user">
                <ThemeToggle />
                <MenuSearch/>
                <UserProfile user={user}/>
            </div>
        </div>
    )
}

export default Menu;