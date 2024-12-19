import './App.css';
import Header from './components/Navigation/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import { Provider } from 'react-redux';

import { store } from '../src/redux/index'
import AddRecipes from './pages/AddRecipes.jsx';
function App() {

	return (

		<div>
			<Provider store={store}>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route element={<Cart />} path="/cart" exact />
						<Route element={<Menu />} path="/" exact />
						<Route element={<AddRecipes />} path="/AddRecipes" exact />
					</Routes>
				</BrowserRouter>
			</Provider>
		</div>
	);
}

export default App;
