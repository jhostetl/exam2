import {useRef, useState} from 'react';

export const description =
'Modify the code in `src/problem_3.js` so that the greeting message updates as the user types into the `<input />`\
 element, the greeting message updates. For example, if the user types `"Jane"` then the greeting\
 message should say `"Hello, Jane!"`. The updates should happen **as** the user types into the `<input />` element.';

export function Problem () {

	const inputEl = useRef("");
	const [name, setName] = useState();

    function onKeydown() {
    	setName(inputEl.current.value);
    }

    return <>
        <label htmlFor="name_input">Enter your name: </label><input onKeyUp = {onKeydown} onKeyDown={onKeydown} ref={inputEl} id="name_input" />
        <div>Hello, {name}!</div>
    </>;
}

// not sure why it's a letter behind so I added a onKeydown and onKeyUp to make it work. 