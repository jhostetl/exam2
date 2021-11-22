import {useState} from 'react';

export const description =
'The `Problem` component in `src/problem_2.js` accepts a list of attributes (`props`).\
 It expects three properties:\n\
 \
- `initial` represents the starting value\n\
- `min` represents the lowest value\n\
- `max` represents the highest value\n\
 \n\
 Write code that allows users to increment the value by clicking the "+" button or\
 decrement the value by clicking the "-" button. Although `src/index.js` passes in\
 `1` for `props.initial`, `0` for `props.min`, and `10` for `props.max`, your code\
 should work for any value of `initial`, `min`, and `max`. You can assume that\
 `props.min <= props.initial <= props.max`.\
 ';
export function Problem (props) {
    console.log('problem 2 initial:', props.initial);
    console.log('problem 2 min:', props.min);
    console.log('problem 2 max:', props.max);

    const min = 0;
    const max = 10;
    const [initial, setNumber] = useState(1);

    function add(){	
    	if (initial < max){
    		let i = initial + 1;
    		setNumber(i);
    	}
    }

    function subtract(){
    	if (initial > min){
    		let i = initial - 1;
    		setNumber(i);
    	}
    }

    return <div className="btn-group">
            <button onClick = {subtract} type="button" className="btn btn-primary">-</button>
            <span id="num_sel">{initial}</span>
            <button onClick = {add} type="button" className="btn btn-primary">+</button>
        </div>;
}