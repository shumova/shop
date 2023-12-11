import { useState } from 'react';
import "./App.scss";

export const App = () => {
	const [count, setCount] = useState<number>(0);

	const increment = () => setCount(prev => prev + 1);

	return (
		<>
			<div>
				{count}
			</div>
			<button onClick={increment}>Increment</button>
		</>
	);
};
