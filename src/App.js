import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Feed } from "./pages/feed"

import { Home } from "./pages/home"
import { Login } from "./pages/login"
import { Cadastrar } from "./pages/cadastrar"
import { GlobalStyle } from "./styles/global"

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/cadastrar" element={<Cadastrar />} />
				<Route path="/feed" element={<Feed />} />
			</Routes>
		</Router>
	)
}

export default App
