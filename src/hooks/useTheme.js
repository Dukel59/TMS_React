import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {setTheme} from "../stores/theme";

export const useTheme = () =>{
    const dispatch = useDispatch();
    const {theme} = useSelector(state => state.theme);
    const setThemeCallback = useCallback((value) => {
        dispatch(setTheme(value))
    }, [dispatch]);

    return {theme, setTheme: setThemeCallback};
}