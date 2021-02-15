import Footer from "./components/Footer";
// import JumbotronDown from "./components/JumbotronDown";
import "bootstrap/dist/css/bootstrap.min.css";
// import Content from "./pages/Content";

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
	return (
		<div>
			{/* <Content /> */}

			<BrowserRouter>
				<Switch>
					<Route exact patch="/" component={LandingPage} />
				</Switch>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
