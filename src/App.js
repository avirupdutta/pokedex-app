import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import AllCards from "./components/AllCards";
import PokeDetails from "./components/PokeDetails";

function App() {
	return (
		<div className="App container">
			<Link to="/">
				<h3 className="display-4 m-4 text-center">Pokedex</h3>
			</Link>
			<div className="mb-5" />
			<hr />
			<Switch>
				<Route exact path="/" component={AllCards} />
				<Route exact path="/pokemon/:id" component={PokeDetails} />
			</Switch>
		</div>
	);
}

export default App;
