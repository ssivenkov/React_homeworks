import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    onEnterKey: (e: KeyboardEvent<HTMLInputElement>) => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, onEnterKey, error, totalUsers} // деструктуризация пропсов
) => {

    return (
        <div className={s.Container}>
            <div className={s.inputContainer}>
                <SuperInputText
                    value={name}
                    onChange={setNameCallback}
                    onKeyDown={onEnterKey}
                    onBlur={setNameCallback}
                    error={error}
                />
            </div>
            <div>
                <SuperButton disabled={!name} onClick={addUser} className={s.buttonMargin}>
                    add
                </SuperButton>
                <span className={s.totalUsersCountMargin}>{totalUsers}</span>
            </div>
        </div>
    )
}

export default Greeting
