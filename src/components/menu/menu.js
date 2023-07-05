import MenuButton from "./menuButton/menuButton";
import UserProfile from "./userProfile/userProfile";
import MenuSearch from "./menuSearch/menuSearch";

import './menu.scss'

const Menu = ({user}) => {
    return (
        <div className="menu">
            <MenuButton/>
            <div className="menu-search-user">
                <MenuSearch/>
                <UserProfile user={user}/>
            </div>
        </div>
    )
}

export default Menu;