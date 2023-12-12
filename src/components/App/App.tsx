import { useState } from 'react';
import classes from "./App.module.scss";
import { Link, Outlet } from 'react-router-dom';
import earthPng from '@/assets/earth.png';
import avatarJpeg from '@/assets/ms-square.jpeg';
import LogoSvg from '@/assets/logo.svg';

export const App = () => {
	const [count, setCount] = useState<number>(0);

	const increment = () => setCount(prev => prev + 1);

	// if (__PLATFORM__ === 'desktop') {
	// 	return <div>ISDESKTOPPLATFORM</div>
	// }
	
	// if (__PLATFORM__ === 'mobile') {
	// 	return <div>ISMOBILEPLATFORM</div>
	// }

	return (
		<>
			<div data-testid='App.DataTestId'>PLATFORM={__PLATFORM__}</div>
			<img width={100} src={earthPng} alt="Earth" />
			<img width={100} src={avatarJpeg} alt="Mariia Shumova" />
			<div>
				<LogoSvg width={100} height={100}/>
			</div>
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
