import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> =
    ({users, addUserCallback}) => { // деструктуризация пропсов
        const [name, setName] = useState<string>('')
        const [error, setError] = useState<string>('')

        const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
            let currentInputString = e.currentTarget.value.trim();
            if (currentInputString) {
                setError('')
                setName(currentInputString)
            } else {
                setName('')
                setError('Error: name is required!')
            }
        }

        const addUser = () => {
            const trimmedName = name
            if (trimmedName) {
                setError('')
                addUserCallback(trimmedName)
                alert(`Hello ${trimmedName} !`)
                setName('')
            }
        }

        const onEnterKey = (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter' && name) {
                addUser();
            }
        }

        let totalUsers = users.length

        return (
            <Greeting
                name={name}
                setNameCallback={setNameCallback}
                addUser={addUser}
                onEnterKey={onEnterKey}
                error={error}
                totalUsers={totalUsers}
            />
        )
    }

export default GreetingContainer
