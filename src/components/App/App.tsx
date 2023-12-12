import { useState } from 'react';
import classes from "./App.module.scss";
import { Link, Outlet } from 'react-router-dom';

export const App = () => {
	const [count, setCount] = useState<number>(0);

	const increment = () => setCount(prev => prev + 1);

	return (
		<>
			<Link to={'/about'}>about</Link> 
			<br/>
			<Link to={'/shop'}>shop</Link> 
			<div className={classes.value}>
				{count}
			</div>
			<button onClick={increment} className={classes.button}>Increment</button>
			<Outlet/>
		</>
	);
};
