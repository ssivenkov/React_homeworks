const DARK = "homeworks/theme/DARK";
const RED = "homeworks/theme/RED";
const SOME = "homeworks/theme/SOME";

export type ThemeActionsType = {}

type initStateType = {
    theme: string
}

const initState = {
    theme: DARK,
};

export const themeReducer = (state: initStateType = initState, action: any): any => { // fix any
    switch (action.type) {
        case "DARK": {
            return {
                ...state,
                theme: action.theme,
            }
        }
        case "RED": {
            return {
                ...state,
                theme: action.theme,
            }
        }
        case "SOME": {
            return {
                ...state,
                theme: action.theme,
            }
        }
        default:
            return state;
    }
};

export const setDarkTheme = (theme: any) => ({type: DARK, theme} as const);
export const setRedTheme = (theme: any) => ({type: RED, theme} as const);
export const setSomeTheme = (theme: any) => ({type: SOME, theme} as const);

export const changeThemeC = (): any => {}; // fix any