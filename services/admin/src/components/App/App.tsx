import { Link, Outlet } from "react-router-dom";

export const App = () => {
	return (
		<>
			<div data-testid='App.DataTestId'>
				<h1>Test</h1>
				<Link to={'/about'}>About</Link>
				<br/>
				<Link to={'/shop'}>Shop</Link>
				<Outlet/>
			</div>
		</>
	);
};
