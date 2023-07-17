import {useMemo} from "react";


import './themeToggle.scss';
import {useTheme} from "../../hooks/useTheme";
import {THEME} from "../../constants/themes";

const ThemeToggle = () => {
    const {theme, setTheme}  = useTheme();
    const isLightTheme = useMemo(() => {
        return theme === THEME.light;
    }, [ theme ])

    return (
        <button
            className={`theme-toggle theme-toggle--${theme}`}
            onClick={() => setTheme(isLightTheme ? THEME.dark : THEME.light)}
        >
            { isLightTheme ? 'Set theme to dark' : 'Set theme to light' }
        </button>
    )
}

export default ThemeToggle;