import React, { useState } from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";

const themes = ["dark", "red", "some"];

function HW12() {
    const theme = "some"; // useSelector

    // useDispatch, onChangeCallback

    const [value, onChangeOption] = useState(themes[0]);

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + "-text"]}>
                homeworks 12
            </span>
            <div>
                <SuperRadio
                    name={"radio"}
                    options={themes}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <hr/>
        </div>
    );
}

export default HW12;
