import React from "react";
import s from "./SuperDoubleRange.module.css"
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

/*type SuperDoubleRangePropsType = {
    onChangeRange: (value: [number, number]) => void
    startValues: [number, number]
    min: number
    max: number
    step: number
    value1?: number
    value2?: number
    disable: boolean
}*/

/*export const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, startValues, min, max, step, disable,
    },
) => {

    const onUpdate = (render: any, handle: any, value: number[], un: any, percent: any) => {
        onChangeRange([value[0], value[1]]);
    }

    return (
        <>
            <span className={s.rangeContainer}>
                <Nouislider
                    range={{min: min, max: max}}
                    start={startValues}
                    step={step}
                    disabled={disable}
                    onUpdate={onUpdate}
                    connect={true}/>
            </span>
        </>
    )
}*/

type MapDispatchToPropsType = {
    onChangeRange: (value: [number, number]) => void
}

type MapStateToPropsType = {
    startValues: [number, number]
    min: number
    max: number
    step: number
    value1?: number
    value2?: number
    disable: boolean
}

export type SuperDoubleRangePropsType = MapStateToPropsType & MapDispatchToPropsType;

type StateType = { textValue: string | null, percent: string | null};

export class SuperDoubleRange extends React.Component<SuperDoubleRangePropsType, StateType> {
    state = {
        textValue: null,
        percent: null,
    };

    onSlide = (render: any, handle: any, value: number[], un: any, percent: any) => {
        this.props.onChangeRange([value[0], value[1]]);
        this.setState({
            textValue: value[0].toFixed(2),
            percent: percent[0].toFixed(2),
        });
    };

    render() {
        const { textValue, percent } = this.state;
        return (
            <span className={s.rangeContainer}>
                <Nouislider
                    range={{min: this.props.min, max: this.props.max}}
                    start={this.props.startValues}
                    step={this.props.step}
                    disabled={this.props.disable}
                    onUpdate={this.onSlide}
                    connect
                />
                {/*{textValue && percent && (
                    <div>
                        Value: {textValue}, percent: {percent} %
                    </div>
                )}*/}
            </span>
        );
    }
}