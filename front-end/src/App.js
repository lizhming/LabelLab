import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home"
import DisplayImage from "./components/DisplayImage/DisplayImage"
import LabelImage from "./components/LabelImage/LabelImage"
function App() {
	return (
		<Router>
			<div>
				<nav className="navbar navbar-light bg-dark">
					<Link to="/" className="navbar-brand text-light">LabelLab</Link>
				</nav>
				<Route exact path="/" component={Home} />
				<Route exact path="/:id" component={DisplayImage} />
				<Route exact path="/label/:id" component={LabelImage} />
			</div>
		</Router>
	);
}

export default App;
