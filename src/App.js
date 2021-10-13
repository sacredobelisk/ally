import { BrowserRouter } from "react-router-dom";

import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Routes } from "./containers/routes";

import "./App.scss";

function App() {
	return (
		<div id="main-wrap">
			<BrowserRouter>
				<Header />
				<div id="content">
					<Routes />
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
