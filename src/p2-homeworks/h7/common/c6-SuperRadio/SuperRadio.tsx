import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from '../c6-SuperRadio/SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: Array<string>
    onChangeOption: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeOption(e.currentTarget.value)
    }

    const mappedOptions: JSX.Element[] = options ? options.map((el, index) => (
        <label key={name + '-' + index}>
            <input
                type={'radio'}
                name={name}
                value={el}
                checked={el === value}
                onChange={onChangeCallback}
                className={el === value ? s.checkboxChecked : s.checkboxUnchecked}
            />
            {el}
        </label>
    )) : []
    /* если в mappedOptions ничего не передали то отрендерим пустой массив, т.к. нельзя рендерить пустоту */

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
