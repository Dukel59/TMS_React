import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import MenuButton from "./menuButton/menuButton";
import UserProfile from "./userProfile/userProfile";
import MenuSearch from "./menuSearch/menuSearch";

import './menu.scss'
import {ROUTES} from "../../constants/routes";
import {useCallback} from "react";

const Menu = ({user}) => {
    const navigate = useNavigate();
    const goTosignUp = useCallback(() => {
        navigate(ROUTES.signUP)
    }, [])
    return (
        <div className="menu">
            <MenuButton/>

            <NavLink to={ROUTES.signUP}>Go to sign up</NavLink>

            <button onClick={goTosignUp}>GO to sign up</button>

            <div className="menu-search-user">
                <MenuSearch/>
                <UserProfile user={user}/>
            </div>
        </div>
    )
}

export default Menu;