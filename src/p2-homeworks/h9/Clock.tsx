import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css'
import moment from "moment";
import 'moment/locale/ru'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [time, setTime] = useState<string>('wait ...')
    const [date, setDate] = useState<string>()
    const [showTime, setShowTime] = useState<boolean>(false)
    const [showDate, setShowDate] = useState<boolean>(false)

    const stop = () => {
        clearTimeout(timerId)
    }
    const start = () => {
        stop()
        setShowTime(true)
        const id: number = window.setInterval(() => {
            let currentTime = moment().format('LTS')
            let currentDate = moment().format('L');
            setTime(currentTime)
            setDate(currentDate)
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShowDate(true)
    }
    const onMouseLeave = () => {
        setShowDate(false)
    }

    return (
        <div>
            {showTime && (
                <div className={s.container}
                     onMouseEnter={onMouseEnter}
                     onMouseLeave={onMouseLeave}>
                    <span className={s.text}
                    >
                    {time}
                </span>

                    {showDate && (
                        <span className={s.text}>
                        {date}
                    </span>
                    )}
                </div>
            )}
            <div className={s.buttonsContainer}>
                <SuperButton className={s.button} onClick={start}>start</SuperButton>
                <SuperButton className={s.button} onClick={stop}>stop</SuperButton>
            </div>
        </div>
    )
}

export default Clock
