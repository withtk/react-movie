import React from 'react';
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

const initialState = 0;

const Counter = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}


// const Counter = ({ onIncrease, onDecrease, number }) => {
//     return (
//         <>
//             <h1>{number}</h1>
//             <div>
//                 <button>+</button>
//                 <button>-</button>
//             </div>
//         </>
//     )
// }

export default Counter;