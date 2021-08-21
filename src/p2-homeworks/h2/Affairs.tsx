import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            // key всегда должен быть самым верхним элементом
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')}
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}

    return (
        <div>
            <div className={s.tasksContainer}>
                {mappedAffairs}
            </div>

            <div className={s.sortButtonsContainer}>
                <SuperButton onClick={setAll} className={s.sortButtonMargin}>All</SuperButton>
                <SuperButton onClick={setHigh} className={s.sortButtonMargin}>High</SuperButton>
                <SuperButton onClick={setMiddle} className={s.sortButtonMargin}>Middle</SuperButton>
                <SuperButton onClick={setLow} className={s.sortButtonMargin}>Low</SuperButton>
            </div>
        </div>
    )
}

export default Affairs;
