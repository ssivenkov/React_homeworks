import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "./bll/store";
import { loadingSetAC, StateType } from "./bll/loadingReducer";
import './animation.css';

function HW10() {
    const dispatch = useDispatch();
    const {showLoading} = useSelector<AppStoreType, StateType>(state => state.loading)

    const setLoading = () => {
        dispatch(loadingSetAC(true))
        setTimeout(()=> {
            dispatch(loadingSetAC(false))
        }, 2500)
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {showLoading
                ? (
                    <div className="cssload-loader">
                        <div className="cssload-inner cssload-one"></div>
                        <div className="cssload-inner cssload-two"></div>
                        <div className="cssload-inner cssload-three"></div>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
