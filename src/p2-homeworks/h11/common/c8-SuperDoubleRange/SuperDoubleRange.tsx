import React from "react";
import "./SuperDoubleRange.css"
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

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

type StateType = { textValue: string | null, percent: string | null, start: (number | undefined)[] };

export class SuperDoubleRange extends React.PureComponent<SuperDoubleRangePropsType, StateType> {
    state = {
        textValue: null,
        percent: null,
        start: this.props.startValues,
        end: null,
    };

    componentDidUpdate(prevProps: Readonly<SuperDoubleRangePropsType>, prevState: Readonly<StateType>) {
        if (this.props.value1 !== prevProps.value1) {
            this.setState({
                start: [this.props.value1, prevProps.value2],
            })
        }
    }

    onUpdate = (values: any[], handle: number, unencodedValues: number[], tap: boolean, positions: number[]) => {
        this.props.onChangeRange([unencodedValues[0], unencodedValues[1]]);
        /*this.setState({
         start: [this.props.value1, this.props.value2],
         /!*textValue: value[0].toFixed(2),
         percent: percent[0].toFixed(2),*!/
         });*/
    };

    render() {
        /*const { textValue, percent } = this.state;*/
        return (
            <span className={"rangeContainer"}>
                <Nouislider
                    range={{min: this.props.min, max: this.props.max}}
                    start={this.state.start}
                    step={this.props.step}
                    disabled={this.props.disable}
                    onUpdate={this.onUpdate}
                    animate={false}
                    connect={true}
                    tooltips={[
                        {
                            to(value: number) {
                                return Math.round(value);
                            },
                            from(value: number) {
                                return Math.round(value);
                            },
                        },
                        {
                            to(value: number) {
                                return Math.round(value);
                            },
                            from(value: number) {
                                return Math.round(value);
                            },
                        }]}
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