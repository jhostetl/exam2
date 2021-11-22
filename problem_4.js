import {useRef, useState} from 'react';

export const description =
'In `src/problem_4.js`, write code that allows the user to increment the click counter by clicking the "Clicked" `<button />`\
 element (or reset it to `0` by clicking the "Reset" `<button />`). Then, **use\
 [the `localStorage` API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to make the click count\
 persistent**. When the user reloads the page, it should remember the number of clicks.\n\n\
 - *Note 1: your code should handle plural rules correctly; it should be "Clicked 1 time" and\
 "Clicked 2 time**s**".*\n\
 - *Note 2: remember that `localStorage` can only store **strings**.*\
 ';


let initialCount = 0;
const SAVED_TASKS_KEY = 'saved_tasks';
const savedTasks = localStorage.getItem(SAVED_TASKS_KEY);

if (savedTasks != null){
	initialCount = JSON.parse(savedTasks);
}

export function Problem () {

	const [count, setCount] = useState(initialCount);
	const [countWord, setCountWord] = useState("Times");

	function setLocal(i) {
	    const stringifiedCount = JSON.stringify(i);
	    localStorage.setItem(SAVED_TASKS_KEY, stringifiedCount);
	}

	function clicked(){
		let i = count + 1;
		setCount(i);
		if (i == 1){
			setCountWord("Time");
		}else{
			setCountWord("Times");
		}
		setLocal(i);
	}

	function reset(){
		setCount(0);
		setLocal(0);
	}

    return <div className="btn-group">
            <button onClick = {clicked} className="btn btn-primary"  >Clicked {count} {countWord}</button>
            <button onClick = {reset} className="btn btn-secondary">Reset</button>
        </div>;
    ;
}