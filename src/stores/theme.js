import {createSlice} from "@reduxjs/toolkit";
import {THEME} from "../constants/themes";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: THEME.light
    },
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload;
        }
    },
});

export const {setTheme} = themeSlice.actions;
export default themeSlice.reducer;