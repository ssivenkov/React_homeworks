import React, { useState } from "react";
import s from "./Request.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import { RequestAPI } from "./dal/RequestsAPI";

export const Request = () => {
    const [requestResult, setRequestResult] = useState("Click per button for sending checkbox status");
    const [checked, setChecked] = useState<boolean>(false);
    const changeCheckboxValue = () => {
        setChecked(!checked);
    }

    const sendRequest = () => {
        RequestAPI.request(checked)
            .then(response => {
                setRequestResult(response.data.errorText);
                console.log(response.data.errorText);
            })
            .catch(error => {
                setRequestResult(error.response ? error.response.data.errorText : error.message);
                console.log(error.response ? error.response.data.errorText : error.message);
            })
    }

    return (
        <div className={s.container}>
            <div className={s.item}>
                <SuperCheckbox
                    onChangeChecked={changeCheckboxValue}
                >
                    checkbox text
                </SuperCheckbox>
            </div>
            <div className={s.item}>
                <SuperButton className={s.button}
                             onClick={sendRequest}
                >
                    send request
                </SuperButton>
            </div>
            <div className={s.item}>
                {requestResult}
            </div>
        </div>
    )
}