import React from 'react';
import { useSelector,useActions } from 'react-redux';
import Counter from './Counter';


const CounterContainer = () => {
    const counter = useSelector(state => state.counter, [])
    const {onIncrese,onDecrease} = useActions({increment,decrement});
    return <Counter />
};
export default CounterContainer;