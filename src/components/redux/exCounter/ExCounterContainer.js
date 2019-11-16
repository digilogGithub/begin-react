import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {setDiff, increase, decrease} from "../../../store/exCounter/exCounterRedux";
import ExCounter from './ExCounter';

export default function ExCounterContainer() {
    const state = useSelector(state => state.counterRedux);
    const dispatch = useDispatch();

    const onSetDiff = (diff) => dispatch(setDiff(diff));
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());

    return <ExCounter state={state} onSetDiff={onSetDiff} onIncrease={onIncrease} onDecrease={onDecrease}/>
}
