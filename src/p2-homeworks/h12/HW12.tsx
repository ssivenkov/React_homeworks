import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme, ThemeStateType, DARK, LIGHT, RED, ORANGE, YELLOW, GREEN, BLUE, VIOLET } from "./bll/themeReducer";
import { AppReducersType } from "../h10/bll/store";

const themes = [DARK, LIGHT, RED, ORANGE, YELLOW, GREEN, BLUE, VIOLET];

function HW12() {
    const dispatch = useDispatch();
    const {theme} = useSelector<AppReducersType, ThemeStateType>(state => state.theme);

    const onChangeCallback = (optionText: string) => {
        dispatch(changeTheme(optionText));
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + "-text"]}>
                homeworks 12
            </span>
            <div className={s.themesContainer}>
                <SuperRadio
                    labelClass={s.themeContainer}
                    name={"radio"}
                    options={themes}
                    value={theme}
                    onChangeOption={onChangeCallback}
                />
            </div>
            <hr/>
        </div>
    );
}

export default HW12;