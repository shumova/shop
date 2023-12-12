import { useState } from 'react';
import classes from "./App.module.scss";

export const App = () => {
	const [count, setCount] = useState<number>(0);

	const increment = () => setCount(prev => prev + 1);

	return (
		<>
			<div className={classes.value}>
				{count}
			</div>
			<button onClick={increment} className={classes.button}>Increment</button>
		</>
	);
};
