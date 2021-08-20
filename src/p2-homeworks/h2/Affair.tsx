import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}
    const priorityColor = s[props.affair.priority];

    return (
        <div>
            <span>{props.affair.name} - <span className={priorityColor}>{props.affair.priority}</span></span>
            <SuperButton className={s.buttonMargin} onClick={deleteCallback}>
                X
            </SuperButton>
        </div>
    )
}

export default Affair
