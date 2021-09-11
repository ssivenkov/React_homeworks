import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from '../c5-SuperSelect/SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: Array<string>
    onChangeOption: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange,
        onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: JSX.Element[] = options ? options.map((el, index) =>
        <option key={index} value={el}>{el}</option>) : [];
    /* переменная возвращает jsx, поэтому в типизации явно это указываем */

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption(e.currentTarget.value)
    }

    return (
        <select onChange={onChangeCallback}
                className={s.selectField}
                {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
