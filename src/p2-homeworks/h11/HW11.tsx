import React, { useState } from "react";
import s from "./HW11.module.css"
import SuperRange from "./common/c7-SuperRange/SuperRange";
import { SuperDoubleRange } from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    const onChangeDoubleRange = (values: [number, number]) => {
        setValue1(values[0]);
        setValue2(values[1]);
    }

    return (
        <div>
            homeworks 11
            <div>
                <span className={s.numberContainer}>{value1}</span>
                <SuperRange value={value1} onChangeRange={setValue1}/>
            </div>

            <div>
                <span className={s.numberContainer}>{value1}</span>
                <SuperDoubleRange startValues={[15, 70]}
                                  min={0}
                                  max={100}
                                  step={1}
                                  disable={false}
                                  value1={value1}
                                  value2={value2}
                                  onChangeRange={onChangeDoubleRange}
                />
                <span className={s.numberContainer}>{value2}</span>
            </div>
            <hr/>
        </div>
    )
}

export default HW11;