export const DARK = "dark";
export const LIGHT = "light";
export const RED = "red";
export const ORANGE = "orange";
export const YELLOW = "yellow";
export const GREEN = "green";
export const BLUE = "blue";
export const VIOLET = "violet";
const SET_THEME = "homeworks/theme/SET-THEME";

type SetThemeActionType = ReturnType<typeof changeTheme>

export type ThemeActionsType = SetThemeActionType

export type ThemeStateType = {
    theme: string
}

const initState = {
    theme: DARK,
};

export const themeReducer =
    (state: ThemeStateType = initState, action: ThemeActionsType): ThemeStateType => {
        switch (action.type) {
            case SET_THEME: {
                return {
                    ...state,
                    theme: action.theme,
                }
            }
            default:
                return state;
        }
    };

type ChangeThemeCType = {
    type: typeof SET_THEME
    theme: string
}

export const changeTheme = (theme: string): ChangeThemeCType => ({type: SET_THEME, theme});